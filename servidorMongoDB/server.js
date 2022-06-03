const express = require('express')
const axios = require('axios')
const app = express()
const { MongoClient } = require('mongodb');


const username = '*******'
const password='********'

aa = {Email:"123",Senha:"123"}

async function main() {

    const url = `mongodb+srv://${username}:${password}@novagas.t3o1vam.mongodb.net/?retryWrites=true&w=majority`;

    const client = new MongoClient(url);

    try {
        //await client.connect();
        
        app.listen(5000, () => {
            console.log(`iniciado`)
        })

        app.use(function (req, res, next) {
            res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
            res.setHeader('Access-Control-Allow-Credentials', true);
            next();
        },express.json());

        app.post('/create', async (req, res) => {
            console.log(req.body.credenciais)
            info = await CRUD(client, req.body.credenciais,1)
            res.send(info);
        })
        
        app.post('/login', async(req, res) => {
            console.log(req.body.credenciais)
            info = await CRUD(client, req.body.credenciais,2)
            console.log(info)
            res.send(info)
        })
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}


async function CRUD(client,dados,opcao) {
    if (opcao===1){

        await client.connect();

        if (await (async ()=>{
        await client.connect();
        a = await client.db("Maua").collection("Maua").findOne({Email:dados.Email});
        console.log(a!=null)
        return a
        })()!=null){

        return false

        }
        else{
            const resultado = await client.db("Maua").collection("Maua").insertOne(dados);
            console.log(`New listing created with the following id: ${resultado.insertedId}`)
            return true
        }
}
    else if (opcao===2){
        await client.connect();
        const result = await client.db("Maua").collection("Maua").findOne({Email:dados.Email});
        if (result) {
            console.log(result.Senha)
            console.log(`Usuario '${result.PrimeiroNome}'encontrado:`);
            if(result.Senha==dados.Senha){
            return true
            }
            else return false
        } else{
            console.log(`Usuario'${dados.Email}' não encontrado`);
            return false
        }
    }
}


main().catch(console.error);


