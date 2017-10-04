import * as plugins from './streamfunction.plugins'

import { Stream, Transform } from 'stream'

export interface ITruncateFunc {
  (): void
}

export interface IPipeMoreFunc {
  (pipeObject: any): void
}

export interface IStreamTools {
  truncate: ITruncateFunc
  pipeMore: IPipeMoreFunc
}

export interface IStreamFunction<T,rT> {
  (stringChunkArg: T, toolsArg: IStreamTools): Promise<rT>
}

export interface IStreamEndFunction<rT> {
  (toolsArg: IStreamTools): Promise<rT>
}

export let createDuplexStream = function <T,rT> (funcArg: IStreamFunction<T,rT>, endFuncArg?: IStreamEndFunction<rT>) {
  return plugins.through2.obj(function (chunk, enc, cb) {
    let truncated = false
    let tools: IStreamTools = {
      truncate: () => {
        truncated = true
        cb(null, null)
      },
      pipeMore: (pipeObject) => {
        this.push(pipeObject)
      }
    }
    let asyncWrapper = async () => {
      let resultChunk: rT = await funcArg(chunk, tools)
      if (!truncated) {
        cb(null, resultChunk)
      }
    }
    asyncWrapper()
  }, function (cb) {
    let tools: IStreamTools = {
      truncate: () => {
        cb()
      },
      pipeMore: (pushArg) => {
        this.push(pushArg)
      }
    }
    let asyncWrapper = async () => {
      if (endFuncArg) {
        let result = await endFuncArg(tools)
        this.push(result)
      }
      cb()
    }
  })
}
