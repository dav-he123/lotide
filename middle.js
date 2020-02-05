const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`Assertion Passed:, ✅ ✅ ✅  ${actual} === ${expected}`);
  }

  if (!eqArrays(actual, expected)) {
    console.log(`Assertion Failed:, 🛑 🛑 🛑  ${actual} !== ${expected}`);
  }
};

const eqArrays = function(actual, expected) {
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }
  return true;
};

const middle = function(array) {
  let result = [];

  if (array.length <= 2) {
    console.log(result);
    return result;
  }

  if (array.length % 2 != 0) {
    let value = Math.floor(array.length / 2);
    let element = array[value];
    result.push(element);
    console.log(result);
    return result;
  } else {
    let value = Math.floor(array.length / 2);
    let firstElement = array[value];
    let secondElement = array[value - 1];
    result.push(secondElement);
    result.push(firstElement);
    console.log(result);
    return result;
  }
};

middle([1]); // => []
middle([1, 2]); // => []

middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]

middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]
