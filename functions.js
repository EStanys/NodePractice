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
module.exports = { stringToCamelCase, stringToPaskalCase };
