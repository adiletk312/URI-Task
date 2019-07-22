const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

let numbers = [];
numbers = lines[0];
numbers = lines[1];
numbers = lines[2];
numbers = lines[3];
numbers = lines[4];
numbers = lines[5];

for (let i = 0; i < numbers.lenght; i++) {
    let sum = 0;
    if (numbers[i] > 0) {
        sum++;
    }
    console.log( `${sum} valores positivos` );
}