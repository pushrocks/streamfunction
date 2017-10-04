import { expect, tap } from 'tapbundle'
import * as streamfunction from '../ts/index'
import * as streamfs from 'streamfs'

let testIntake: streamfunction.Intake<string>

tap.test('should handle a read stream', async () => {
  let counter = 0
  streamfs.createReadStream('./test/readabletext.txt')
    .pipe(streamfunction.createDuplexStream<Buffer,string>(async (chunkStringArg: Buffer, tools) => {
      // do something with the stream here
      let result = chunkStringArg.toString().substr(0,100)
      tools.pipeMore('wow =========== \n')
      return result
    })).pipe(streamfunction.createDuplexStream<string,string>(async (chunkStringArg) => {
      console.log(chunkStringArg)
      return chunkStringArg
    }))
})

tap.test('should create a valid Intake', async () => {
  testIntake = new streamfunction.Intake<string>()
  testIntake.getReadable().pipe(
    streamfs.createWriteStream('./test/writabletext.txt')
  )
  testIntake.pushData('hi')
  testIntake.pushData('wow')
  // testIntake.signalEnd()
})

tap.start()
