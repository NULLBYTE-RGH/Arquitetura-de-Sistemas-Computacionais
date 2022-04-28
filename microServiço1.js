const got = require('got');
const jsdom = require("jsdom");
const fs = require('fs');
const { url } = require('inspector');
require('dotenv').config()

const { JSDOM } = jsdom;

let sites = process.env.URLS.split(",");
const tamanho = sites.length

for (let i = 0;i<tamanho;i++){
    const Url= sites[i]

const Filtro1 = (link) => {
  return link;
};

(async () => {
  const response = await got(Url);
  var Nome = Url.toString().split("/")[2]

  Nome = `(${Nome}).html`
  console.log(Nome)

fs.writeFile(Nome, response.body, (err) => {
    if (err) throw err;
  console.log(`Site ${Url} Clonado com sucesso!`);

});
})()
}