"use strict";

let contact1 = {
  name: "Ezra Smith",
  address: "123 Main St",
  city: "Anytown",
  state: "NY",
  zip: "12345"
}
let contact2 = {
  name: "Elisha Jones",
  address: "456 Main St",
  city: "Othertown",
  state: "NY",
  zip: "12345"
}

let product1 = {
  name: "Rod Smith",
  address: "456 Other St",
  city: "Thattown",
  state: "NY",
  zip: "09876"
}

let product2 = {
  name: "Lily Jones",
  address: "890 Other St",
  city: "Newtown",
  state: "NY",
  zip: "67890"
}


function printContact(contact){
  console.log(contact.name);
  console.log(contact.address);
  console.log(contact.city + ", " + contact.state + ", " + contact.zip);
}

printContact(contact1);
printContact(contact2);
printContact(product1);
printContact(product2);
