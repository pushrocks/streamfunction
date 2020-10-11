import * as plugins from './streamfunction.plugins';

export class Intake<T> {
  chunkStore: T[] = [];
  private push: any;
  private readableStream = plugins.from2.obj((size, next) => {
    const localChunkStore = this.chunkStore;
    this.chunkStore = [];
    for (const chunkItem of localChunkStore) {
      next(null, chunkItem);
    }
    this.push = next;
  });

  constructor() {
    this.push = (err, chunkArg) => {
      this.chunkStore.push(chunkArg);
    };
  }

  /**
   * returns a new style readble stream
   */
  getReadable() {
    const readable = new plugins.stream.Readable();
    return readable.wrap(this.readableStream);
  }

  /**
   * returns an oldstyke readble stream
   */
  getReadableStream() {
    return this.readableStream;
  }

  pushData(chunkData: T) {
    this.push(null, chunkData);
  }

  signalEnd() {
    this.push(null, null);
  }
}
