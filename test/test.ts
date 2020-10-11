import { expect, tap } from '@pushrocks/tapbundle';
import * as streamfunction from '../ts/index';
import * as streamfs from '@pushrocks/streamfs';

import * as smartstream from '@pushrocks/smartstream';

let testIntake: streamfunction.Intake<string>;

tap.test('should handle a read stream', async () => {
  const counter = 0;
  const testSmartstream = new smartstream.Smartstream([
    streamfs.createReadStream('./test/readabletext.txt'),
    streamfunction.createDuplexStream<Buffer, Buffer>(
      async (chunkStringArg: Buffer, tools) => {
        // do something with the stream here
        const result = chunkStringArg.toString().substr(0, 100);
        tools.pipeMore('wow =========== \n');
        return Buffer.from(result);
      },
      async (tools) => {
        // tools.pipeMore('hey, this is the end')
        return Buffer.from('this is the end');
      },
      { objectMode: false }
    ),
    streamfunction.createDuplexStream<Buffer, string>(async (chunkStringArg) => {
      console.log(chunkStringArg.toString());
      return null;
    }),
    smartstream.cleanPipe(),
  ]);
  await testSmartstream.run();
});

tap.test('should create a valid Intake', async () => {
  testIntake = new streamfunction.Intake<string>();
  testIntake
    .getReadable()
    .pipe(
      streamfunction.createDuplexStream(
        async (chunkString) => {
          return chunkString;
        },
        async () => {
          return 'noice';
        }
      )
    )
    .pipe(streamfs.createWriteStream('./test/writabletext.txt'));
  testIntake.pushData('hi');
  testIntake.pushData('wow');
  testIntake.signalEnd();
});

tap.start();
