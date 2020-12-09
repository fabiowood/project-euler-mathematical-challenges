/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable no-console */


/* If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000. */

const sumOfThreeAndFiveMultiples = (maximumValue) => {
  const multiplesOfThreeAndFive = [];
  for (let index = 1; index < maximumValue; index += 1) {
    index % 3 === 0 || index % 5 === 0 ? multiplesOfThreeAndFive.push(index) : null;
  }
  const sumOfMultiples = multiplesOfThreeAndFive.reduce((accumulator, currentValue) => accumulator += currentValue, 0);

  return sumOfMultiples;
};

sumOfThreeAndFiveMultiples(1000);
