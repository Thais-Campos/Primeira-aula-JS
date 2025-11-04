import readlineSync from "readline-sync";
import { Queue } from "./Queue";

const fila = new Queue<string>();

let opcao: number;

do {
  console.log("\n=== Atendimento ===");
  console.log("1 - Adicionar Cliente na Fila");
  console.log("2 - Listar todos os Clientes");
  console.log("3 - Retirar Cliente da Fila");
  console.log("0 - Sair");
  opcao = readlineSync.questionInt("Digite uma opcao: ");

  switch (opcao) {
    case 1:
      const nome = readlineSync.question("Digite o nome: ");
      fila.enqueue(nome);
      break;

    case 2:
      if (fila.isEmpty()) {
        console.log("A fila está vazia!");
      } else {
        fila.printQueue();
      }
      break;

    case 3:
      if (fila.isEmpty()) {
        console.log("A fila está vazia!");
      } else {
        fila.dequeue(); // remove o primeiro da fila

        if (fila.isEmpty()) {
          console.log("Todos os clientes foram atendidos!");
        } else {
          fila.printQueue();
        }
      }
      break;

    case 0:
        console.log("\nPrograma Finalizado!");
      break;

    default:
      console.log("Opção inválida!");
  }
} while (opcao !== 0);
