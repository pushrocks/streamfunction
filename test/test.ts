import { expect, tap } from 'tapbundle'
import * as streamfunction from '../ts/index'
import * as streamfs from 'streamfs'

let testIntake: streamfunction.Intake<string>

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

tap.test('should create a valid Intake', async () => {
  testIntake = new streamfunction.Intake<string>()
  testIntake.pushData('hi')
  testIntake.getReadable().pipe(
    streamfs.createWriteStream('./test/writabletext.txt')
  )
  testIntake.pushData('wow')
  testIntake.signalEnd()
})

tap.start()
