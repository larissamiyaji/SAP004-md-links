#!/usr/bin/env node
//  Esse documento irá chamar e manipular a função mdLinks criada no index.js 👌

const chalk = require("chalk"); //  Pra deixar o console mais colorido e eu ficar feliz 😃
const mdLinks = require("./index.js"); //   Importando a função mdLinks do index.js 👌

const filePosition = process.argv[2]; //  Pega o arquivo na posição 2 da CLI
mdLinks(filePosition).then().catch();

//  const http = require("https"); //   Conseguir ler os links com https
//  console.log(chalk.cyan(`Oi, Deus. Sou eu de novo ${chalk.magenta(args)}`)); //  Printa "Hello World" + os argumentos dados
//  const [, , ...args] = process.argv; //  Pega os argumentos passados