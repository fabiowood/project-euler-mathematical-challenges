/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable no-console */
/* eslint-disable max-len */


/* Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms. */

const findSumOfEvenFibonacciValues = (maximumNumber) => {
  const fibonacciNumbers = [1, 2];
  const maximumFibonacciNumber = maximumNumber;
  let fibonacciNumbersIndex = 1;

  while (fibonacciNumbers[fibonacciNumbersIndex] + fibonacciNumbers[fibonacciNumbersIndex - 1] < maximumFibonacciNumber) {
    const lastFibonacciNumber = fibonacciNumbers[fibonacciNumbersIndex];
    const penultimateFibonacciNumber = fibonacciNumbers[fibonacciNumbersIndex - 1];
    const calculateNewFibonacciNumber = lastFibonacciNumber + penultimateFibonacciNumber;
    fibonacciNumbers.push(calculateNewFibonacciNumber);
    fibonacciNumbersIndex += 1;
  }

  const sumOfEvenFibonacciValues = fibonacciNumbers.filter((number) => number % 2 === 0).reduce((accumulator, currentValue) => accumulator += currentValue, 0);

  return sumOfEvenFibonacciValues;
};

findSumOfEvenFibonacciValues(4 * 10 ** 6);