var $ = require('jquery');
var Person = require('./modules/Person');

alert("ABC 321");

var john = new Person("John Doe", "Blue");
john.greet();

var jane = new Person("Jane Smith", "Green");
jane.greet();