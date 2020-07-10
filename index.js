//  Este arquivo deve exportar a função mdLinks que será chamada na cli.js 👌
const fs = require("fs");
const chalk = require("chalk");

function mdLinks(file) {
  return new Promise((resolved, rejected) => {
    fs.readFile(file, "utf-8", (err, data) => {
      if (err) {
        rejected(err.message);
      } else {
        const regex = data.match(/\[([^\[\]]+)\]\((https?:\/\/[^\)]*)/gm);
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

//  Função Validate  :::::::::::::::::::::::::::::::::::::::
const fetch = require("node-fetch");