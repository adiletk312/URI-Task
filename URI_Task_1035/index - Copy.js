let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

//Input
let a = parseInt(lines[0]);
let b = parseInt(lines[1]);
let c = parseInt(lines[2]);
let d = parseInt(lines[3]);

//Output
if (b > c && d > a && ((c + d) > (a + b)) && (c && d) >= 0 && a % 2 === 0) {
    console.log( `Valores aceitos` );
} else {
    console.log( `Valores nao aceitos` );
}