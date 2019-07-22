const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const word1 = String(lines[0]);
const word2 = String(lines[1]);
const word3 = String(lines[2]);

if (word1 === 'vertebrado') {
    if (word2 === 'ave') {
        if (word3 === 'carnivoro') {
            console.log( 'aguia' );
        } else if (word3 === 'onivoro') {
            console.log( 'pomba' );
        }
    } else if (word2 === 'mamifero') {
        if (word3 === 'onivoro') {
            console.log( 'homem' );
        } else if (word3 === 'herbivoro') {
            console.log( 'vaca' );
        }
    }
} else if (word1 === 'invertebrado') {
    if (word2 === 'inseto') {
        if (word3 === 'hematofago') {
            console.log( 'pulga' );
        } else if (word3 === 'herbivoro') {
            console.log( 'lagarta' );
        }
    } else if (word2 === 'anelideo') {
        if (word3 === 'hematofago') {
            console.log( 'sanguessuga' );
        } else if (word3 === 'onivoro') {
            console.log( 'minhoca' );
        }
    }
}