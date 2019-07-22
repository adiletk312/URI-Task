let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let parts = lines[0].split(' ');
let A = parseInt(parts[0]);
let B = parseInt(parts[1]);
let C = parseInt(parts[2]);
let D = parseInt(parts[3]);

if ((B > C && D > A) && (C + D > A + B) && (C >= 0 && D >= 0) && (A % 2 === 0)) {
    console.log( `Valores aceitos` );
} else {
    console.log( `Valores nao aceitos` );
}