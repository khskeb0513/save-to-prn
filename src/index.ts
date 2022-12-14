import {Printer} from "virtual-printer";
import {writeFileSync, mkdirSync} from 'fs'
import {resolve, join} from 'path'

const printer = new Printer({
    name: 'save-to-prn',
    port: 3001
})

const outputDir = resolve('output/')

mkdirSync(outputDir, {recursive: true})
printer.on('data', (handledJob, data) => {
    console.log(handledJob)
    writeFileSync(join(outputDir, Date.now() + '.prn'), data)
})
