const got = require('got')
const fs = require('fs')
const jsdom = require("jsdom");
const { url } = require('inspector')
const scrape = require('website-scraper')
const PuppeteerPlugin = require('website-scraper-puppeteer')
const path = require('path')
const { PassThrough } = require('stream')
const express = require('express')
const axios = require('axios')

require('dotenv').config()
const app = express()
app.use(express.json())
const { JSDOM } = jsdom;

let sites = process.env.URLS.split(",")
const tamanho = sites.length

var hora = new Date()
var dia = new Date()

var ListaSitesAtualizar = []

const Porta_Ouvir = 4003

var PortaAberta = 0
//----------------------Conec Microservico----------------
function Microservico(){
    if(PortaAberta == 0 ){

    app.listen(Porta_Ouvir, () => {
        console.log(`Microservico 1  iniciado na porta ${Porta_Ouvir}`)
        PortaAberta = 1
    })
    
}
    app.get('/clonados', (req, res) => {
        res.send({sites})
    })
    
    app.get('/requisitar_clonagem', (req, res) => {
        let sites_novos
        sites_novos = JSON.stringify(req.body.sites)
        sites_novos = sites_novos.replaceAll('"',"").split(",")

        for (let i=0; i< sites_novos.length; i++) {
            ListaSitesAtualizar.push(sites_novos[i])
        }
        console.log(ListaSitesAtualizar)
        res.sendStatus(201)
        Scrapping(ListaSitesAtualizar)
        //===================================aqui=====================
        dot = fs.readFileSync(".env",'utf8')
        dot = dot.replaceAll("'",'').split("URLS=")   
        dot = dot[1].toString().split(",")
        for(let i=0;i<ListaSitesAtualizar.length;i++) {
            
            dot.push(ListaSitesAtualizar[i])
        }
        let DotSemDuplicado = dot.filter((este, i) => dot.indexOf(este) === i);
        dot = DotSemDuplicado.toString()
        fs.writeFileSync(".env",`URLS='${dot}'`)
        //===================================aqui=====================
    })
}
//----------------------/Conec Microservico----------------

//=============================================
async function ChecarAtualizacao(Pasta){
    let PastaRemover = Pasta
    Pasta  = `./${Pasta}/DATAclonagem.json`
    var dataAtual = new Date()
    var dataDoArquivo = new Date()
    var dataAtual = dataAtual.getFullYear()+'-'+(dataAtual.getMonth()+1)+'-'+dataAtual.getDate()

    // var hora = new Date();
    // var hora = hora.getHours() + ":" + hora.getMinutes() + ":" + hora.getSeconds();

    data = fs.readFileSync(Pasta)
    data = JSON.parse(data)
    dataDoArquivo = data.dia
    if (dataAtual>dataDoArquivo){
        console.log(`Precisa Atualizar ${Pasta}`)
        // try {
        //     fs.unlinkSync(PastaRemover)
        //   } catch(err) {
        //     console.error(err)
        //   }
        return  1
    }
    else{
        return  0
    }
}
//=============================================

async function Scrapping(URLS,tipo){

    if (tipo ==1){

for (let i = 0;i < URLS.length;i++) {

const Url= URLS[i]
let Nome = Url.toString().split("/")[2]
console.log(`Clonando ${Url}.....`)

try{
await scrape({
  
  urls: [Url],
  directory: path.resolve(__dirname, Nome),

  plugins: [ 
      new PuppeteerPlugin({
          launchOptions: { 
              
              headless: true
          }, 
          scrollToBottom: {
              timeout: 30000, 
              viewportN: 54321 
          }
      })
  ]
})

let data = {hora,dia}
data = JSON.stringify(data)

fs.writeFile(`${Nome}/DATAclonagem.json`, data, (err) => {
    if (err) throw err
  console.log(`Clonagem Completa! ---> ${Nome}`)

})

}

catch(e){}

}
    }
//==============================EXPERIMENTAL================
    else{

async function rapido(){

let sites = process.env.URLS.split(",");

const tamanho = sites.length

for (let i = 0;i<tamanho;i++){
const Url= sites[i]
var Nome = Url.toString().split("/")[2]
let Nome_Dir = Nome
try{
fs.mkdir(path.join(__dirname, Nome_Dir), (err) => {
  if (err) {
      return console.error(err);
  }

  (async () => {
    const response = await got(Url);
    
    console.log(Nome)
    
    fs.writeFile(Nome_Dir.concat(`/${Nome_Dir}.html`), response.body, (err) => {
      if (err) throw err;
      let data = {hora,dia}
      data = JSON.stringify(data)
    
      fs.writeFile(`${Nome_Dir}/DATAclonagem.json`, data, (err) => {
      if (err) throw err
      console.log(`Clonagem Completa! ---> ${Nome}`)
    
    })
    console.log(`Site ${Url} Clonado com sucesso!`);
    
    });
    })()

}
);
}
catch(e){
    console.log(e)
}
}

}
rapido()

    }
//==============================EXPERIMENTAL================

//=====================================================
ListaSitesAtualizar = []
Microservico()
//=====================================================
}

async function Iniciar(){
hora = hora.getHours() + ":" + hora.getMinutes() + ":" + hora.getSeconds()
dia = dia.getFullYear()+'-'+(dia.getMonth()+1)+'-'+dia.getDate()

for (let i = 0;i < tamanho;i++) {
    const Url= sites[i]
    let Nome = Url.toString().split("/")[2]
    const dir = `./${Nome}`

    if (fs.existsSync(dir)) {
        console.log("----------------------------------------------------------------")
        console.log(`${Nome} ja Clonado!`)
        console.log('Verificando se precisa Atualizar....')
        if(ChecarAtualizacao(Nome) == true){
            ListaSitesAtualizar.push(Url)
            console.log(ListaSitesAtualizar)
            console.log("eh necessario atualizar!")
            console.log("----------------------------------------------------------------")
        }
        else{
            console.log("Site Em dia! Nao eh necessario atualizar :)")
            console.log("----------------------------------------------------------------")
        }  
    }   
    else {
        ListaSitesAtualizar.push(Url)
}
}
try{
//clonagem simples = 0, completa = 1
await Scrapping(ListaSitesAtualizar,0)
}
catch(e){}
}
Iniciar()

