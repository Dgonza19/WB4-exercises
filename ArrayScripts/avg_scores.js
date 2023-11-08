"use strict";

// Declare the two arrays of exam scores.

let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores= [82, 98, 94, 88, 92, 100, 100];

// Create a new function to find the average scores in the arrays.
function getAverage(scores) {
    let sum = 0;
    
    let numScores = scores.length;
    for (let i = 0; i < numScores; i++) {
        sum += scores[i];
    }

    // Find average by dividing the total of numbers.
    let average = sum / numScores;

    return average;
}

// Calculate the average of the given scores' variables in each array.
    let myScoreAverage = getAverage(myScores);
    let yourScoreAverage = getAverage(yourScores);

    console.log('My score average is ' + myScoreAverage.toFixed(2) + '.')
    console.log('Your score average is ' + yourScoreAverage.toFixed(2) + '.')


    console.log("----------");

    // CHALLENGE 3

    function getMedian(scores) {
      scores.sort(function(a, b) {
          return a - b;
      });
  
      const numScores = scores.length;
      const middle = Math.floor(numScores / 2);
  
      if (numScores % 2 === 0) {
          // If the number of scores is even, average the two middle values
          return (scores[middle - 1] + scores[middle]) / 2;
      } else {
          // If the number of scores is odd, return the middle value
          return scores[middle];
      }
  }

  let myScoreMedian = getMedian(myScores);
  let yourScoreMedian = getMedian(yourScores);
  
  console.log('My score average is ' + myScoreAverage.toFixed(2) + '.');
  console.log('My score median is ' + myScoreMedian + '.');

  // The % operator calculates the remainder when dividing one number by 
  // another. In this case, we're checking if the remainder of numScores 
  // divided by 2 is 0 to determine if it's even. If it's not 0, then it's odd.


