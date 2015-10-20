function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

function getAgeDiff(person) { 
  if (byName[person.mother] !== undefined) return person.born - byName[person.mother].born;
};

var ageDiffArray = ancestry.map(getAgeDiff).filter( function(result) { return result !== undefined } )

console.log(average(ageDiffArray));
    
// → 31.2