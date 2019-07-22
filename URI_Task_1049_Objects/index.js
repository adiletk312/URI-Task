const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const word1 = String(lines[0]);
const word2 = String(lines[1]);
const word3 = String(lines[2]);

const words = {
    'vertebrado': {
        'ave': {
            'carnivoro': 'aguia',
            'onivoro': 'pomba'
        },
        'mamifero': {
            'onivoro': 'homem',
            'herbivoro': 'vaca'
        }
    },
    'invertebrado': {
        'inseto': {
            'hematofago': 'pulga',
            'herbivoro': 'lagarta'
        },
        'anelideo': {
            'hematofago': 'sanguessuga',
            'onivoro': 'minhoca'
        }
    }
}

console.log( `${words[word1][word2][word3]}` );