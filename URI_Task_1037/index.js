let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

//Input
let num = parseFloat(lines[0]);

//Output
if (num < 0 || num > 100.00001) {
    console.log(`Fora de intervalo`);
} else {
    if (num >= 0 && num <= 25.0000) {
        console.log( `Intervalo [0,25]` );
    } else if (num >= 25.00001 && num <= 50.0000000) {
        console.log( `Intervalo (25,50]` );
    } else if (num >= 50.00001 && num <= 75.0000000) {
        console.log( `Intervalo (50,75]` );
    } else if (num >= 75.00001 && num <= 100.0000000) {
        console.log( `Intervalo (75,100]` );
    }
}