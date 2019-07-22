var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var r = parseInt(lines[0]);
var pi = 3.14159;

var sphere = 4/3*pi*r*r*r;

console.log( `VOLUME = ${sphere.toFixed(3)}` );