let numeroSecreto
let numeroEscolhido

do {

    alert("Boas-vindas ao jogo do número secreto");

    do {
        numeroSecreto = parseInt(prompt("Escolha um número secreto de 1 a 30"));

        if (numeroSecreto >= 1 && numeroSecreto <= 30) {


            do {

                numeroEscolhido = parseInt(prompt("Escolha um número entre 1 e 30"));

                if (numeroEscolhido >= 1 && numeroEscolhido <= 30) {

                    if (numeroEscolhido == numeroSecreto) {
                        alert("Parabéns você acertou");
                    } else if (numeroEscolhido > numeroSecreto) {
                        alert(
                        "O número " + numeroEscolhido + " é maior que o número secreto"
                        );
                    } else if (numeroEscolhido < numeroSecreto) {
                        alert(
                        "O número " + numeroEscolhido + " é menor que o número secreto"
                        );
                    }

                } else {
                alert("Número Inválido");
                }

            } while (numeroSecreto != numeroEscolhido);


        } else {
            alert("Número Secreto Inválido");
        }

    } while ((numeroSecreto < 1) || (numeroSecreto > 30));

    jogarNovamente = confirm("Deseja jogar novamente?");

} while (jogarNovamente == true);
