const leia = require("readline-sync")

let num1, num2

// aqui a entrada de dados/ os numeros 
num1 = leia.questionInt("Digite o primeiro numero do intervalo : ");
num2 = leia.questionInt("Digite o ultimo numero do intervalo : ");

//verificar o intervalo dos numeros o primeiro deve ser menor 
//se não o intervalor é invalido 
if (num1 >= num2) {
    console.log("Intervalo invalido!");
} else {
    console.log(`Numeros multiplos de 3 e 5 entre ${num1} e ${num2}:`)

//laço de repetição FOR
//com a saida de dados 
    for (let contador = num1; contador <= num2; contador++) {
    if (contador % 3 === 0 && contador % 5 === 0) {
      console.log(`${contador} é múltiplo de 3 e 5`);
    }
  }
}