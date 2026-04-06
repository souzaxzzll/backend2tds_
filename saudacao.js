function saudacao(nomeJogador) {
    console.log("Bem vindo ao jogo, " + nomeJogador + "!")
};

saudacao("Felps");

function subirDeNivel(nivelAtual) {
    return nivelAtual + 1;
}

let meuNivel = 66;

let nivelAtualizado = subirDeNivel(meuNivel);
console.log("Seu nível atual é: " + nivelAtualizado);

function soma(numero1, numero2) {
    return numero1 * numero2
};

console.log(soma(5,3));