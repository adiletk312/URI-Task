var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var parts1 = lines[0].split(' ');
var n1 = parseInt(parts1[1]);
var price1 = parseFloat(parts1[2]);

var product2Nums = lines[1].split(' ');
var n2 = parseInt(product2Nums[1]);
var price2 = parseFloat(product2Nums[2]);

var productPaid = n1 * price1 + n2 * price2

console.log( `VALOR A PAGAR: R$ ${productPaid.toFixed(2)}` );
