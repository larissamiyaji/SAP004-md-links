/*
module.exports = () => {
  // ...
};
*/
//  function mdLinks

//  Regex para Markdown
//  const regex = /\[([^\]]*)\]\(([^\)]*)\)/mg;

const fs = require("fs"); //  Biblioteca para fazer a transmissão do doc no Node
const files = []; //  Guardar temporariamente os arquivos.
const fileMD = process.argv[2]; //  Pega o arquivo na posição 2 da CLI
const regex = /(http|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?/gm; //  Regex para Markdown