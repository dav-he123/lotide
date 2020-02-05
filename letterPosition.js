const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed:, ✅ ✅ ✅  ${actual} === ${expected}`);
  }

  if (actual !== expected) {
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

const letterPositions = function(sentence) {
  // logic to update results here
  const results = {};
  const arr = sentence
    .split(" ")
    .join()
    .split("");
  console.log(arr);

  for (let [index, letter] of arr.entries()) {
    if (results[letter]) {
      results[letter].push(index);
    } else {
      results[letter] = [index];
    }
  }
  console.log(results);
  return results;
};

letterPositions("hello");
