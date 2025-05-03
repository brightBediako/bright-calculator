function add(a, b) {
    return Number(a) + Number(b);
}

function subtract(a, b) {
    return Number(a) - Number(b);
}

function multiply(a, b) {
    return Number(a) * Number(b);
}

function divide(a, b) {
    if (Number(b) === 0) {
        return "Error: Division by zero is not allowed";
    }
    return Number(a) / Number(b);
}


module.exports = {
    add,
    subtract,
    multiply,
    divide
};