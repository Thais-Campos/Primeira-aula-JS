import readlineSync from "readline-sync";
import { Stack } from "./Stack";

const pilha = new Stack<string>();

let opcao: number;

do {
  console.log("\n=== Livros ===");
  console.log("1 - Adicionar Livro na Pilha");
  console.log("2 - Listar todos os Livros");
  console.log("3 - Retirar Livro da Pilha");
  console.log("0 - Sair");
  opcao = readlineSync.questionInt("\nDigite uma opcao: ");

  switch (opcao) {
    case 1:
      const livro = readlineSync.question("\nDigite o nome: ");
      pilha.push(livro);

      console.log("\nPilha:");
      pilha.printStack();
      console.log("\nLivro adicionado!");
      break;

    case 2:
      if (pilha.isEmpty()) {
        console.log("\nA Pilha está vazia!");
      } else {
        console.log("\nLista de Livros na Pilha:\n");
        pilha.printStack();
      }
      break;

    case 3:
      if (pilha.isEmpty()) {
        console.log("\nA Pilha está vazia!");
      } else {
        pilha.pop(); 

        console.log("\nPilha:");
        pilha.printStack();
        console.log("\nUm Livro foi retirado da pilha!");
      }
      break;

    case 0:
      console.log("\nPrograma Finalizado!");
      break;

    default:
      console.log("\nOpcao invalida!");
  }
} while (opcao !== 0);
