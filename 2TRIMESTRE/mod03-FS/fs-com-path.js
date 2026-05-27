// importar PATH e FS
// Path possui (join para juntar caminhos e Resolve
// para deduzir subdiretórios e S.O)
const fs = require('fs')
const path = require('path')



// Salvar o Caminho em um váriavel
// const caminho = path.join(__dirname, 'README.md')//Markdown, text, doc
console.log(caminho)

// Abrir, ler, deleter, editar
const arquivo = fs.readFileSync(caminho, 'utf-8')
console.log(arquivo)