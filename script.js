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
    display.textContent = operator;
}

function calculate() {
    if (firstNumber === "" || operator === "" || secondNumber === "") return;

    let result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
    
    if (result === "Error") {
        display.textContent = "Error";
    } else {
        display.textContent = Math.round(result * 1000000) / 1000000; // Round to prevent overflow
        firstNumber = result;
    }
    secondNumber = "";
    operator = "";
}

function operate(op, num1, num2) {
    switch (op) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/': return num2 === 0 ? "Error" : num1 / num2;
        default: return "Error";
    }
}

function clearDisplay() {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    display.textContent = "0";
}

window.addEventListener('DOMContentLoaded', (event) => {
    display = document.getElementById("display");
});
