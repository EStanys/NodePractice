const prompt = require("prompt");
const {
  stringToCamelCase,
  stringToPaskalCase,
  stringToSnakeCase,
  stringToKebabCase,
  getRandomNuber,
} = require("../functions");
//
// Start the prompt
//
prompt.start();

//
// enter the text - change it to kabab case with function in functions.js
//
prompt.get(["YourSentense"], function (err, result) {
  //
  // Log the results.
  //
  console.log("Command-line input received:");
  console.log("Sentence to kebab case:", stringToKebabCase(result.YourSentense));
});
