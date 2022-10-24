// display
const display = document.querySelector(".display");
// containers
const numberButtons = document.querySelector(".numButtonsContainer");
const operationButtons = document.querySelector(".operationButtonContainer");
const operateButton = document.querySelector(".operateButtonContainer");

let displayValue = 0;
let leftNumber = 0;
let operator = "";
let rightNumber = 0;

function displayWindow() {
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
        return console.log(add(leftNumber, rightNumber));
      case "-":
        return console.log(subtract(leftNumber, rightNumber));
      case "x":
        return multiply(userInput);
      case "÷":
        return divide(userInput);
    }
  });
}

// Math operations
function add(numOne, numTwo) {
  let sum = Number(numOne) + Number(numTwo);
  display.innerHTML = sum;
  return sum;
}

function subtract(numOne, numTwo) {
  let sum = Number(numOne) - Number(numTwo);

  display.innerHTML = sum;
  return sum;
}
displayWindow();
