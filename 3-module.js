// Modules
const names = require("./4-name");
const sayHi = require("./5-utils");
const alternative = require("./6-alternative");
console.log(alternative);
require("./7-mind-grenade");
sayHi("Ronnie");
sayHi(names.john);
sayHi(names.Peter);
sayHi(alternative.items[0]);
sayHi(alternative.singlePerson.name);
