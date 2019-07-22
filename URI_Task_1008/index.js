var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var number = parseInt(lines[0]);
var hours = parseInt(lines[1]);
var amount = parseFloat(lines[2]);

var salary = hours * amount;

console.log( `NUMBER = ${number}` );
console.log( `SALARY = U$ ${salary.toFixed(2)}` );