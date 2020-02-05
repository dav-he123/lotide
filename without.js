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

const without = function(sourceArray, removeItemsArray) {
  let result = [];

  for (let i = 0; i < sourceArray.length; i++) {
    let identicalElem = false;
    // console.log(sourceArray);
    for (let j = 0; j < removeItemsArray.length; j++) {
      if (sourceArray[i] === removeItemsArray[j]) {
        // console.log(sourceArray[i]);
        // console.log(removeItemsArray[i]);

        identicalElem = true;
      }
    }
    // console.log(sourceArray);
    // console.log(removeItemsArray);

    if (!identicalElem) {
      // console.log(identicalElem);
      result.push(sourceArray[i]);
    }
    console.log(result);
  }

  // console.log(sourceArray);
  // console.log(removeItemsArray);
  console.log(result);
  return result;
};

without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
