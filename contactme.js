"use strict";

const output = document.getElementById("thanks");
const button = document.getElementById("submit");

button.addEventListener("click", () => clickHandler());

function clickHandler() {
  output.innerHTML = `<p>Thank You!</p>`;
  button.style.display = "none";
}
