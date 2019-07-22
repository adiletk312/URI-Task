const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

for (let i = 2; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}