// Your code here.
var arrayToList = function(arr) {
  var list = { value: arr[0] };
  var location = list;
  for (var i=1;i<arr.length;i++) {
     location.rest = prepend( arr[i], null);
     location = location.rest;
  };
  return list;
};

var listToArray = function(list) {
  var arr = [];
  var location = list;
  while (location !== null) {
    arr.push(location.value);
    location = location.rest;
  };
  return arr;
};

var prepend = function(element, list) {
  var newList = { value: element, rest: list };
  return newList;
};

var nth = function(list, num) {
  return listToArray(list)[num];
};

var nthRecursive = function(list, num) {
  if (num === 0) {
    return list.value;
  }
  else {
    return nthRecursive(list.rest,num-1);
  };
};                          

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
console.log(nthRecursive(arrayToList([10, 20, 30]), 1));
// → 20