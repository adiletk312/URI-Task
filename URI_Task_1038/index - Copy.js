let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

//Input
let X = parseInt(lines[0]);
let Y = parseInt(lines[1]);

//Output
switch(X) {
    case 1:  
        console.log( `Total: R$ ${(Y * 4.00).toFixed(2)} `);
        break;
    case 2:
        console.log( `Total: R$ ${(Y * 4.50).toFixed(2)} `);
        break;
    case 3:
        console.log( `Total: R$ ${(Y * 5.00).toFixed(2)} `);
        break;
    case 4:
        console.log( `Total: R$ ${(Y * 2.00).toFixed(2)} `);
        break;
    case 5:
        console.log( `Total: R$ ${(Y * 1.50).toFixed(2)} `);
        break;
}