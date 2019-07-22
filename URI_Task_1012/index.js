var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(" ");

var a = parseFloat(lines[0]);
var b = parseFloat(lines[1]);
var c = parseFloat(lines[2]);
var pi = 3.14159;

//Площадь треугольника
var rectangled  = 0.5 * a * c;
//Формула для вычисления площади круга
var radius = pi * c * c;
//Площадь трапеции
var trapezium = 0.5 * (a + b) * c;
//Площадь квадрата
var square = b * b; 
//Площадь прямоугольника
var rectangle = a * b;

console.log( `TRIANGULO: ${rectangled.toFixed(3)}` );
console.log( `CIRCULO: ${radius.toFixed(3)}` );
console.log( `TRAPEZIO: ${trapezium.toFixed(3)}` );
console.log( `QUADRADO: ${square.toFixed(3)}` );
console.log( `RETANGULO: ${rectangle.toFixed(3)}` );