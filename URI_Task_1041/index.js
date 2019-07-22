let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let parts = lines[0].split(' ');
let x = parseFloat(parts[0]);
let y = parseFloat(parts[1]);

if (x === 0.0 && y === 0.0) {
    console.log( `Origem` );
} else if (x === 0 && y !== 0.0) {
    console.log( `Eixo Y` );
} else if (y === 0 && x !== 0.0) {
    console.log( `Eixo X` );
} else if (x > 0.0 && y > 0.0) {
    console.log( `Q1` );
} else if (x < 0.0 && y < 0.0) {
    console.log( `Q3` );
} else if (x < 0.0 && y > 0.0) {
    console.log( `Q2` );
} else {
    console.log( `Q4` );
}