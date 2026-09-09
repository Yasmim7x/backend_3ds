
const fs = require('fs')
const path = require('path')
const chalk = require('chalk').default

try {
    const caminho = path.resolve(__dirname, 'README.md')
    const arquivo = fs.readFileSync(caminho, 'utf-8')
    console.log(chalk.green('Arquivo carregado com sucesso!'))

    console.log(arquivo)
} catch (error) {
 console.log(chalk.yellow('Falha ao carregar o arquivo, Tente novamente mais tarde.'))
 console.log(chalk.red('Erro interno de leitura de arquivo; \n', error.message))
}