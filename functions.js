const _ = require("lodash"); // isikeliam lodash

const stringToCamelCase = (string) => {
  const cammelCase = string
    .split(" ")
    .map((word) => {
      return word[0].toUpperCase() + word.slice(1);
    })
    .join("");
  return cammelCase[0].toLowerCase() + cammelCase.slice(1);
};

const stringToPaskalCase = (string) => {
  return string
    .split(" ")
    .map((word) => {
      return word[0].toUpperCase() + word.slice(1);
    })
    .join("");
};

// const stringToSnakeCase = (string) => {
//   return string
//     .split(" ")
//     .map((word) => {
//       return word.toLowerCase();
//     })
//     .join("_");
// };

const stringToSnakeCase = (string) => {
  const stringArr = string.split(" ");
  const res = [];
  for (let i = 0; i < stringArr.length; i++) {
    res.push(stringArr[i].toUpperCase());
  }
  return res.join("_");
};

const stringToKebabCase = (string) => {
  return string
    .split(" ")
    .map((word) => {
      return word.toLowerCase();
    })
    .join("-");
};

// lodash funkcija

function getRandomNuber(a, b) {
  return _.random(a, b, true);
}

module.exports = { stringToCamelCase, stringToPaskalCase, stringToSnakeCase, stringToKebabCase, getRandomNuber };
