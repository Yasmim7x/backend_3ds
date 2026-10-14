import express from 'express';
import path from 'path'
const PORT = process.env.PORT || 3000
const app = express()

const baseDir = import.meta.dirname

app.use(express.static(path.join(baseDir, 'src/publico')))

app.get('/', (req, res) => {
    res.sendFile('src/paginas/index.html', {root: baseDir})
})
app.get('/sobre', (req, res) => {
    res.sendFile('src/paginas/sobre.html', {root: baseDir})
})
app.get('/servicos', (req, res) => {
    res.sendFile('src/paginas/servicos.html', {root: baseDir})
})
app.get('/contatos', (req, res) => {
    res.sendFile('src/paginas/contatos.html', {root: baseDir})
})

app.listen(PORT, () => { console.log('Servidor vivo!' +PORT)})