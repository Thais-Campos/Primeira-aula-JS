const leia = require('readline-sync')

let nota1, nota2, nota3, nota4, mediafinal 

console.log("Nota 1: ")
nota1 = leia.questionFloat()

console.log("Nota 2: ")
nota2 = leia.questionFloat()

console.log("Nota 3: ")
nota3 = leia.questionFloat()

console.log("Nota 4: ")
nota4 = leia.questionFloat()

//Processamento 
mediafinal =  (nota1 + nota2 + nota3 + nota4) / 4

//Saida de dados 
console.log("\nMédia Final: " + mediafinal)
