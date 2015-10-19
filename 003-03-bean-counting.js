function countBs(str) {
  return countChar(str, "B");
};

function countChar(str, char) {
  for (var i = 0, count = 0; i < str.length; i++) {
    if (str.charAt(i) === char) count++;
  };
  return count;
};


console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4