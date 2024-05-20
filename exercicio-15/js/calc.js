import calculate from "./calculate.js";
import copyToClipBoard from "./copyToClipBoard.js";
import themeSwitcher from "./themeSwitcher.js";

const main = document.querySelector("main");
const root = document.querySelector(":root");
const resultInput = document.getElementById("result");
const input = document.getElementById("input");
const allowedkeys = [
  "(",
  ")",
  "/",
  "*",
  "-",
  "+",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
  "1",
  "0",
  ".",
  "%",
  " ",
];

document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", function () {
    const value = charKeyBtn.dataset.value;
    input.value += value;
  });
});

document.getElementById("clear").addEventListener("click", function () {
  input.value = "";
  input.focus();
});

input.addEventListener("keydown", function (ev) {
  ev.preventDefault();
  if (allowedkeys.includes(ev.key)) {
    input.value += ev.key;
    return;
  }
  if (ev.key === "Backspace") {
    input.value = input.value.slice(0, -1);
  }
  if (ev.key === "Enter") {
    calculate();
  }
});

document.getElementById("equal").addEventListener("click", calculate);

document.getElementById("copyToClipboard").addEventListener("click", copyToClipBoard)

document.getElementById("themeSwitcher").addEventListener("click", themeSwitcher)
