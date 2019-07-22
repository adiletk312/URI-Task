let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let parts = lines[0].split(' ');
let a = parseFloat(parts[0]);
let b = parseFloat(parts[1]);
let c = parseFloat(parts[2]);

if (a + b > c && a + c > b && c + b > a) {
    console.log( `Perimetro = ${(a + b + c).toFixed(1)}` );
} else {
    console.log( `Area = ${((a + b) * c * 0.5).toFixed(1)}` );
}