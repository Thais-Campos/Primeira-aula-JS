const leia = require('readline-sync')

let valor1, valor2, valor3, valor4, valdiferenca

console.log("Numero 1: ")
valor1 = leia.questionFloat()

console.log("Numero 2: ")
valor2 = leia.questionFloat()

console.log("Numero 3: ")
valor3 = leia.questionFloat()

console.log("Numero 4: ")
valor4 = leia.questionFloat()

valdiferenca = (valor1 * valor2) - (valor3 * valor4)

console.log("\nA difereça : " + valdiferenca)