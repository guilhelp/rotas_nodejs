// Criando um servidor em express com node.js

const express = require("express")
const app = express()

app.get("/", function(req, res){
    res.end("PAGINA INDEX")
})

app.get("/cadastrar/:produto", function(req, res){
    res.end("PRODUTO: " + req.params.produto)
})

app.get("/pesquisar/:produto/:modelo", function(req, res){
    res.end("PRODUTO: " + req.params.produto + " MODELO: " + req.params.modelo)
})

app.get("/contato/:sac/:produto/", function(req, res){
    res.end("SAC: " + req.params.sac + " PRODUTO: " + req.params.produto)
})

app.listen(8081, function(){
    console.log('Servidor rodando na porta 8081')
})
