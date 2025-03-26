//Par o Impar

const prompt = require("prompt-sync")();

let number = Number(prompt("Escriba un número: "));

function parImpar(number) {
    if (number % 2 == 0) {
        return "El número es par";
    } else {
        return "El número es impar";
    }
}

console.log(parImpar(number))
// "Prueba"