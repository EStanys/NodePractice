const { stringToCamelCase, stringToPaskalCase, stringToSnakeCase, stringToKebabCase } = require("./functions");

console.log("stringToCamelCase", stringToCamelCase("viskas puikiai veikia"));
console.log("stringToPaskalCase", stringToPaskalCase("viskas puikiai veikia"));
console.log("stringToSnakeCase", stringToSnakeCase("viskas puikiai veikia"));
console.log("stringToKebabCase", stringToKebabCase("viskas puikiai veikia"));

// pradeti organizuoti savo koda su npm
// npm init
// npm install --save lodash arba npm i lodash

// node_modules direktorijoje yra visos musu projekto priklausomybes
// sitas folderis neturetu buti pridedamas i git
// .gitignore - faile nurodom failus is direktojas kuriu nenorim prideti i git. parasyt kelia iki ju pvz /node_module

// package.json - galime keisti parametrus
// package-lock.json - negalime nieko keisti
