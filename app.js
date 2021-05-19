const {
  stringToCamelCase,
  stringToPaskalCase,
  stringToSnakeCase,
  stringToKebabCase,
  getRandomNuber,
} = require("./functions");

const _ = require("lodash"); // isikeliam lodash. priimta, kad lodash pasivadinam _

console.log("stringToCamelCase", stringToCamelCase("viskas puikiai veikia"));
console.log("stringToPaskalCase", stringToPaskalCase("viskas puikiai veikia"));
console.log("stringToSnakeCase", stringToSnakeCase("viskas puikiai veikia"));
console.log("stringToKebabCase", stringToKebabCase("viskas puikiai veikia"));
console.log("random:", getRandomNuber(0, 10));

// pradeti organizuoti savo koda su npm
// npm init
// npm install --save lodash arba npm i lodash

// node_modules direktorijoje yra visos musu projekto priklausomybes
// sitas folderis neturetu buti pridedamas i git
// .gitignore - faile nurodom failus is direktojas kuriu nenorim prideti i git. parasyt kelia iki ju pvz /node_module

// package.json - galime keisti parametrus
// package-lock.json - negalime nieko keisti

// idiegti nodemon kaip dev dependency - funkcionalumas naudojamas tik aplikacijo kurimo metu (ju nereikia turet aplikacijoj kai ji veikia , jos tik padeda kurimo metu)
// dev dependencies instaliuojam su flagu: --save-dev
// npm install --save-dev nodemon
// paleidziam su: nodemon app.js - jis seks app.js faila ir paleisim ji iskart issaugojus faila, nebereiks kviesti per node app.js

// instaliuojam paketus globaliai - tai reiskia veiks visur, ant visu projektu bus galima naudoti
// sudo npm install -g nodemon. Sudo naudojam ant maco, taip darom su administratoriaus teisemis. Reikes visada kai noresime
// jei paketas turi veikt musu projekte tai reiketu lokaliai instaliuoti kaip lodash.
