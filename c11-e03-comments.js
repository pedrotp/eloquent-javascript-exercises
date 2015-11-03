function skipSpace(string) {
  var first = string.search(/\S/);
  if (first == -1) return "";
  if (string.match(/#.*\n/g) !== null) {
    return string.replace(/#.*\n/g, "");
  };
  return string.slice(first);
}


console.log(parse("# hello\nx"));
// → {type: "word", name: "x"}

console.log(parse("a # one\n   # two\n()"));
// → {type: "apply",
//    operator: {type: "word", name: "a"},
//    args: []}