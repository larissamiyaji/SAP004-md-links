#!/usr/bin/env node

//  Grab provided args.
const [, , ...args] = process.argv;
const http = require("https");
const chalk = require('chalk');
//  Print Hello World provided args.
console.log(chalk.cyan(`Oi, Deus. Sou eu de novo ${chalk.magenta(args)}`));


//          Cores do Chalk
//  console.log(chalk.red("Hello"));
//  console.log(chalk.green("Hello"));
//  console.log(chalk.yellow("Hello"));
//  console.log(chalk.blue("Hello"));
//  console.log(chalk.magenta("Hello"));
//  console.log(chalk.cyan("Hello"));
//  console.log(chalk.white("Hello"));
//  console.log(chalk.gray("Hello"));
//  console.log(chalk.bgRed("Hello"));
//  console.log(chalk.bgGreen("Hello"));
//  console.log(chalk.bgYellow("Hello"));
//  console.log(chalk.bgBlue("Hello"));
//  console.log(chalk.bgMagenta("Hello"));
//  console.log(chalk.bgCyan("Hello"));
//  console.log(chalk.bgWhite("Hello"));