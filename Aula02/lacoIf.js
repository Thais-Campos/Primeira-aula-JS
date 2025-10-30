const leia = require('readline-sync')

let num1, num2, num3, numaior

num1 = leia.questionInt("Digite o numero A: ")

num2 = leia.questionInt("Digite o numero B: ")

num3 = leia.questionInt("Digite o numero C: ")

numaior = num1 + num2

if (numaior == num3){
    console.log("A Soma de A + B é Igual a C")
} else if(numaior >= num3){
    console.log("A Soma de A + B é Maior do que a C")
}else {
    console.log("Vc A Soma de A + B é Menor do que C!")
}
