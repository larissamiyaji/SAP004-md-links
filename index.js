//  Este arquivo deve exportar a função mdLinks que será chamada na cli.js 👌
const fs = require("fs");

function mdLinks(file) {
  return new Promise((resolved, rejected) => {
    fs.readFile(file, "utf-8", (err, data) => {
      //  "data" é o conteúdo dentro do arquivo
      console.log(file); // Lê a 1ª linha do documento index.js e diz se é um diretório (pelo menos isso, Senhor 🙌) [[[Pensar em como fazer ler o resto]]]
      console.log(data); // Lê todo o conteúdo do README.md com o comando "node index.js README.md"
      console.log(err);
      if (err) {
        rejected(err.message);
      } else {
        const regex = data.match(/\[([^\[\]]+)\]\((https?:\/\/[^\)]*)\)/gm);
        const mapText = regex.map((item) => {
          const splitText = item.split("](");
          const text = splitText[0].replace("\n", "");
          const href = splitText[1];
          return { text, href, file };
        });
        resolved(mapText);
      }
    });
  });
}

const filePosition = process.argv[2]; //  Pega o arquivo na posição 2 da CLI
mdLinks(filePosition); //  Mostra o README.md no terminal

module.exports = mdLinks;

//  const regex = /\[([^\[\]]+)\]\((https?:\/\/[^\)]*)\)/gm; // Regex para Markdown
//  const file = []; //  Guardar temporariamente os arquivos.
