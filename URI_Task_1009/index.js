var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var salary = parseFloat(lines[1]);
var sale  = parseFloat(lines[2]);

var total = salary + (sale * 15 / 100);

console.log( `TOTAL = R$ ${total.toFixed(2)}` );