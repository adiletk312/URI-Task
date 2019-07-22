const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

let parts = lines[0].split(' ');
const startDay = parseInt(parts[1]);
parts = lines[1].split(' ');
const startHour = parseInt(parts[0]);
const startMinute = parseInt(parts[2]);
const startSecond = parseInt(parts[4]);

parts = lines[2].split(' ');
const endDay = parseInt(parts[1]);
parts = lines[3].split(' ');
const endHour = parseInt(parts[0]);
const endMinute = parseInt(parts[2]);
const endSecond = parseInt(parts[4]);

const start = 
    startDay * 24 * 60 * 60 +
    startHour * 60 * 60     +
    startMinute * 60        +
    startSecond;
const end = 
    endDay * 24 * 60 * 60   +
    endHour * 60 * 60       +
    endMinute * 60          +
    endSecond;

const duration = end - start;

const secondsInDay = 24 * 60 * 60;
const secondsInHour = 60 * 60;
const durationDays = Math.trunc(duration / secondsInDay);
const durationHours = Math.trunc(duration % secondsInDay / secondsInHour);
const durationMinutes = Math.trunc(duration % secondsInDay % secondsInHour / 60);
const durationSeconds = duration % secondsInDay % secondsInHour % 60;

console.log(
    `${durationDays} dia(s)\n`          +
    `${durationHours} hora(s)\n`        +
    `${durationMinutes} minuto(s)\n`    +
    `${durationSeconds} segundo(s)`
);


