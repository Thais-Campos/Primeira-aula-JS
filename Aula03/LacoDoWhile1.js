const leia = require("readline-sync");

let numero, soma 

soma = 0 

do {
    numero = leia.questionInt("\nDigite um numero: ");

    if (numero > 0) {
        soma = soma + numero // soma de numero positivos 
    }


}while (numero != 0)


    console.log("\nA soma dos numeros positivos e: " + soma);