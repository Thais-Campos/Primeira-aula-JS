const leia = require('readline-sync')

let nome, idade, primdoacao

nome = leia.question("Digite o nome do doador: ")
idade = leia.questionInt("Digite a idade do doador: ")
primdoacao = leia.keyInYNStrict("Primeira doacao de sangue?: ") 


if (idade >= 18 && idade <= 69){
    console.log(nome, "está apto a doar sangue")
}else if (idade >= 60 && idade <= 69 && primdoacao === true){
    console.log (nome, "não está apto para doar sangue")
}
else{
    console.log(nome, "não está apto para doar sangue")
}
