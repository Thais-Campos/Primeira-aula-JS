const leia = require("readline-sync");

let vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

// Pesquisa o numero 
let numeroProcurado = leia.questionInt("\nDigite o numero que deseja encontrar: ");

let encontrado = false; 

for (let indice = 0; indice < 10; indice++) {
  if (vetor[indice] === numeroProcurado) {
    console.log(`O número ${numeroProcurado} está na posição ${indice}.`);
    encontrado = true;
    break; // encerrar o laço quando encontrar
  }
}

// Se não encontrou o numero \
if (!encontrado) {
  console.log("Não foi encontrado!");
}
