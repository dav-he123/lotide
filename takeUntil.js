const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`Assertion Passed:, ✅ ✅ ✅  ${actual} === ${expected}`);
  }

  if (!eqArrays(actual, expected)) {
    console.log(`Assertion Failed:, 🛑 🛑 🛑  ${actual} !== ${expected}`);
  }
};

const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length) return false;

  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }
  return true;
};

const takeUntil = function(array, callback) {
  // ...
  // console.log("array:", array);
  // console.log("callback:", callback);

  let result = [];

  for (let element of array) {
    if (!callback(element)) {
      result.push(element);
      console.log(result);
    } else {
      break;
    }
  }
  // console.log(result);
  return result;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log("---");

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood"
];

const results2 = takeUntil(data2, x => x === ",");
console.log(results2);

assertArraysEqual(
  takeUntil(
    ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"],
    x => x === ","
  ),
  ["I've", "been", "to", "Hollywood"]
);
