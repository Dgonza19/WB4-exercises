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

  // TODO:  fill the array with 10 candies of various
  //        price ranges
];

console.log("----------");

// Which candies costs less than $4.00?

let candyLessThan4 = [];

for (let i = 0; i < products.length; i++) {
  let candyInfo = products[i];
  if (candyInfo.price <= 4)

  candyLessThan4.push(candyInfo.product);
}

console.log("The candies that cost less than $4.00 are: ")
for (let i = 0; i < candyLessThan4.length; i++) {
  console.log(candyLessThan4[i]);
}

console.log("-------------");

// Which candies has "M&M" its name?

let mmCandies = [];

for (let i = 0; i < products.length; i++) {
  let candyInfo = products[i];
  if (candyInfo.product.includes("M&Ms")) {

    mmCandies.push(candyInfo.product);
  }
}
console.log("The candies that have M&M in its name are: ");
for (let i = 0; i < mmCandies.length; i++) {
  console.log(mmCandies[i]);
}

console.log("-----------");

// Do we carry "Swedish Fish"?

let swedishFish = [];

for(let i = 0; i < products.length; i++) {
  let candyInfo = products[i];
  if (candyInfo.product == "Swedish Fish") {

    swedishFish.push(candyInfo.product);
  }
}

for(let i = 0; i < swedishFish.length; i++){
  console.log("Yes we do carry " + swedishFish[i] + ".");
}
