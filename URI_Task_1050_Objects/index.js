const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const code = parseInt(lines[0]);

const destinations = {
    '61': 'Brasilia',
    '71': 'Salvador',
    '11': 'Sao Paulo',
    '21': 'Rio de Janeiro',
    '32': 'Juiz de Fora',
    '19': 'Campinas',
    '27': 'Vitoria',
    '31': 'Belo Horizonte',
};

let result = destinations[code];
if (!result) {
    result = 'DDD nao cadastrado';
}

console.log ( result );