const http = require('node:http')
const porta = 8002

const server = http.createServer((req, res)=>{
    const novaUrl = new URL(req.url, `http://${req.headers.host}`) //http://localhost
    const caminhoUrl = novaUrl.pathname
    if(caminhoUrl === '/'){

        res.statusCode = '201'
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.end('<h3>HTML Rocks!!</h3>')
    } else { 

    res.statusCode = '401'
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end('<h3>401 Não Autorizado</h3>')
}
})
server.listen(porta, ()=>{
    console.log(`Servidor rodando na porta 
        http://local""host:${porta}`)
    })