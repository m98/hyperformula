import {sheets, expectedValues} from '../sheets/13-sheet-d'
import {benchmarkCsvSheets} from '../benchmark'
import {Config} from '../../src'

(async () => {
  const s = sheets()

  console.info('\n === Sheet D (GPU) === ')
  await benchmarkCsvSheets(s, expectedValues(), {
    millisecondsPerThousandRows: 10000,
    numberOfRuns: 3,
    engineConfig: new Config({ gpuMode: 'gpu' })
  })
})()