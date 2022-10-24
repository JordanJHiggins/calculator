// display
const display = document.querySelector(".display");
// containers
const numberButtons = document.querySelector(".numButtonsContainer");
const operationButtons = document.querySelector(".operationButtonContainer");
const operateButton = document.querySelector(".operateButtonContainer");

let displayValue = [0];
let leftNumber = 0;
let operator = "";
let rightNumber = 0;

function displayWindow() {
  // Move into seperate functions?
  numberButtons.addEventListener("click", (event) => {
    if (operator.length === 0) {
      leftNumber += event.target.value;
      display.append(event.target.value);
    } else if (operator.length > 0) {
      rightNumber += event.target.value;
      display.append(event.target.value);
    }
  });

  operationButtons.addEventListener("click", (event) => {
    operator = event.target.value;
    display.append(event.target.value);
  });

  operateButton.addEventListener("click", () => {
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
  });
}

// Math operations

function add(numOne, numTwo) {
  let sum = Number(numOne) + Number(numTwo);
  //   displayValue = sum;
  displayValue.push(sum);
  //   display.innerHTML = sum;
  numberclear();
  return sum;
}

function subtract(numOne, numTwo) {
  let sum = Number(numOne) - Number(numTwo);
  //   displayValue = sum;
  displayValue.push(sum);
  //   display.innerHTML = sum;
  numberclear();
  return sum;
}

function multiply(numOne, numTwo) {
  let sum = Number(numOne) * Number(numTwo);
  //   displayValue = sum;
  displayValue.push(sum);
  //   display.innerHTML = sum;
  numberclear();
  return sum;
}

function divide(numOne, numTwo) {
  let sum = Number(numOne) / Number(numTwo);
  //   displayValue = sum;
  displayValue.push(sum);
  //   display.innerHTML = sum;
  numberclear();
  return sum;
}

function runningTotal() {
  let total = displayValue.reduce((acc, currentVal) => {
    return acc + currentVal;
  }, 0);
  return total;
}

function numberclear() {
  leftNumber = 0;
  rightNumber = 0;
}

displayWindow();
