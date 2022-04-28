const got = require('got');
const fs = require('fs');
const { url } = require('inspector');
const scrape = require('website-scraper');
const PuppeteerPlugin = require('website-scraper-puppeteer');
const path = require('path');
const { PassThrough } = require('stream');

require('dotenv').config()



let sites = process.env.URLS.split(",");
const tamanho = sites.length

var hora = new Date();
var dia = new Date();


for (let i = 0;i < tamanho;i++) {

const Url= sites[i]
let Nome = Url.toString().split("/")[2]
console.log(`Clonando ${Url}.....`)

try{
scrape({
  
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
},

()=>{

var hora = hora.getHours() + ":" + hora.getMinutes() + ":" + hora.getSeconds();
var dia = dia.getFullYear()+'-'+(dia.getMonth()+1)+'-'+dia.getDate();
let data = {hora,dia}
data = JSON.stringify(data);

fs.writeFile(`${Nome}/DATAclonagem.json`, data, (err) => {
    if (err) throw err;
  console.log(`Clonagem Completa! ---> ${Nome}`);

})})

}
catch(e){}
}
