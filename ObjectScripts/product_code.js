"use strict"

// function parsePartCode(partcode){

//   let posOfColon = partcode.indexOf(":");
//   let posOfDash = partcode.indexOf("-");

//   let part = {
//       supplierCode:partcode.substring(0, posOfColon),
//       productNumber: partcode.substring(posOfColon + 1, posOfDash),
//       size: partcode.substring(posOfDash + 1)
//   }

//   return part;

// }

// let partCode1 = "XYZ:1234-L";
// let part1 = parsePartCode(partCode1);
// console.log("Supplier: " + part1.supplierCode +
// " Product Number: " + part1.productNumber +
// " Size: " + part1.size);

function parsePartCode(code) {

  let productCode = {
    supplierCode: code.substring(0, code.indexOf(":")),
    productNumber: code.substring(code.indexOf(":") + 1, code.indexOf("-")),
    size: code.substring(code.indexOf("-") + 1)
  };

    return productCode;

}

let partCode1 = "XYZ:1234-L";
let part1 = parsePartCode(partCode1);

console.log("Supplier: " + part1.supplierCode);
console.log("Product Number: " + part1.productNumber);
console.log("Size: " + part1.size);




