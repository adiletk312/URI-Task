const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

let salary = parseFloat(lines[0]);
let taxes = 0;
salary -= 2000;

if (salary < 0) {
    console.log( 'Isento' );
} else {
    let part = salary > 1000 ? 1000 : salary;
    taxes = part * 0.08;

    salary -= 1000;
    if (salary > 0) {
        part = salary > 1500 ? 1500 : salary;
        taxes += part * 0.18;

        salary -= 1500;
        if (salary > 0) {
            taxes += salary * 0.28;
        }
    }

    console.log( `R$ ${taxes.toFixed(2)}` );
}

