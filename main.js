const display = document.querySelector(".display");
const calculatorKeys = document.querySelector(".calculator-keys");
const deleteButton = document.querySelector(".delete");

let currentOperation = [0];
let operatorConditions = ["+", "-", "x", "÷"];
let currentOperator = [];
let previousOperator = [];
let leftNumber = 0;
let rightNumber = 0;

calculatorKeys.addEventListener("click", (event) => {
  const isButton = event.target.nodeName === "BUTTON";
  if (!isButton) return;

  if (event.target.classList.contains("number-button")) {
    if (currentOperator.length != 0) {
      rightNumber += event.target.value;
      display.append(event.target.value);
      currentOperation.push(rightNumber);
    } else {
      leftNumber += event.target.value;
      display.append(event.target.value);
      currentOperation.push(leftNumber);
    }
  }

  if (event.target.classList.contains("currentOperator")) {
    currentOperator = event.target.value;
    display.append(event.target.value);
    currentOperation.push(currentOperator);
    previousOperator.unshift(currentOperator);
    multiOps();
  }

  if (event.target.classList.contains("operate")) {
    operate(currentOperator);
  }

  if (event.target.classList.contains("all-clear")) {
    display.innerText = "";
    leftNumber = 0;
    currentOperator = "";
  }

  if (event.target.classList.contains("delete")) {
    del();
  }
});

// Math operations
function add(numOne, numTwo) {
  let sum = Number(numOne) + Number(numTwo);
  updateDisplay();
  updateValues(sum);

  return sum;
}

function subtract(numOne, numTwo) {
  let sum = Number(numOne) - Number(numTwo);
  updateDisplay();
  updateValues(sum);

  return sum;
}

function multiply(numOne, numTwo) {
  let sum = Number(numOne) * Number(numTwo);
  updateDisplay();
  updateValues(sum);

  return sum;
}

function divide(numOne, numTwo) {
  if (numTwo == 00) {
    updateDisplay();
    display.append("Not a number");
    return;
  }
  let sum = Number(numOne) / Number(numTwo);
  updateDisplay();
  updateValues(sum);

  return sum;
}

// Helper functions
function multiOps() {
  let multiOpsResult = null;
  if (
    operatorConditions.some((i) => currentOperation.includes(i, -1)) &&
    rightNumber != 0
  ) {
    multiOpsResult = operate(previousOperator[1]);
  }

  return multiOpsResult;
}

function operate(currentOperator) {
  switch (currentOperator) {
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

function updateValues(sum) {
  currentOperation.push(sum);
  leftNumber = sum;
  display.append(sum);
}
