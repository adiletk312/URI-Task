var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var a = parseInt(lines[0]);
var b = parseInt(lines[1]);

var c = (a * b / 12);

console.log( `${c.toFixed(3)}` );