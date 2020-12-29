/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */

// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

const createNumbersIntervalRepository = (args) => {
  const initialNumber = args[0];
  const finalNumber = args[1];
  const numbersIntervalRepository = [];
  for (let index = initialNumber; index <= finalNumber; index += 1) {
    numbersIntervalRepository.push(index);
  }
  return numbersIntervalRepository;
};

const calcSumOfSquares = (args) => {
  const numbersIntervalRepository = createNumbersIntervalRepository(args);
  const sumOfSquares = numbersIntervalRepository.reduce((accumulator, currentValue) => accumulator += currentValue ** 2, 0);
  return sumOfSquares;
};

const calcSquareOfSum = (args) => {
  const numbersIntervalRepository = createNumbersIntervalRepository(args);
  const squareOfSum = numbersIntervalRepository.reduce((accumulator, currentValue) => accumulator += currentValue, 0) ** 2;
  return squareOfSum;
};

const calcSumSquareDifference = (...args) => {
  const minAndMaxValues = args;
  const sumOfSquares = calcSumOfSquares(minAndMaxValues);
  const squareOfSum = calcSquareOfSum(minAndMaxValues);
  const sumSquareDifference = Math.max(squareOfSum - sumOfSquares, 0);
  return sumSquareDifference;
};

calcSumSquareDifference(1, 100);
