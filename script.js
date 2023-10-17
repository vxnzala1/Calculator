let firstNumber = "";
let secondNumber = "";
let operator = "";
let display = document.getElementById("display");

function appendNumber(num) {
    if (operator === "") {
        firstNumber += num;
        display.textContent = firstNumber;
    } else {
        secondNumber += num;
        display.textContent = secondNumber;
    }
}

function setOperator(op) {
    if (firstNumber === "") return;
    operator = op;
}

function calculate() {
    if (firstNumber === "" || operator === "" || secondNumber === "") return;

    let result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
    
    if (result === "Error") {
        display.textContent = "Error";
    } else {
        display.textContent = result;
        firstNumber = result;
    }
    secondNumber = "";
    operator = "";
}

function operate(operator, num1, num2) {
    switch (operator) {
        case "+": return num1 + num2;
        case "-": return num1 - num2;
        case "*": return num1 * num2;
        case "/": return num2 === 0 ? "Error" : num1 / num2;
        default: return "Error";
    }
}

function clearDisplay() {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    display.textContent = "0";
}
