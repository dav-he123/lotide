const eqArrays = function(actual, expected) {
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`Assertion Passed:, ✅ ✅ ✅  ${actual} === ${expected}`);
  }

  if (!eqArrays(actual, expected)) {
    console.log(`Assertion Failed:, 🛑 🛑 🛑  ${actual} !== ${expected}`);
  }
};

assertArraysEqual([1, 1, 3, 4, 5], [1, 2, 3, 4, 5]);
