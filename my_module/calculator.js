function calculator(num1, num2, operator) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  if (isNaN(num1) || isNaN(num2)) {
    return "Error: Invalid number";
  }

  let result;
  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    if (num2 === 0) {
      return "Error: Division by zero";
    }
    result = num1 / num2;
  }

  return result;
}

// console.log(calculator(7, 9, "+"));
// console.log(calculator(5, 40, "-"));
