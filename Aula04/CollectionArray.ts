import leia = require("readline-sync");


const numeros = new Set<number>();

console.log("Digite 10 números:");

// entrada 10 números
for (let i = 0; i < 10; i++) {
  const num = leia.questionInt(`Digite o ${i + 1} numero: `);
  numeros.add(num); // ignora os numeros repetidos 
}

const numerosOrdenados = Array.from(numeros).sort((a, b) => a - b); //ordem crescente 

// números únicos e ordem crescente 
console.log("\nListar dados do Set:");
numerosOrdenados.forEach(numero => console.log(numero));



