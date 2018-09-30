import { initDisplay } from "./components/calculator.js";
import buttonEvents from "./helpers/buttonEvents.js";

const initializeApp = () => {
  buttonEvents();
  initDisplay();
};

initializeApp();
