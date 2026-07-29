
const fs = require('node:fs')
const path = require('node:path')

const frasePreferida = `a vida é mais feliz com o cortis nela!\n`
const log = `o jungkook pediu pizza!!\n`

try {
    const arquivo = path.resolve(__dirname, 'frase.md')
    fs.appendFileSync(arquivo, frasePreferida, 'utf-8')

    fs.appendFileSync(arquivo, log, 'utf-8')
    
} catch (error) {
console.log(error.message)
}