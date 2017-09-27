import * as plugins from './streamfunction.plugins'


export class Intake<T> {
  chunkStore: T[] = []
  push: any
  readable = plugins.from2.obj((size, next) => {
    let localChunkStore = this.chunkStore
    this.chunkStore = []
    for (let chunkItem of localChunkStore) {
      next(null, chunkItem)
    }
  })

  constructor () {
    this.push = (err, chunkArg) => {
      this.chunkStore.push(chunkArg)
    }
  }

  getReadable () {
    return this.readable
  }

  pushData (chunkData: T) {
    this.push(null, chunkData)
  }

  signalEnd () {
    this.push(null, null)
  }
}
