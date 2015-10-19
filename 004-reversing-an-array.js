// Your code here.
var reverseArray = function(arr) {
  var ans = [];
  for (var i= arr.length - 1; i >= 0; i--) {
    ans.push(arr[i]);
  };
  return ans;
};

var reverseArrayInPlace = function(arr) {
  for (var i=0; i < Math.floor(arr.length/2); i++) {
    var swap = arr[i];
    arr[i] = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = swap;
  };
  return arr;
};

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]