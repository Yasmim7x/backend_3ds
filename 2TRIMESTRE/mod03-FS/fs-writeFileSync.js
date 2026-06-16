
const fs = require('fs')
const path = require('path')
const frasePreferida = `Amo o Cortis e o Jungkook!`
const log = `Bangchan husband da Yas!`

try {
    const arquivo = path.resolve(__dirname, 'frase.md')
    fs.writeFileSync(arquivo, frasePreferida, 'utf-8')

    fs.writeFileSync(arquivo, log, 'utf-8')
} catch (error) {
console.log(error.message)
}