const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const salary = parseFloat(lines[0]);

let newSalary, moneyEarned, inPercentage;
if (salary >= 0 && salary <= 2000.00) {
    if (salary >= 0 && salary <= 400.00) {
        inPercentage = 15;
        moneyEarned = salary * inPercentage / 100;
        newSalary = salary + moneyEarned;
    } else if (salary >= 400.01 && salary <= 800.00) {
        inPercentage = 12;
        moneyEarned = salary * inPercentage / 100;
        newSalary = salary + moneyEarned;
    } else if (salary >= 800.01 && salary <= 1200.00) {
        inPercentage = 10;
        moneyEarned = salary * inPercentage / 100;
        newSalary = salary + moneyEarned;
    } else if (salary >= 1200.01 && salary <= 2000.00) {
        inPercentage = 7;
        moneyEarned = salary * inPercentage / 100;
        newSalary = salary + moneyEarned;
    }
} else if (salary >= 2000.01) {
    inPercentage = 4;
    moneyEarned = salary * inPercentage / 100;
    newSalary = salary + moneyEarned;
}

console.log( `Novo salario: ${(newSalary).toFixed(2)}\nReajuste ganho: ${(moneyEarned).toFixed(2)}\nEm percentual: ${inPercentage} %` );