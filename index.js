const fs = require("fs"); //  Biblioteca para fazer a transmissão do doc no Node

//  const regex = /\[([^\[\]]+)\]\((https?:\/\/[^\)]*)\)/gm; //  Regex para Markdown
//  const files = []; //  Guardar temporariamente os arquivos.
const fileMD = process.argv[2]; //  Pega o arquivo na posição 2 da CLI

function mdLinks(file){
  return new Promise((resolved, rejected) => {
    fs.readFile(file, "utf-8", (err, data) => {
      if(err){
        rejected(err.message);
      } else {
        const regex = data.match(/\[([^\[\]]+)\]\((https?:\/\/[^\)]*)\)/gm);
        const 
      }
    })
  })
}

module.exports = mdLinks;