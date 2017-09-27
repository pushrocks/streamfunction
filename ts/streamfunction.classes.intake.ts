import * as plugins from './streamfunction.plugins'
import { Readable } from 'stream'

export class Intake<T> {
  readable = new Readable()

  getReadable () {
    return this.readable
  }

  pushData (chunkData: T) {
    this.readable.push(chunkData)
  }

  signalEnd () {
    this.readable.push(null)
  }
}
