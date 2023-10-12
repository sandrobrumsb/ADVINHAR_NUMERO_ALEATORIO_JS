let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numerosecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2})
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do numero secreto');
    exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numerosecreto) {
        exibirTextoNaTela('h1', 'ACERTOU!!!!');

        let palavraTentativa = tentativas > 1 ? 'TENTATIVAS' : 'TENTATIVA';

        let = mensagemTentativas = `VOCE DESCOBRIU O NUMERO SECRETO COM ${tentativas} ${palavraTentativa}!!!`;

        exibirTextoNaTela('p', mensagemTentativas);

        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {

        if (chute > numerosecreto) {
            exibirTextoNaTela('p', 'O numero secreto menor que o chute!!!!');
        } else {
            exibirTextoNaTela('p', 'O numero secreto é maior que o chute!!!!');
        }

        tentativas++;
        limparCampo();

    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido =  parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido)
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}


function reiniciarJogo() {
    numerosecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}