/* eslint-disable no-use-before-define */
/* eslint-disable radix */
/* eslint-disable no-console */
/* eslint-disable max-len */


/* A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers. */

const generateListsOfNumbers = (minimumValue, maximumValue) => {
  const firstListofNumbers = [];
  const secondListOfNumbers = [];
  for (let index = minimumValue; index <= maximumValue; index += 1) {
    firstListofNumbers.push(index);
    secondListOfNumbers.push(index);
  }
  return findLargestPalindromeNumber(firstListofNumbers, secondListOfNumbers);
};


const findLargestPalindromeNumber = (firstListofNumbers, secondListOfNumbers) => {
  const palindromesList = [];

  firstListofNumbers.forEach((firstListNumber) => {
    secondListOfNumbers.forEach((secondListNumber) => {
      const possiblePalindromeNumber = firstListNumber * secondListNumber;
      const palindromeNumberArray = possiblePalindromeNumber.toString().split('');
      const reversePalindromeNumberArray = possiblePalindromeNumber.toString().split('').reverse();
      if (JSON.stringify(palindromeNumberArray) === JSON.stringify(reversePalindromeNumberArray)) {
        palindromesList.push(possiblePalindromeNumber);
      }
    });
  });

  const largestPalindromeNumber = Math.max(...palindromesList);

  return largestPalindromeNumber;
};

generateListsOfNumbers(100, 999);
