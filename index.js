//  Este arquivo deve exportar a função mdLinks que será chamada na cli.js 👌
const fs = require("fs");
const chalk = require("chalk");

function mdLinks(file) {
  return new Promise((resolved, rejected) => {
    fs.readFile(file, "utf-8", (err, data) => {
      //  "data" é o conteúdo dentro do arquivo
      console.log(chalk.cyan.bold("O arquivo lido é: "), chalk.greenBright.bold(file)); // Lê qual o arquivo está sendo lido (README.md)
      console.log(chalk.magenta.bold(data)); // Lê todo o conteúdo do README.md com o comando "node index.js README.md"
      console.log(chalk.red.bold("Não há erros por enquanto")); // "null"
      if (err) {
        rejected(err.message);
      } else {
        const regex = data.match(/\[([^\[\]]+)\]\((https?:\/\/[^\)]*)\)/gm);
        const mapText = regex.map((item) => {
          const splitText = item.split("](");
          const text = splitText[0].replace("[", "");
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
