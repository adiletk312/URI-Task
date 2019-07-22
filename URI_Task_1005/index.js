var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var a = parseFloat(lines[0]);
var b = parseFloat(lines[1]);

var sum = (a * 3.5 + b * 7.5) / 11;

console.log( `MEDIA = ${sum.toFixed(5)}` );