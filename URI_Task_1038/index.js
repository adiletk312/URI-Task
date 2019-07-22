// let input = require('fs').readFileSync('/dev/stdin', 'utf8');
// let lines = input.split('\n');

// //Input
// let X = parseInt(lines[0]);
// let Y = parseInt(lines[1]);

// if (X == 1) {
//     console.log( `Total: R$ ${(Y * 4.00).toFixed(2)} `);
// } else if (X == 2) {
//     console.log( `Total: R$ ${(Y * 4.50).toFixed(2)} `);
// } else if (X == 3) {
//     console.log( `Total: R$ ${(Y * 5.00).toFixed(2)} `);
// } else if (X == 4) {
//     console.log( `Total: R$ ${(Y * 2.00).toFixed(2)} `);
// } else if (X == 5) {
//     console.log( `Total: R$ ${(Y * 1.50).toFixed(2)} `);
// }

let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

//Input
let parts = lines[0].split(' ');
let X = parseInt(parts[0]);
let Y = parseInt(parts[1]);
let price;

//Output
if (X == 1) {
    price = Y * 4.00;
} else if (X == 2) {
    price = Y * 4.50;
} else if (X == 3) {
    price = Y * 5.00;
} else if (X == 4) {
    price = Y * 2.00;
} else if (X == 5) {
    price = Y * 1.50;
}
console.log( `Total: R$ ${(price).toFixed(2)}` );