import * as plugins from './streamfunction.plugins'
import { Stream, Transform } from 'stream'

export interface ITruncateFunc {
  (): void
}

export interface IStreamTools {
  truncate: ITruncateFunc
}

export interface IStreamFunction {
  (stringChunkArg: string, toolsArg: IStreamTools): Promise<string>
}

export let createDuplexStream = (funcArg: IStreamFunction) => {
  return plugins.through2.obj((chunk, enc, cb) => {
    let truncated = false
    let tools: IStreamTools = {
      truncate: () => {
        truncated = true
        cb(null, null)
      }
    }
    let asyncWrapper = async () => {
      let resultChunk: string = await funcArg(chunk, tools)
      if (!truncated) {
        cb(null, resultChunk)
      }
    }
    asyncWrapper()
  })
}
