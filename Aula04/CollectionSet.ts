import leia = require("readline-sync");

const numeros: Set<number> = new Set<number>([2, 5, 1, 3, 4, 9, 7, 8, 10, 6]);

console.log("\nNúmeros cadastrados:");
for (let numero of numeros) {
  console.log(numero);
}

const numeroProcurado = leia.questionInt("\nDigite o número que deseja encontrar: ");

if (numeros.has(numeroProcurado)) {

  const vetorNumeros = Array.from(numeros);
  const posicao = vetorNumeros.indexOf(numeroProcurado);

  console.log(`O número ${numeroProcurado} foi encontrado na posição ${posicao}.`);
} else {
  console.log(`O número ${numeroProcurado} não foi encontrado!`);
}
