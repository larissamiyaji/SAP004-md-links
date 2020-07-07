#!/usr/bin/env node
//  Esse documento irá chamar e manipular a função mdLinks criada no index.js

const chalk = require("chalk");
const mdLinks = require("./index.js");
const filePosition = process.argv[2]; //  Pega o arquivo na posição 2 da CLI

const links = function () {
  mdLinks(filePosition)
    .then((mapText) => {
      mapText.forEach((element) => {
        console.log(
          chalk.green.bold(`Nome: ${element.text}`),
          chalk.yellow.bold(`Link: ${element.href}`),
          chalk.grey.bold(`Documento: ${element.file}`)
        );
      });
    })
    .catch(console.log("Houve algum erro"));
};

links(filePosition);
