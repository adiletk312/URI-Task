var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n = parseInt(lines[0]);

var h = Math.trunc(n / 3600);
var m = Math.trunc(n % 3600 / 60);
var s = n % 60;

console.log( `${h}:${m}:${s}` );