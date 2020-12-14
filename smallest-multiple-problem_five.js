/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable no-unused-expressions */


/* 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20? */

const findSmallestPositiveDivisibleNumber = (minorDivisibleNumber, majorDivisibleNumber) => {
  let testConditionApproval;
  let testNumber = 0;
  while (testConditionApproval !== majorDivisibleNumber) {
    testConditionApproval = 0;
    testNumber += majorDivisibleNumber;
    for (let index = minorDivisibleNumber; index <= majorDivisibleNumber; index += 1) {
      if (testNumber % index === 0) {
        testConditionApproval += 1;
      } else {
        break;
      }
    }
  }
  const smallestPositiveNumber = testNumber;

  return smallestPositiveNumber;
};

findSmallestPositiveDivisibleNumber(1, 20);
