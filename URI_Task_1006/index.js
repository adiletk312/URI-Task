var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var a = parseFloat(lines[0]);
var b = parseFloat(lines[1]);
var c = parseFloat(lines[2]);

var sum = (a * 2 + b * 3 + c * 5) / 10;

console.log( `MEDIA = ${sum.toFixed(1)}` );