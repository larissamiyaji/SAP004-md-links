#!/usr/bin/env node
//  Esse documento irá chamar e manipular a função mdLinks criada no index.js 👌


const chalk = require("chalk"); //  Pra deixar o console mais colorido e eu ficar feliz 😃
const [, , ...args] = process.argv; //  Pega os argumentos passados
//  const http = require("https"); //   Isso eu não lembro porque coloquei aqui... 😒
//  const mdLinks = require("./index.js"); //   Importando a função mdLinks do index.js 👌

console.log(chalk.cyan(`Oi, Deus. Sou eu de novo ${chalk.magenta(args)}`)); //  Printa "Hello World" + os argumentos dados

//  mdLinks.then().catch(); //  Fazer a promise