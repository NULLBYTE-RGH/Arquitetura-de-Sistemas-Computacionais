const got = require('got')
const fs = require('fs')
const { url } = require('inspector')
const scrape = require('website-scraper')
const PuppeteerPlugin = require('website-scraper-puppeteer')
const path = require('path')
const { PassThrough } = require('stream')

require('dotenv').config()

let sites = process.env.URLS.split(",")
const tamanho = sites.length

var hora = new Date()
var dia = new Date()

var ListaSitesAtualizar = []

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
        try {
            fs.unlinkSync(PastaRemover)
          } catch(err) {
            console.error(err)
          }
        return  1
    }
    else{
        return  0
    }
}
//=============================================

async function Scrapping(URLS){
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

}

catch(e){}
hora = hora.getHours() + ":" + hora.getMinutes() + ":" + hora.getSeconds()
dia = dia.getFullYear()+'-'+(dia.getMonth()+1)+'-'+dia.getDate()
let data = {hora,dia}
data = JSON.stringify(data)

fs.writeFile(`${Nome}/DATAclonagem.json`, data, (err) => {
    if (err) throw err
  console.log(`Clonagem Completa! ---> ${Nome}`)

})
}
}

async function Iniciar(){
for (let i = 0;i < tamanho;i++) {
    const Url= sites[i]
    let Nome = Url.toString().split("/")[2]
    const dir = `./${Nome}`

    if (fs.existsSync(dir)) {
        console.log('Site ja Clonado!')
        console.log('Verificando se precisa Atualizar....')
        if(ChecarAtualizacao(Nome) == true){
            ListaSitesAtualizar.push(Url)
            console.log(ListaSitesAtualizar)
        }
        else{
            console.log("Site Em dia! Nao eh necessario atualizar :)")
        }  
    }   
    else {
        ListaSitesAtualizar.push(Url)
}
}
try{
await Scrapping(ListaSitesAtualizar)
}
catch(e){}
}

Iniciar()