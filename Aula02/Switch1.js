const leia = require("readline-sync");

let produto, preco

console.log("Código do Produto      Produto        Preço Unitário ");
console.log("        1           Cachorro quente      R$ 10.00    ");
console.log("        2           X-Salada             R$ 15.00    ");
console.log("        3           X-Bacon              R$ 18.00    ");
console.log("        4           Bauru                R$ 12.00    ");
console.log("        5           Refrigerante         R$ 8.00     ");
console.log("        6           Suco de laranja      R$ 13.00    ");


codigo = leia.questionInt("Codigo do produto: ")
quantidade = leia.questionInt("Quantidade: ")

switch (codigo) {
  case 1:
   produto = "Cachorro quente"
   preco = 10.00
    break;

     case 2:
    produto = "X-Salada"
    preco = 15.00
    break;

      case 3:
    produto = "X-Bacon"
    preco = 18.00
    break;

      case 4:
    produto = "Bauru"
    preco = 12.00
    break;

      case 5:
    produto = "Refrigerante"
    preco = 8.00
    break;

      case 6:
    produto = "Suco de Laranja"
    preco = 13.00
    break;

    default:
    console.log("Opção inválida - Digite 1 a 6") 
}

let total = quantidade * preco

console.log("\nProduto: ", produto)
console.log("Valor total: ", total)
