#!/usr/bin/env node
//  Esse documento irá chamar e manipular a função mdLinks criada no index.js

const chalk = require("chalk");
const mdLinks = require("./index.js");
const filePosition = process.argv[2]; //  Pega o arquivo na posição 2 da CLI

let linksEmptyArray = [];
const links = function () {
  mdLinks(filePosition)
    .then((mapText) => {
        console.log(mapText); //  Retorna o array de objetos do mapText
      mapText.forEach((element) => {
        let linksArray = linksEmptyArray.push(/*"Testando")*/ //  Aparece números muito doidos
          console.log(chalk.green.bold(`Nome: ${element.text}`)),
          console.log(chalk.yellow.bold(`Link: ${element.href}`)),
          console.log(chalk.grey.bold(`Documento: ${element.file}`)));
          console.log("----------"); // Deixar separado cada link
        //  console.log(linksArray); // Aparece números muito doidos
        //  console.log(linksEmptyArray); //  Aparece como "undefined"

        /*console.log(
          chalk.green.bold(`Nome: ${element.text}`),
          chalk.yellow.bold(`Link: ${element.href}`),
          chalk.grey.bold(`Documento: ${element.file}`)
        );*/
      });
    })
    .catch(console.log("Erro"));
};

links(filePosition);
