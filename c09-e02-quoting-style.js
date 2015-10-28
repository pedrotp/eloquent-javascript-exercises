var text = "'I'm the cook,' he said, 'it's my job.'";

console.log(text.replace(/\B'|'\B/g,"\""));

// → "I'm the cook," he said, "it's my job."

// Changed the call to replace any single quotes with a non-word boundary on either side with double quotes.
