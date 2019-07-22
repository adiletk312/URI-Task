var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var km = parseInt(lines[0]);

var distance = km * 2;

console.log( `${distance} minutos` );