const http = require('node:http')
const path = require('node:path')
const fs = require('node:fs')
const porta = 8081

// Caminhos dos arquivos
const home = path.join(__dirname, 'pages/index.html')
const sobre = path.join(__dirname, 'pages/sobre.html')
const error = path.join(__dirname, 'pages/404.html')
const css = path.join(__dirname, 'public/estilo.css')
// Certifique-se de que o caminho abaixo para a imagem está correto no seu projeto:
const bts = path.join(__dirname, 'public') 

const server = http.createServer((req, res) => {
    const novaUrl = new URL(req.url, `http://${req.headers.host}`)
    const caminhoUrl = novaUrl.pathname

    // 1. Rota da Home (Ajustado para o caminho padrão '/' e status 200)
    if (caminhoUrl === '/' || caminhoUrl === '/index.html') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        return res.end(fs.readFileSync(home, 'utf-8'))
    } 

    // 2. Rota do CSS (Corrigido o nome 'estilo.css' e alterado para aceitar a chamada)
    if (caminhoUrl === '/public/estilo.css') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/css')
        return res.end(fs.readFileSync(css, 'utf-8'))
    }

    // 3. Rota da Imagem (Corrigido Content-Type para imagem jpeg)
    if (caminhoUrl === '/images.bts.jpg' || caminhoUrl === '/public/images.bts.jpg') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'image/jpeg')
        return res.end(fs.readFileSync(bts))
    }
    
    // 4. Rota Sobre (Corrigido status para 200)
    if (caminhoUrl === '/sobre') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        return res.end(fs.readFileSync(sobre, 'utf-8'))
    } 

    // 5. Qualquer outra rota não encontrada cai no 404 (Página de Erro)
    res.statusCode = 404
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    return res.end(fs.readFileSync(error, 'utf-8'))
})

server.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`)
})
