#!/usr/bin/env node

//  Grab provided args.
const [, , ...args] = process.argv;
const http = require("https");


//  Print Hello World provided args.
console.log(`Hello World ${args}`);
