#!/usr/bin/env node
//  Esse documento irá chamar e manipular a função mdLinks criada no index.js

const chalk = require("chalk");
const mdLinks = require("./index.js");
const filePosition = process.argv[2]; //  Pega o arquivo na posição 2 da CLI

const links = function () {
  mdLinks(filePosition)
    .then((mapText) => {
      mapText.forEach((element) => {
        console.log(chalk.green.bold(`Nome: ${element.text}, Link: ${element.href}, Documento: ${element.file}`));
      });
    })
    .catch(console.log("Erro"));
};

links(filePosition);

//  console.log(chalk.cyan(`Oi, Deus. Sou eu de novo ${chalk.magenta(args)}`)); //  Printa "Hello World" + os argumentos dados
//  const [, , ...args] = process.argv; //  Pega os argumentos passados
//  console.log(chalk.green.bold("Deu certo")))
//  .catch(console.log(chalk.red.bold("Deu erro")));
