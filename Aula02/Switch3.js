const leia = require("readline-sync");

let num1, num2, codigo, resultado, simbolo

console.log("      Código       Operação          ");
console.log("        1          Soma              ");
console.log("        2          Subtracao         ");
console.log("        3          Multiplicacao     ");
console.log("        4          Divisao           ");

num1 = leia.questionFloat("Digite o 1 numero: ")
num2 = leia.questionFloat("Digite o 2 numero: ")
codigo = leia.questionInt("Operacao: ")


switch (codigo) {
  case 1:
   resultado = (num1 + num2)
   simbolo = "+"
    break;

     case 2:
    resultado = (num1 - num2)
   simbolo = "-"
    break;

      case 3:
    resultado = (num1 * num2)
   simbolo = "*"
    break;

      case 4:
   resultado = (num1 / num2)
   simbolo = "/"
    break;

    default:
    console.log("Operacao Invalida!") 
}


if(simbolo != undefined)
    {console.log(num1,simbolo,num2,'=', resultado)}
