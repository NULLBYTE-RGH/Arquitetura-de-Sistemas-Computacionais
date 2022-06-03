const express = require('express')
const axios = require('axios')
const app = express()

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
},express.json());

aa = {Email:"123",Senha:"123"}

app.listen(5000, () => {
    console.log(`iniciado`)
})

app.post('/create', (req, res) => {
    console.log(req.body)
    res.send(true)
})

app.post('/login', (req, res) => {
    console.log(req.body)
    res.send(aa)
})