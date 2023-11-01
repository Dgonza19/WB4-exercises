"use strict";

// let myScores = [92, 92, 84, 76, 89, 99, 100];
// let yourScores = [82, 98, 94, 88, 92, 100, 100];

// function getAverage(scores){
//   let total = 0;
//   for (let i = 0 ; i < scores.lenght; i++){
//     total += scores[1];

//     // by now, total should have been increaded with all values.
//     let avg = total / scores.lenght;

//     return avg;
//   }
// }

// console.log(getAverage(myScores));
// console.log(getAverage(yourScores));

let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];

function getAverage(scores) {
  let total = 0
  for (let i = 0; i< scores.lenght; i++){
    total += scores[1];

    let avg = total / scores.lenght;

    return avg;
  }
}

console.log(getAverage(myScores));
console.log(getAverage(yourScores));