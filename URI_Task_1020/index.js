var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n = parseInt(lines[0]);

var y = Math.trunc(n / 365);
var m  = Math.trunc(n % 365 / 30);
var d = n % 365 % 30;

console.log( `${y} ano(s)` );
console.log( `${m} mes(es)` );
console.log( `${d} dia(s)` );