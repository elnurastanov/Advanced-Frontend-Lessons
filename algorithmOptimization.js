/*
 * Write a function that finds the intersection of two sorted arrays.
 * Implement a check to skip unnecessary comparisons when one of the arrays is empty.
 */

function findArrayIntersection(arr1, arr2) {
  if (arr1.length === 0 || arr2.length === 0) {
    return [];
  }

  const intersection = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr1[i] > arr2[j]) {
      j++;
    } else {
      intersection.push(arr1[i]);
      i++;
      j++;
    }
  }

  return intersection;
}

/*
 * Write a function that checks if a given string is a palindrome.
 * Implement a check to skip further comparisons once a mismatch is found.
 */

function isPalindrome(str) {
  const length = str.length;
  for (let i = 0; i < length / 2; i++) {
    if (str[i] !== str[length - 1 - i]) {
      return false;
    }
  }
  return true;
}

/*
 * Write a function that checks if a given number is prime.
 * Optimize the loop to stop checking once the number is found to be divisible by any other number.
 */

function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

/*
 * Given a function that checks if a number is positive (isPositive),
 * inline it within a function that returns the square of a positive number or zero for negative numbers.
 */

function squarePositiveNumber(n) {
  if (n > 0) {
    return n * n;
  } else {
    return 0;
  }
}

/*
 * Write a function that finds the first non-repeated character in a string.
 * Implement a check to skip further iterations once the non-repeated character is found.
 */

function findFirstNonRepeatedCharacter(str) {
  const charCount = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
  }

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null;
}
