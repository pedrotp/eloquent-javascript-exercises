var arrays = [[1, 2, 3], [4, 5], [6]];
function flatten(ary) {
  return ary.reduce(function(i, n) { return i.concat(n) }, []);
};
flatten(arrays);

// → [1, 2, 3, 4, 5, 6]