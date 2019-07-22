var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n = parseInt(lines[0]);

r100 = Math.trunc(n / 100);
r50 = Math.trunc(n % 100 / 50);
r20 = Math.trunc(n % 100 % 50 / 20);
r10 = Math.trunc(n % 100 % 50 % 20 / 10);
r5 = Math.trunc(n % 100 % 50 % 20 % 10 / 5);
r2 = Math.trunc(n % 100 % 50 % 20 % 10 % 5 / 2);
r1 = n % 100 % 50 % 20 % 10 % 5 % 2;

console.log( `${r100} nota(s) de R$ 100,00
${r50} nota(s) de R$ 50,00
${r20} nota(s) de R$ 20,00
${r10} nota(s) de R$ 10,00
${r5} nota(s) de R$ 5,00
${r2} nota(s) de R$ 2,00
${r1} nota(s) de R$ 1,00` );

// console.log( `${r100} nota(s) de R$ 100,00);
// console.log( `${r50} nota(s) de R$ 50,00` );
// console.log( `${r20} nota(s) de R$ 20,00` );
// console.log( `${r10} nota(s) de R$ 10,00` );
// console.log( `${r5} nota(s) de R$ 5,00` );
// console.log( `${r2} nota(s) de R$ 2,00` );
// console.log( `${r1} nota(s) de R$ 1,00` );