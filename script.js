const calculator = document.querySelector(".calculator");
const display = document.querySelector(".calculator__display");
const buttons = calculator.querySelector(".calculator__buttons");

let firstNum, operator, previousKey, previousNum;
let isFirstOperendExist = false;

display.addEventListener("input", function (event) {
  const numbers = event.target.value;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < "0" || numbers[i] > "9") {
      alert("Press only number!");
      return;
    }
  }
  previousKey = "number";
});

buttons.addEventListener("click", function (event) {
  const target = event.target;
  const action = target.classList[0];
  const buttonContent = target.textContent;

  switch (action) {
    case "number":
      if (display.value === "0" || previousKey === "operator") {
        display.value = buttonContent;
      } else if (previousKey === "calculate") {
        display.value = buttonContent;
        operator = "";
      } else {
        display.value = display.value + buttonContent;
      }
      break;
    case "operator":
      if (operator && previousKey === "number") {
        display.value = calculate(firstNum, operator, display.value);
      }
      firstNum = display.value;
      operator = buttonContent;
      break;
    // case "decimal":
    //   if (previousKey === "operator") {
    //     display.value = "0.";
    //   }
    //   if (!display.value.includes(".")) {
    //     display.value += ".";
    //   }
    //   break;
    case "clear":
      display.value = "0";
      firstNum = "";
      operator = "";
      break;
    case "calculate":
      if (operator) {
        previousNum = display.value;

        if (previousKey === "calculate") {
          display.value = calculate(previousNum, operator, firstNum);
        } else {
          display.value = calculate(firstNum, operator, previousNum);
        }
      }
      break;
    default:
      console.log("???");
      break;
  }

  previousKey = action;
});
