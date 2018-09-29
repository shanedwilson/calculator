import {printToDom} from '../helpers/util.js';
import {multiply, divide, add, subtract} from '../helpers/maths.js';

const calculate = (num1, num2, mathType) => {
  let answer = 0;
  switch (mathType) {
    case "multiply":
      answer = multiply(num1, num2);
      break;
    case "divide":
      answer = divide(num1, num2);
      break;
    case "add":
      answer = add(num1, num2);
      break;
    case "subtract":
      answer = subtract(num1, num2);
      break;
    default:
      answer = "nope";
  }
  printToDom(answer, "result");
};

export {calculate};