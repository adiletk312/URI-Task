let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

const parts = lines[0].split(' ');

let a, oldA, b, oldB, c, oldC;
a = oldA = parseInt(parts[0]);
b = oldB = parseInt(parts[1]);
c = oldC = parseInt(parts[2]);

if (a > b) {
    const temp = a;
    a = b;
    b = temp;
}

if (b > c) {
    const temp = b;
    b = c;
    c = temp;
}

if (a > b) {
    const temp = a;
    a = b;
    b = temp; 
}

console.log( `${a}\n${b}\n${c}\n` );
console.log( `${oldA}\n${oldB}\n${oldC}\n` );