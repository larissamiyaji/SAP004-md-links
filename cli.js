#!/usr/bin/env node
//  Esse documento irá chamar e manipular a função mdLinks criada no index.js

const chalk = require("chalk");
const mdLinks = require("./index.js");
const filePosition = process.argv[2]; //  Pega o arquivo na posição 2 da CLI

let linksEmptyArray = [];
const links = function () {
  mdLinks(filePosition)
    .then((mapText) => {
      // console.log(mapText); //  Retorna o array de objetos do mapText
      mapText.forEach((element) => {
        let linksArray = linksEmptyArray.push(
          console.log(chalk.green.bold(`Nome: ${element.text}`)),
          console.log(chalk.yellow.bold(`Link: ${element.href}`)),
          console.log(chalk.grey.bold(`Documento: ${element.file}`))
        );
        console.log("----------"); // Deixar separado cada link
      });
    })
    .catch(console.log("Erro"));
};

links(filePosition);

//Função Validate (verifica se o link funciona ou não)
const axios = require("axios");