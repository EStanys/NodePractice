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
// Get properties from the user: username and email
//
prompt.get(["YourSentense"], function (err, result) {
  //
  // Log the results.
  //
  console.log("Command-line input received:");
  console.log("Sentence to kebab case:", stringToKebabCase(result.YourSentense));
});
