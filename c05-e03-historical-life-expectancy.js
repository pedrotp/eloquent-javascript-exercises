function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

function getAge(person) {
  return person.died - person.born;
};

function assignCentury(group, person) {     
    if (group.hasOwnProperty(Math.ceil(person.died / 100))) {
      group[Math.ceil(person.died / 100)].push(getAge(person)) }
    else {
      group[Math.ceil(person.died / 100)] = [(getAge(person))];
    };
  };

function groupBy(array) {
  var group = {};
  array.forEach(assignCentury.bind(null,group));
  return group;
}; 

function groupAverages(group) {
  Object.keys(group).forEach( function(x) { group[x] = Math.round(average(group[x])*10)/10 } );
  return group;
};

console.log(groupAverages(groupBy(ancestry)));

// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94