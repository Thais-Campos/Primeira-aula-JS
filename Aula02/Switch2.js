const leia = require("readline-sync");

let nome, cargo, salario, percentual

console.log("Código do Cargo      Cargo        Percentual do Reajuste ");
console.log("        1           Gerente                 10%          ");
console.log("        2           Vendedor                7%           ");
console.log("        3           Supervisor              9%           ");
console.log("        4           Motorista               6%           ");
console.log("        5           Estoquista              5%           ");
console.log("        6           Técnico de TI           8%           ");

nome = leia.question("Nome do colaborador: ")
cargo = leia.questionInt("Cargo: ")
salario = leia.questionFloat("Salario: ")

switch (cargo) {
  case 1:
   cargo = "Gerente"
   percentual = 10
    break;

     case 2:
    cargo = "Vendedor"
    percentual = 7
    break;

      case 3:
    cargo = "Supervisor"
    percentual = 9
    break;

      case 4:
    cargo = "Motorista"
    percentual = 6
    break;

      case 5:
    cargo = "Estoquista"
    percentual = 5
    break;

      case 6:
    cargo = "Técnico de TI"
    percentual = 8
    break;

    default:
    console.log("Opção inválida - Digite 1 a 6") 
}

let newsal = salario + (salario * (percentual/100))

console.log("\nNome do colaborador: ", nome)
console.log("Cargo: ", cargo)
console.log("Salario: ", newsal)