const got = require('got');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
require('dotenv').config()

let sites = process.env.URLS.split(",");
const tamanho = sites.length

for (let i = 0;i<tamanho;i++){
    const vgmUrl= sites[i]
const isMidi = (link) => {
  return link;
};

(async () => {
  const response = await got(vgmUrl);
  const dom = new JSDOM(response.body);

const resultados = [...dom.window.document.querySelectorAll('html')]
resultados.filter(isMidi).forEach(link => {
console.log(sites[i])
console.log(link.textContent);
  });
})()
}