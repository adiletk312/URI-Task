let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let parts1 = lines[0].split(' ');
let N1 = parseFloat(parts1[0]);
let N2 = parseFloat(parts1[1]);
let N3 = parseFloat(parts1[2]);
let N4 = parseFloat(parts1[3]);

let average = (N1 * 2 + N2 * 3 + N3 * 4 + N4 * 1) / 10;
console.log( `Media: ${average.toFixed(1)}` );

if (average >= 7.0) {
    console.log( `Aluno aprovado.` );
} else if (average < 5.0) {
    console.log( `Aluno reprovado.` );
} else {
    const exam = parseFloat(lines[1]);
    average = (average + exam) / 2;

    const message = average >= 5.0 ? `Aluno aprovado.\n` : `Aluno reprovado.\n`;
    console.log( 
        `Aluno em exame.\n`                     +
        `Nota do exame: ${exam.toFixed(1)}\n`   + 
        message                                 +
        `Media final: ${average.toFixed(1)}` );
}