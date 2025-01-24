"use strict";

let tableBody = document.getElementById("table-body");

let flowers = [
  { id: 1, name: "Primrose", price: 20.0, quantity: 4 },
  { id: 2, name: "Carnival", price: 24.98, quantity: 7 },
  { id: 3, name: "Flamingo", price: 15.98, quantity: 3 },
  { id: 4, name: "Powder Pink", price: 35.89, quantity: 15 },
];

function renderFlowers(arr) {
  tableBody.innerHTML = "";
  arr.forEach((flowers) => {
    let tr = document.createElement("tr");
    let nameTd = document.createElement("td");
    let priceTd = document.createElement("td");
    let quantityTd = document.createElement("td");
    nameTd.innerHTML = flowers.name;
    priceTd.innerHTML = flowers.price;
    quantityTd.innerHTML = flowers.quantity;
    tr.appendChild(nameTd);
    tr.appendChild(priceTd);
    tr.appendChild(quantityTd);
    tableBody.appendChild(tr);
  });
}

let pinkList = document.getElementById("pinkFlowers");
pinkList.addEventListener("click", () => {
  console.log("click");
  renderFlowers(flowers);
  let f = document.getElementById("pink");
});
