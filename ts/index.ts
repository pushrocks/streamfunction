import * as plugins from './streamfunction.plugins'
import { Stream, Transform } from 'stream'

export interface IStreamFunction {
  (stringChunkArg: string): Promise<string>
}

export let createDuplexStream = (funcArg: IStreamFunction) => {
  return plugins.through2.obj((chunk, enc, cb) => {
    let asyncWrapper = async () => {
      let resultChunk: string = await funcArg(chunk)
      cb(null, resultChunk)
    }
    asyncWrapper()
  })
}
