function logFive(seq) {
  var count = 0;
  while (seq.reachedEnd === false && count < 5) {
    count += 1;
    console.log(seq.nextElement());
  };
};

function ArraySeq(array) {
  var current = -1;
  this.nextElement = function() {
    current += 1;
    if (current >= array.length - 1) this.reachedEnd = true;
    return array[current];
  };
  this.reachedEnd = false;
};

function RangeSeq(start, end) {
  var current = start - 1;
  this.nextElement = function() {
    if (current >= end - 1) this.reachedEnd = true;
    current += 1;
    return current;
  };
  this.reachedEnd = false;  
}

logFive(new ArraySeq([1, 2]));
// → 1
// → 2
logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104