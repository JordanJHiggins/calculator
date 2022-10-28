// display
const display = document.querySelector(".display");
// containers
const numberButtons = document.querySelector(".numButtonsContainer");
const operationButtons = document.querySelector(".operationButtonContainer");
const operateButton = document.querySelector(".operateButtonContainer");

let displayValue = [0];
// let operatorConditions = ["+", "-", "x", "/"];
let leftNumber = 0;
let operator = "";
let rightNumber = 0;

function displayWindow() {
  // Move into seperate functions?

  numberButtons.addEventListener("click", (event) => {
    if (operator.length === 0) {
      leftNumber += Number(event.target.value);
      display.append(event.target.value);
      displayValue.push(leftNumber);
    } else if (operator.length > 0) {
      rightNumber += Number(event.target.value);
      display.append(event.target.value);
      displayValue.push(rightNumber);
    }
  });

  operationButtons.addEventListener("click", (event) => {
    operator = event.target.value;
    display.append(event.target.value);
    displayValue.push(operator);
  });
  // include in one event listener?
  operationButtons.addEventListener("click", () => {
    operate();
  });

  operateButton.addEventListener("click", () => {
    operate();
  });
}
displayWindow();
// Math operations

function add(numOne, numTwo) {
  let sum = Number(numOne) + Number(numTwo);
  displayValue.push(sum);
  leftNumber = sum;
  numberclear();
  leftNumber = sum;

  return sum;
}

function subtract(numOne, numTwo) {
  let sum = Number(numOne) - Number(numTwo);
  displayValue.push(sum);
  numberclear();
  leftNumber = sum;

  return sum;
}

function multiply(numOne, numTwo) {
  let sum = Number(numOne) * Number(numTwo);
  displayValue.push(sum);
  numberclear();
  leftNumber = sum;

  return sum;
}

function divide(numOne, numTwo) {
  let sum = Number(numOne) / Number(numTwo);
  displayValue.push(sum);
  numberclear();
  leftNumber = sum;

  return sum;
}

// Helper functions

// function multiOps() {
//   if (
//     console.log(operatorConditions.some((i) => displayValue.includes(i, -1)))
//   ) {
//     operate();
//   }
// }

function operate() {
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

function numberclear() {
  // Should this function also clear the display? or seperate function
  leftNumber = 0;
  rightNumber = 0;
}
