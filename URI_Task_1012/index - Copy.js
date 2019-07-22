var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var area = input.split(" ");

var a = parseFloat(area[0]);
var b = parseFloat(area[1]);
var c = parseFloat(area[2]);
var pi = 3.14159;

console.log( `TRIANGULO: ${(0.5 * a * c).toFixed(3) }` );
console.log( `CIRCULO: ${(pi * c * c).toFixed(3)}` );
console.log( `TRAPEZIO: ${(0.5 * (a + b) * c).toFixed(3)}` );
console.log( `QUADRADO: ${(b * b).toFixed(3)}` );
console.log( `RETANGULO: ${(a * b).toFixed(3)}` );