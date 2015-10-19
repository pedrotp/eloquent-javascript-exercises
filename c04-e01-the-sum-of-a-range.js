// Your code here.
var range = function(start, end, step) {
  var arr = [];
  if (step === undefined) step = start < end ? 1 : -1;
  for ( var i = start; start < end ? i <= end : i >= end; i += step) {
    arr.push(i);
  };
  return arr;
};

var sum = function(arr) {
  var ans = 0;
  for (var i=0;i<arr.length;i++) {
    ans += arr[i];
  };
  return ans;
};

console.log(sum(range(1, 10)));
// → 55
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]