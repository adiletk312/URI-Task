let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let parts = lines[0].split(' ');
let a = parseFloat(parts[0]);
let b = parseFloat(parts[1]);
let c = parseFloat(parts[2]);

if (a < b) {
    const temp = a;
    a = b;
    b = temp;
}

if (b < c) {
    const temp = b;
    b = c;
    c = temp;
}

if (a < b) {
    const temp = a;
    a = b;
    b = temp; 
}

if (a >= b + c) {
    console.log( `NAO FORMA TRIANGULO` );
} else {
    const aSq = a * a;
    const bSq = b * b;
    const cSq = c * c;

    if (aSq == bSq + cSq) {
        console.log( `TRIANGULO RETANGULO` );
    } else if (aSq > bSq + cSq) {
        console.log( `TRIANGULO OBTUSANGULO` );
    } else if (aSq < bSq + cSq) {
        console.log( `TRIANGULO ACUTANGULO` );
    }

    if (a == b && a == c && b == c) {
        console.log( `TRIANGULO EQUILATERO` );
    } else if (a == b || b == c || a == c) {
        console.log( `TRIANGULO ISOSCELES` );
    }
}