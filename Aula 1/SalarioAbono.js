const leia = require('readline-sync')

let salario, abono, novosalario

console.log("Digite o salário: ")
salario = leia.questionFloat()

console.log("Digite o abono: ")
abono = leia.questionFloat()

//Processamento 
novosalario =  salario + abono

//Saida de dados 
console.log("\nNovo Salário: " + novosalario)
