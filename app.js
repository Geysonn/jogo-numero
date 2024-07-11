let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroSecreto();
let tentativas = 1


function ExibirTextoNaTela (tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
    
}
function exibirMensagemInicial() {
ExibirTextoNaTela('h1', 'JOGO DO NÚMERO SECRETO');
ExibirTextoNaTela('P', 'ESCOLHA UM NÚMERO ENTRE 1 E 10');
}

exibirMensagemInicial()

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if(chute == numeroSecreto){
        ExibirTextoNaTela('h1', 'Parabens você acertou!');
        let = mensagemTentativa = tentativas> 1 ?'tentativas' : 'tentativa';
        let = mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${mensagemTentativa}`;
        ExibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
        ExibirTextoNaTela('h1', 'Você Errou!');
        ExibirTextoNaTela('p', "o numero secreto é menor!");

        } else{
            ExibirTextoNaTela('h1', 'Você Errou!');
            ExibirTextoNaTela('p', "o numero secreto é maior!");

        }

    }
    tentativas++;
    limparCampo();

}



function gerarNumeroSecreto() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosDaLista= listaDeNumerosSorteados.length;

    if(quantidadeDeElementosDaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroSecreto();

    } else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
    
}
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = ''
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroSecreto();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled', true);
}