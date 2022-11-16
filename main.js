// display
const display = document.querySelector(".display");
// containers
const calculatorKeys = document.querySelector(".calculator-keys");
// const numberButtons = document.querySelector(".number-buttons");
// const operationButtons = document.querySelector(".operation-buttons");
// const operateButton = document.querySelector(".operate-button");
// const allClearButton = document.querySelector(".all-clear");

let displayValue = [0];
let operatorConditions = ["+", "-", "x", "÷"];
let leftNumber = 0;
let operator = [];
let previousOperator = [];
let rightNumber = 0;

function displayWindow() {
  calculatorKeys.addEventListener("click", (event) => {
    const isButton = event.target.nodeName === "BUTTON";
    let currentValue = event.target.value;
    if (!isButton) {
      return;
    } else if (event.target.classList.contains("number-button")) {
      if (operator.length === 0) {
        leftNumber += event.target.value;
        display.append(event.target.value);
        displayValue.push(leftNumber);
      } else if (operator.length > 0) {
        rightNumber += event.target.value;
        display.append(event.target.value);
        displayValue.push(rightNumber);
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

  // numberButtons.addEventListener("click", (event) => {
  //   if (operator.length === 0) {
  //     leftNumber += event.target.value;
  //     display.append(event.target.value);
  //     displayValue.push(leftNumber);
  //   } else if (operator.length > 0) {
  //     rightNumber += event.target.value;
  //     display.append(event.target.value);
  //     displayValue.push(rightNumber);
  //   }
  // });
  // operationButtons.addEventListener("click", (event) => {
  //   operator = event.target.value;
  //   display.append(event.target.value);
  //   displayValue.push(operator);
  //   previousOperator.unshift(operator);
  // });
  // // include in one event listener?
  // operationButtons.addEventListener("click", () => {
  //   console.log(multiOps());
  // });
  // operateButton.addEventListener("click", () => {
  //   console.log(operate(operator));
  // });
  // allClearButton.addEventListener("click", () => {
  //   display.innerText = "";
  //   leftNumber = 0;
  //   operator = "";
  // });
}
displayWindow();

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
