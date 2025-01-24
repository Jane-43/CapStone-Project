"use strict";

let tableBody2 = document.getElementById("table-body2");

let pFlowers = [
  { id: 1, name: "Lavender", price: 20.89, quantity: 4 },
  { id: 2, name: "Lilac", price: 25.36, quantity: 7 },
  { id: 3, name: "Iris", price: 15.98, quantity: 3 },
  { id: 4, name: "Hyacinth", price: 19.56, quantity: 15 },
  { id: 5, name: "Wisteria", price: 22.89, quantity: 15 },
  { id: 6, name: "Crocus", price: 15.89, quantity: 15 },
  { id: 7, name: "Verbena", price: 40.09, quantity: 23 },
  { id: 8, name: "Petunia", price: 23.59, quantity: 15 },
  { id: 9, name: "Salvia", price: 15.29, quantity: 23 },
  { id: 10, name: "Aster", price: 25.89, quantity: 5 },
  { id: 11, name: "Columbine", price: 25.89, quantity: 10 },
  { id: 12, name: "Bellflower", price: 10.25, quantity: 15 },
  { id: 13, name: "Sweet pea", price: 15.89, quantity: 45 },
  { id: 14, name: "Pansy", price: 20.15, quantity: 7 },
  { id: 15, name: "Viola", price: 36.12, quantity: 1 },
  { id: 16, name: "Morning glory", price: 45.89, quantity: 8 },
  { id: 17, name: "Liatris", price: 32.56, quantity: 28 },
  { id: 18, name: "Allium", price: 29.89, quantity: 2 },
];

function renderFlowers(arr) {
  tableBody2.innerHTML = "";
  arr.forEach((pFlowers) => {
    let tr = document.createElement("tr");
    let nameTd = document.createElement("td");
    let priceTd = document.createElement("td");
    let quantityTd = document.createElement("td");
    nameTd.innerHTML = pFlowers.name;
    priceTd.innerHTML = pFlowers.price;
    quantityTd.innerHTML = pFlowers.quantity;
    tr.appendChild(nameTd);
    tr.appendChild(priceTd);
    tr.appendChild(quantityTd);
    tableBody2.appendChild(tr);
  });
}

let purpleList = document.getElementById("purpleFlowers");
purpleList.addEventListener("click", () => {
  console.log("click");
  renderFlowers(pFlowers);
  let f = document.getElementById("purple");
});

alert("Low stock on a few items!");
