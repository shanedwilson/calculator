import { printToDom } from "../helpers/util.js";
import { multiply, divide, add, subtract} from "../helpers/maths.js";

const calc = {
  firstNumber: "",
  secondNumber: "",
  mathType: "",
  display: ""
};

const calculate = () => {
  let answer = 0;
  switch (calc.mathType) {
    case "multiply":
      answer = multiply(calc.firstNumber, calc.secondNumber);
      break;
    case "divide":
      answer = divide(calc.firstNumber, calc.secondNumber);
      break;
    case "add":
      answer = add(calc.firstNumber, calc.secondNumber);
      break;
    case "subtract":
      answer = subtract(calc.firstNumber, calc.secondNumber);
      break;
    default:
      answer = "nope";
  }
  setDisplay(answer);
};

const setDisplay = (someNumber) => {
  calc.display = someNumber;
  printToDom(calc.display, "result");
};

const setMathType = (newMathType) => {
  calc.mathType = newMathType;
};

const initDisplay = () => {
  printToDom(0, "result");
};

const addNumber = num => {
  if (calc.mathType === "") {
    calc.firstNumber += num;
    setDisplay(calc.firstNumber);
  } else {
    calc.secondNumber += num;
    setDisplay(calc.secondNumber);
  }
};

export { calculate, addNumber, initDisplay, setMathType };
