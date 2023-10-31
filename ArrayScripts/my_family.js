"use strict";

let myNameArray = ["Matt", "Elizabeth", "Barb", "David"];

for (let i = 0; i < myNameArray.lenght; i++) {
  console.log(myNameArray[i]);
}

console.log("...........")

let j = 0
while (j < myNameArray.lenght) {
  console.log(myNameArray[j]);
  j++;
}

console.log("..........");

let k = 0

do {
  console.log(myNameArray[k]);
  k++
} while (k < myNameArray.length);