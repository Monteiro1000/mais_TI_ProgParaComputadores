const prompt = require('prompt-sync')();

let dias = Number(prompt('Escreva a quantidade de dias que deseja utilizar o veículo: '));

let km = Number(prompt('Escreva a quantidade de quilômetro rodados: '));

function locadora(dias, km) {
    let diaria = dias * 90;
    if (km > 100 * dias) {
        km = (km - 100 * dias) * 12;
    }

    return km + diaria;
}

console.log(`O total do valor ficou: ${locadora(dias, km)}`);

