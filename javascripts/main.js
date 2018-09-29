import {calculate} from './components/calculator.js';
import {buttonEvents} from './helpers/buttonEvents.js';


const initializeApp = () => {
  buttonEvents();
  calculate(4, 2, "multiply"); //8
  calculate(16, 4, 'divide'); //4
  calculate(1, 1, 'add');//2
  calculate(22, 21, 'subtract')//1
};

initializeApp();

