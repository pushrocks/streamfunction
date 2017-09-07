import { expect, tap } from 'tapbundle'
import * as streamfunction from '../ts/index'

tap.test('first test', async () => {
  console.log(streamfunction.standardExport)
})

tap.start()
