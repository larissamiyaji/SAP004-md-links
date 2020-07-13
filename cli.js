#!/usr/bin/env node

const chalk = require("chalk");
const mdLinks = require("./index.js");
const filePosition = process.argv[2];

let linksEmptyArray = [];
const links = function () {
  mdLinks(filePosition)
    .then((mapText) => {
      mapText.forEach((element) => {
        let linksArray = linksEmptyArray.push(
          console.log(chalk.green.bold(`Nome: ${element.text}`)),
          console.log(chalk.yellow.bold(`Link: ${element.href}`)),
          console.log(chalk.grey.bold(`Documento: ${element.file}`))
        );
      });
    })
    .catch(console.log("Erro"));
};

links(filePosition);
