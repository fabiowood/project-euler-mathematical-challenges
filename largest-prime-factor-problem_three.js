/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable no-restricted-syntax */
/* The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ? */

// let targetValue = 600851475143;

const findLargestPrimeFactor = (targetNumber) => {
  const primeFactors = [];
  let targetValue = targetNumber;
  for (let index = 2; index < targetValue; index += 1) {
    if (targetValue % index === 0) {
      primeFactors.push(index);
      targetValue /= index;
    }
  }
  primeFactors.push(targetValue);

  const largestPrimeFactor = Math.max(...primeFactors);

  return largestPrimeFactor;
};

findLargestPrimeFactor(600851475143);
