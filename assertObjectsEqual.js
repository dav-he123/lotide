const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (let key of Object.keys(object1)) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else {
      if (object1[key] !== object2[key]) return false;
    }
    // } else if (!object1[keys] !== object2[keys]) {
    //   return false;
    // }
  }
  return true;
};

const eqArrays = function(actual, expected) {
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require("util").inspect;
  console.log(`Example label: ${inspect(actual)}`);
  if (eqObjects(actual, expected)) {
    console.log(`Assertion Passed:, ✅ ✅ ✅  ${actual} === ${expected}`);
  }
  if (!eqObjects(actual, expected)) {
    console.log(`Assertion Failed:, 🛑 🛑 🛑  ${actual} !== ${expected}`);
  }
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc);

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2);

assertObjectsEqual(cd, dc);
assertObjectsEqual(cd, cd2);
