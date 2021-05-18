const stringToCamelCase = (string) => {
  console.log(
    "res:",
    string
      .split(" ")
      .map((word) => {
        return word[0].toUpperCase() + word.slice(1);
      })
      .join("")
  );
};

module.exports = stringToCamelCase;
