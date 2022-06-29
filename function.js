const math = (num1, num2, operator) => {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Bitte Eingabe überprüfen!";
  }

  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return "Bitte Eingabe überprüfen!";
  }
};

module.exports = { math };
