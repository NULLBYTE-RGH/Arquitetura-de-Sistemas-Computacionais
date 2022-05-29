const got = require('got');
const jsdom = require("jsdom");
const fs = require('fs');
const { url } = require('inspector');
require('dotenv').config()
const path = require('path');

const { JSDOM } = jsdom;

var hora = new Date()
var dia = new Date()

hora = hora.getHours() + ":" + hora.getMinutes() + ":" + hora.getSeconds()
dia = dia.getFullYear()+'-'+(dia.getMonth()+1)+'-'+dia.getDate()

async function rapido(){
  let sites = process.env.URLS.split(",");
  const Url= sites[0]
  var Nome = Url.toString().split("/")[2]

const tamanho = sites.length

for (let i = 0;i<tamanho;i++){
const Url= sites[i]
let Nome_Dir = Nome

fs.mkdir(path.join(__dirname, Nome_Dir), (err) => {
  if (err) {
      return console.error(err);
  }
  console.log('Directory created successfully!');

  (async () => {
    const response = await got(Url);
    
    Nome = `${Nome}.html`
    console.log(Nome)
    
    fs.writeFile(Nome_Dir.concat(`/${Nome}`), response.body, (err) => {
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

});
}

}

rapido()