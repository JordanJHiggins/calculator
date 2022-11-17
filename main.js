const display = document.querySelector(".display");
const calculatorKeys = document.querySelector(".calculator-keys");

let displayValue = [0];
let operatorConditions = ["+", "-", "x", "÷"];
let operator = [];
let previousOperator = [];
let leftNumber = 0;
let rightNumber = 0;

calculatorKeys.addEventListener("click", (event) => {
  const isButton = event.target.nodeName === "BUTTON";
  if (!isButton) {
    return;
  } else if (event.target.classList.contains("number-button")) {
    if (operator.length != 0) {
      rightNumber += event.target.value;
      display.append(event.target.value);
      displayValue.push(rightNumber);
    } else {
      leftNumber += event.target.value;
      display.append(event.target.value);
      displayValue.push(leftNumber);
    }
  } else if (event.target.classList.contains("operator")) {
    operator = event.target.value;
    display.append(event.target.value);
    displayValue.push(operator);
    previousOperator.unshift(operator);
    multiOps();
  } else if (event.target.classList.contains("operate")) {
    operate(operator);
  } else if (event.target.classList.contains("all-clear")) {
    display.innerText = "";
    leftNumber = 0;
    operator = "";
  }
});

// Math operations
function add(numOne, numTwo) {
  let sum = Number(numOne) + Number(numTwo);
  // Move this code for each operation to seperate function
  displayValue.push(sum);
  updateDisplay();
  leftNumber = sum;
  display.append(sum);

  return sum;
}

function subtract(numOne, numTwo) {
  let sum = Number(numOne) - Number(numTwo);
  displayValue.push(sum);
  updateDisplay();
  leftNumber = sum;
  display.append(sum);

  return sum;
}

function multiply(numOne, numTwo) {
  let sum = Number(numOne) * Number(numTwo);
  displayValue.push(sum);
  updateDisplay();
  leftNumber = sum;
  display.append(sum);
  return sum;
}

function divide(numOne, numTwo) {
  let sum = Number(numOne) / Number(numTwo);
  displayValue.push(sum);
  updateDisplay();
  leftNumber = sum;
  display.append(sum);
  return sum;
}

// Helper functions
function multiOps() {
  let multiOpsResult = null;

  if (
    operatorConditions.some((i) => displayValue.includes(i, -1)) &&
    rightNumber != 0
  ) {
    multiOpsResult = operate(previousOperator[1]);
  }

  return multiOpsResult;
}

function operate(operator) {
  switch (operator) {
    case "+":
      return add(leftNumber, rightNumber);
    case "-":
      return subtract(leftNumber, rightNumber);
    case "x":
      return multiply(leftNumber, rightNumber);
    case "÷":
      return divide(leftNumber, rightNumber);
  }
}

function updateDisplay() {
  leftNumber = 0;
  rightNumber = 0;

  display.innerHTML = "";
}
