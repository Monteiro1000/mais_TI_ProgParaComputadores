const prompt = require('prompt-sync')();

var palavras = []
maisde5 = 0

while (true){

var palavras = String(prompt('Digite uma palavra: '))
continuar = String(prompt('Quer continuar?[S/N]'))
if (continuar.toUpperCase == 'N') {
    break;
}
}
for(i = 0; i < palavras.length; i++) {
    
    if(palavras.length < 5) {
        maisde5 ++;
        palavras.pop()
    }
}

console.log(`Existem ${maisde5} palavras com mais de 5 caracteres.`)


