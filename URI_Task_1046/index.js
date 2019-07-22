const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const parts = lines[0].split(' ');
const startTime  = parseInt(parts[0]);
const endTime  = parseInt(parts[1]);

let duration;
if (startTime < endTime) {
    duration = endTime - startTime;
} else if (startTime > endTime) {
    duration = 24 - startTime + endTime;
} else {
    duration = 24;
}

console.log( `O JOGO DUROU ${duration} HORA(S)` );