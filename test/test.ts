import { expect, tap } from 'tapbundle'
import * as streamfunction from '../ts/index'
import * as streamfs from 'streamfs'

tap.test('should handle a read stream', async () => {
  let counter = 0
  streamfs.createReadStream('./test/readabletext.txt')
    .pipe(streamfunction.createDuplexStream<string,string>(async (chunkStringArg: string) => {
      // do something with the stream here
      console.log(`Chunk #${counter}: ${chunkStringArg}`)
      let result = ''
      return result
    }))
})

tap.start()
