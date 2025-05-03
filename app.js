const path = require("path");
const readline = require("readline");
const colors = require("colors");

//  custom module
const calculator = require("./my_module/calculator");

// configuring colors
colors.setTheme({
  add: "green",
  subtract: "blue",
  multiply: "yellow",
  divide: "red",
  info: "cyan",
  error: "brightRed",
});

// interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Display application information
console.log(colors.info("==================================="));
console.log(colors.info(`Current file: ${path.basename(__filename)}`));
console.log(colors.info(`Directory: ${path.dirname(__filename)}`));
console.log(colors.info("Node.js Calculator Application"));
console.log(colors.info("==================================="));

// menu function
function showMenu() {
  console.log("\nSelect an operation:");
  console.log("1. Addition".green);
  console.log("2. Subtraction".blue);
  console.log("3. Multiplication".yellow);
  console.log("4. Division".red);
  console.log("5. Exit");

  rl.question("\nEnter your choice (1-5): ", (choice) => {
    switch (choice) {
      case "1":
        performOperation("add");
        break;
      case "2":
        performOperation("subtract");
        break;
      case "3":
        performOperation("multiply");
        break;
      case "4":
        performOperation("divide");
        break;
      case "5":
        console.log(
          colors.info("Thank you for using the Bright calculator app!")
        );
        rl.close();
        break;
      default:
        console.log(colors.error("Invalid choice! Please try again."));
        showMenu();
    }
  });
}

// Function to get input values and perform calculation
function performOperation(operation) {
  rl.question("Enter first number: ", (num1) => {
    rl.question("Enter second number: ", (num2) => {
      let result;
      let coloredOperation;

        // Validate input
      switch (operation) {
        case "add":
          result = calculator.add(num1, num2);
          coloredOperation = `${num1} + ${num2} = ${result}`.add;
          break;
        case "subtract":
          result = calculator.subtract(num1, num2);
          coloredOperation = `${num1} - ${num2} = ${result}`.subtract;
          break;
        case "multiply":
          result = calculator.multiply(num1, num2);
          coloredOperation = `${num1} × ${num2} = ${result}`.multiply;
          break;
        case "divide":
          result = calculator.divide(num1, num2);
          coloredOperation = `${num1} ÷ ${num2} = ${result}`.divide;
          break;
      }

      console.log("\nResult:", coloredOperation);
      showMenu();
    });
  });
}


showMenu();
