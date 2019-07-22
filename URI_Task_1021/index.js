var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n = parseFloat(lines[0]);

var r100 = Math.trunc(n / 100);
var r50 = Math.trunc(n % 100 / 50);
var r20 = Math.trunc(n % 100 % 50 / 20);
var r10 = Math.trunc(n % 100 % 50 % 20 / 10);
var r5 = Math.trunc(n % 100 % 50 % 20 % 10 / 5);
var r2 = Math.trunc(n % 100 % 50 % 20 % 10 % 5 / 2);

var r1 = Math.trunc(n % 100 % 50 % 20 % 10 % 5 % 2);
var m50 = Math.trunc(n % 100 % 50 % 20 % 10 % 5 % 2 % 1 * 100 / 50);
var m25 = Math.trunc(n % 100 % 50 % 20 % 10 % 5 % 2 % 1 * 100 % 50 / 25);
var m10 = Math.trunc(n % 100 % 50 % 20 % 10 % 5 % 2 % 1 * 100 % 50 % 25 / 10);
var m5 = Math.trunc(n % 100 % 50 % 20 % 10 % 5 % 2 % 1 * 100 % 50 % 25 % 10 / 5);
var m1 = Math.trunc(n % 100 % 50 % 20 % 10 % 5 % 2 % 1 * 100 % 50 % 25 % 10 % 5);


console.log( `NOTAS:
${r100} nota(s) de R$ 100.00
${r50} nota(s) de R$ 50.00
${r20} nota(s) de R$ 20.00
${r10} nota(s) de R$ 10.00
${r5} nota(s) de R$ 5.00
${r2} nota(s) de R$ 2.00
MOEDAS:
${r1} moeda(s) de R$ 1.00
${m50} moeda(s) de R$ 0.50
${m25} moeda(s) de R$ 0.25
${m10} moeda(s) de R$ 0.10
${m5} moeda(s) de R$ 0.05
${m1} moeda(s) de R$ 0.01` );