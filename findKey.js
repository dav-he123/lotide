const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed:, ✅ ✅ ✅  ${actual} === ${expected}`);
  }

  if (actual !== expected) {
    console.log(`Assertion Failed:, 🛑 🛑 🛑  ${actual} !== ${expected}`);
  }
};

const findKey = function(obj, callback) {
  for (let item of Object.keys(obj)) {
    // console.log(obj[item]);
    // console.log(obj[item].stars);
    if (callback(obj[item])) {
      console.log(item);
      return item;
    }
    console.log(obj[item].stars);
  }
  return undefined;
};

findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 }
  },
  x => x.stars === 2
); // => "noma"
