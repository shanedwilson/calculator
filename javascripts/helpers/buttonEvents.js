import { addNumber, setMathType, calculate } from "../components/calculator.js";

const sevenButton = document.getElementById("sevenButton");
const eightButton = document.getElementById("eightButton");
const nineButton = document.getElementById("nineButton");
const fourButton = document.getElementById("fourButton");
const fiveButton = document.getElementById("fiveButton");
const sixButton = document.getElementById("sixButton");
const oneButton = document.getElementById("oneButton");
const twoButton = document.getElementById("twoButton");
const threeButton = document.getElementById("threeButton");
const zeroButton = document.getElementById("zeroButton");
const multiButton = document.getElementById("multiButton");
const divideButton = document.getElementById("divideButton");
const addButton = document.getElementById("addButton");
const minusButton = document.getElementById("minusButton");
const equalsButton = document.getElementById("equalsButton");
const clearButton =document.getElementById("clearButton");

const addNumberCaller = e => {
  addNumber(e.target.innerHTML);
};

const sevenButtonEvent = () => {
  sevenButton.addEventListener("click", addNumberCaller);
};

const eightButtonEvent = () => {
  eightButton.addEventListener("click", addNumberCaller);
};

const nineButtonEvent = () => {
  nineButton.addEventListener("click", addNumberCaller);
};

const addButtonEvent = () => {
  addButton.addEventListener("click", () => {
    setMathType("add");
  });
};

const fourButtonEvent = () => {
  fourButton.addEventListener("click", addNumberCaller);
};

const fiveButtonEvent = () => {
  fiveButton.addEventListener("click", addNumberCaller);
};

const sixButtonEvent = () => {
  sixButton.addEventListener("click", addNumberCaller);
};

const minusButtonEvent = () => {
  minusButton.addEventListener("click", () => {
    setMathType("subtract");
  });
};

const oneButtonEvent = () => {
  oneButton.addEventListener("click", addNumberCaller);
};

const twoButtonEvent = () => {
  twoButton.addEventListener("click", addNumberCaller);
};

const threeButtonEvent = () => {
  threeButton.addEventListener("click", addNumberCaller);
};

const multiButtonEvent = () => {
  multiButton.addEventListener("click", () => {
    setMathType("multiply");
  });
};

const zeroButtonEvent = () => {
  zeroButton.addEventListener("click", addNumberCaller);
};

const equalsButtonEvent = () => {
  equalsButton.addEventListener("click", calculate);
};

const divideButtonEvent = () => {
  divideButton.addEventListener("click", () => {
    setMathType("divide");
  })
};

const clearPageEvent = () => {
    clearButton.addEventListener("click", () => {
        window.location.reload();
    })
}; 

const attachEvents = () => {
  sevenButtonEvent();
  eightButtonEvent();
  nineButtonEvent();
  addButtonEvent();
  fourButtonEvent();
  fiveButtonEvent();
  sixButtonEvent();
  minusButtonEvent();
  oneButtonEvent();
  twoButtonEvent();
  threeButtonEvent();
  multiButtonEvent();
  zeroButtonEvent();
  divideButtonEvent();
  equalsButtonEvent();
  clearPageEvent();
};

export default attachEvents;
