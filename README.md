# Node.js Calculator Application

A command-line calculator application that demonstrates the use of different types of Node.js modules:
1. Built-in modules (path, readline)
2. Third-party modules (colors)
3. Custom modules (calculator.js)

## Project Structure

```
bright-calculator/
├── package.json         # project metadata and dependencies
├── app.js               # main application file
├── README.md            # documentation
└── my_module/           # directory for custom modules
    └── calculator.js    # custom calculator module
```

## Features

- Performs basic arithmetic operations (addition, subtraction, multiplication, division)
- Takes user input from the terminal
- Uses color-coded console output for different operations
- Demonstrates importing and using different types of modules

## Modules Used

1. **Built-in Modules**:
   - `path`: Used to get file path information
   - `readline`: Used to create an interface for command-line input

2. **Third-party Modules**:
   - `colors`: Used to add color to console output

3. **Custom Modules**:
   - `calculator.js`: Implements arithmetic functions (add, subtract, multiply, divide)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/brightBediako/bright-calculator.git
   cd bright-calculator
   ```

2. Install dependencies:
   ```
   npm install
   ```

## Usage

Run the application:
```
npm start
```

or

```
node app.js
```

Follow the on-screen prompts to perform calculations:
1. Select an operation (1-5)
2. Enter two numbers
3. View the result
4. Repeat or exit

## Example

```
===================================
Current file: app.js
Directory: /path/to/bright-calculator
Node.js Calculator Application
===================================

Select an operation:
1. Addition
2. Subtraction
3. Multiplication
4. Division
5. Exit

Enter your choice (1-5): 2
Enter first number: 45
Enter second number: 123

Result: 45 - 123 = -78

Select an operation:
1. Addition
2. Subtraction
3. Multiplication
4. Division
5. Exit

Enter your choice (1-5): 5
Thank you for using the Bright calculator app!
```

## License

ISC
