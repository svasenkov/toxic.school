import { ieFix } from "./utils/ie-fix";
import { iosVhFix } from "./utils/ios-vh-fix";

import { initModals } from "./modules/init-modals";

const button = document.querySelector(".button-link");
const hiddenText = document.querySelector(".hidden-text");
let myFuncCalls = 0;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function runOut(min, max) {
  let rect = button.getBoundingClientRect();
  let maxX = window.screen.width - rect.left;
  let maxY = window.screen.height - rect.top;

  if (myFuncCalls > 2) {
    // hiddenText.style.top = "30%";
    // hiddenText.style.right = "10px";

    button.style.top = "60%";
    button.style.right = "0";
    button.style.left = "auto";
    button.style.transform = "translate(50%)";
    // button.style.display = "none";
  } else {
    button.style.left = getRandomInt(0, maxX) + "px";
    button.style.top = getRandomInt(0, maxY) + "px";
    button.style.transform = "translate(0)";
    // button.style.transform = "translateY(-100%)";

    myFuncCalls++;
  }
}

// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------

initModals();

button.addEventListener("mouseenter", function (e) {
  runOut();
});

button.addEventListener("touchstart", function (e) {
  runOut();
});

button.addEventListener("click", function (e) {
  e.preventDefault();

  hiddenText.style.top = "60%";
  hiddenText.style.right = "-5px";
  button.style.display = "none";

  setTimeout(() => {
    window.location = button.href;
  }, 3000);
});
