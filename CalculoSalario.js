const leia = require('readline-sync')

let salariobruto, adicional, horaextra, descontos, salfinal

console.log("Salario Bruto: ")
salariobruto = leia.questionFloat()

console.log("Adicional Noturno: ")
adicional = leia.questionFloat()

console.log("Horas Extras: ")
horaextra = leia.questionFloat()

console.log("Descontos: ")
descontos = leia.questionFloat()

salfinal = salariobruto + adicional + (horaextra * 5) - descontos

console.log("\nSalário Liquido: " + salfinal)
