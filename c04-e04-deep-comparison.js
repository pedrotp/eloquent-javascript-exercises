function deepEqual(val1,val2) {
  if (typeof val1 !== "object" || typeof val2 !== "object") {
    return val1 === val2 ? true : false;
  }
  else if (val1 === null && val2 === null) {
    return true;
  }
  else {
    for (x in val1) {
      return deepEqual(val1[x],val2[x]) ? true : false;
    };
  };
};

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true