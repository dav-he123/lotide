const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed:, ✅ ✅ ✅  ${actual} === ${expected}`);
  }

  if (actual !== expected) {
    console.log(`Assertion Failed:, 🛑 🛑 🛑  ${actual} !== ${expected}`);
  }
};

const head = function(actual) {
  return actual[0];
};

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
