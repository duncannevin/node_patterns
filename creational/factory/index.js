var userFactory = require('./userFactory');

var alex = userFactory('Alex Banks', 100, 'shopper');
var eve = userFactory('Eve Porcello', 100, 'employee', 'this an that');

console.log( alex.toString() )
console.log( eve.toString() )
