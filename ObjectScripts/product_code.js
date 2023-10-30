"use strict"

// function parsePartCode(partCode) {
//   let suppliercode;
//   let productNumber;
//   let size;

//   let postOfColon = partcode.indexOf(":");
//   let postOfDash = partCode.indexOf("-");

//   suppliercode = partcode.substring(0, 3);
//   productNumber = partcode.substring(postOfColon + 1, postOfDash);
//   size = partcode.substring(postOfDash + 1);

//   let part = {
//     suppliercode: suppliercode,
//     productNumber: productNumber,
//     size: size
//   }

//   return part;

// }

function parsePartCode(partCode);

let postOfColon = partcode.indexOf(":");
let postOfDash = partCode.indexOf("-");

let part = {
  suppliercode = partcode.substring(0, 3);
  productNumber = partcode.substring(postOfColon + 1, postOfDash);
  size = partcode.substring(postOfDash + 1);
}




