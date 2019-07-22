const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const parts = lines[0].split(' ');
const startHour  = parseInt(parts[0]);
const startMinute  = parseInt(parts[1]);
const endHour  = parseInt(parts[2]);
const endMinute  = parseInt(parts[3]);

const start = startHour * 60 + startMinute;
const end = endHour * 60 + endMinute;

let durationHour;
let durationMinute;
if (start < end) {
    const duration = end - start;
    durationHour = Math.trunc(duration / 60);
    durationMinute = duration % 60;
} else if (start > end) {
    const duration = 24 * 60  - start + end;
    durationHour = Math.trunc(duration / 60);
    durationMinute = duration % 60;
} else {
    durationHour = 24;
    durationMinute = 0;
}

console.log( `O JOGO DUROU ${durationHour} HORA(S) E ${durationMinute} MINUTO(S)` );