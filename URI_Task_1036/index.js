let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

//Input
let parts = lines[0].split(' ');
let A = parseFloat(parts[0]);
let B = parseFloat(parts[1]);
let C = parseFloat(parts[2]);

let sqrt = Math.sqrt(B * B - 4 * A * C);

//Output
if (B * B - 4 * A * C < 0 || A === 0) {
    console.log(`Impossivel calcular`);
} else {
    console.log(`R1 = ${((-B + sqrt) / (2 * A)).toFixed(5)}`);
    console.log(`R2 = ${((-B - sqrt) / (2 * A)).toFixed(5)}`);
}

