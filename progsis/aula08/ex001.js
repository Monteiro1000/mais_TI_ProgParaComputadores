const prompt = require('prompt-sync')();
vogais = 0

let palavra = String(prompt('Digite uma palavra: '))
palavra.split()

for ( i = 0; i < palavra.length; i++){

    const letra = palavra[i].toUpperCase();
    
    if ('AEIOU'.includes(letra)) {
        vogais += 1;
    }
}

console.log(`Existem ${vogais} vogais na palavra.`)