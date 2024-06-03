const express = require('express');
const app = express()

const port = 3000

let pessoas = [
  {
    nome: 'João',
    idade: 18,
    id: 1
  },
  {
    nome: 'João',
    idade: 18,
    id: 2
  },
  {
    nome: 'João pedro',
    idade: 15,
    id: 3
  }
]

app.use(express.json())

app.get('/', (req, res) => {
  console.log('bati na raiz')
	res.send('estou na minha api')
})

app.get('/pessoas', (req, res) => {
  console.log('bati na pessoa')
  res.json('estou na pessoa')
})

app.post('/pessoas', (req, res) =>{
  console.log('bati na pessoa')
  const pessoa = req.body
  pessoas.push(pessoa)
  res.json(pessoas)
})

app.listen(()=>{
  console.log('server is up', port)
})