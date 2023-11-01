"use strict";

let products = [
  { product: "Gummy Worms", price: 5.79 },
  { product: "Plain M&Ms", price: 2.89 },
  { product: "Peanut M&Ms", price: 2.89 },
  { product: "Swedish Fish", price: 3.79 },

  { product: "Sour Candy", price: 2.15 },
  { product: "Sour Patch", price: 4.10 },
  { product: "Skittles", price: 4.00 },
  { product: "Sour Skittles", price: 3.80 },
  { product: "Bon Bon Bum", price: 5.70 },
  { product: "Frunas", price: 2.05 },
]

  products.sort(function (a,b) {
    if (a.product < b.product) return -1;
    else if (a.product == b.product) return 0;
    else return 1;
  });

  let numProducts = products.length;
  for(let i = 0; i < numProducts; i++) {
    console.log(products[i].product);
  }

  console.log("----------");

  products.sort(function (a,b) {
    if (a.price > b.price) return -1;
    else if (a.price == b.price) return 0;
    else return 1;
  });

  numProducts = products.length;
  for(let i = 0; i < numProducts; i++) {
    console.log("$ " + products[i].price.toFixed(2));
  }

