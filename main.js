const readline = require('readline-sync');

const jogoObj = ['pedra', 'papel', 'tesoura']

let opcaoJogador
let placar = []


function menu(){

}

function jogo(){
    let opcaoAleatoria = jogoObj[Math.floor(Math.random() * jogoObj.length)]

    console.log('Você escolhe pedra, papel ou tesoura?');
    
    opcaoJogador = readline.question('').toLowerCase
    
    if(!jogoObj.includes(opcaoJogador)){
        console.log('Opção inválida! Tente Novamente.')
        jogo()
    }

    if(opcaoJogador === opcaoAleatoria)
 
}

jogo()