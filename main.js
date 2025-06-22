const readline = require("readline-sync");

const jogoArr = ["pedra", "papel", "tesoura"];

let opcaoJogador;
let placar = 0;

function menu() {
  console.log(
    "Bem-vindo(a) ao jogo de PEDRA, PAPEL OU TESOURA!\n Deseja iniciar?\n [1] - Sim\n [2] - Não"
  );
  opcaoJogador = parseInt(readline.question(""));

  if (opcaoJogador == "1") {
    console.log("INICIANDO");

    jogo();
  } else if (opcaoJogador == "2") {
    exit();
  } else {
    console.log("Opção inválida! Escolha opção [1] ou [2].");
    menu();
  }
}

function jogo() {
  let opcaoAleatoria = jogoArr[Math.floor(Math.random() * jogoArr.length)]; //aleatoriza o array

  console.log("Você escolhe pedra, papel ou tesoura?");

  opcaoJogador = readline.question("").toLowerCase();

  if (!jogoArr.includes(opcaoJogador)) {
    console.log("Opção inválida! Tente Novamente.");
    jogo();
  }

  if (opcaoJogador === opcaoAleatoria) {
    // verifica se houve empate
    console.log(`Empate! Seu oponente também escolheu ${opcaoJogador}`);
  } else if (
    (opcaoJogador === "pedra" && opcaoAleatoria === "tesoura") ||
    (opcaoJogador === "papel" && opcaoAleatoria === "pedra") ||
    (opcaoJogador === "tesoura" && opcaoAleatoria === "papel")
  ) {
    console.log(
      `Você ganhou! Você escolheu ${opcaoJogador} e seu oponente escolheu ${opcaoAleatoria}`
    );
    placar++;
    console.log(`\n---PLACAR---\nVocê ganhou: ${placar} vezes`);

    jogarNovamente();
  } else {
    console.log(`Você perdeu! Seu oponente escolheu ${opcaoAleatoria}`);
    console.log(`\n---PLACAR---\n${placar}`);
    jogarNovamente();
  }
}

function jogarNovamente() {
  let jogar_Novamente = parseInt(
    readline.question("Deseja jogar novamente?\n [1] - Sim\n [2] - Não ")
  );
  if (jogar_Novamente == "1") {
    jogo();
  } else {
    exit();
  }
}

function exit() {
  console.log("Obrigado por jogar!");
  process.exit();
}

menu(); // Incia o menu
