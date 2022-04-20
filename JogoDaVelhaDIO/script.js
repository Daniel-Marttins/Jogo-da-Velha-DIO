let jogador, vencedor = null;
let jogadorSelecionado = document.getElementById('jogador-selecionado');
let vencedorSelecionado = document.getElementById('vencedor-selecionado');
let quadrados = document.getElementsByClassName('quadrado');

mudarJogador('X');

function escolherQuadrado(id){
    if(vencedor !== null){
        return;
    }

    let quadrado = document.getElementById(id);

    if(quadrado.innerHTML !== '-'){
        return;
    }

    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000';

    if(jogador === 'X'){
        jogador = 'O';
    }else{
        jogador = 'X'
    }

    mudarJogador(jogador);
    winnerCheck();
}

function mudarJogador(valor){
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function winnerCheck(){
    let quadrado1 = document.getElementById(1);
    let quadrado2 = document.getElementById(2);
    let quadrado3 = document.getElementById(3);
    let quadrado4 = document.getElementById(4);
    let quadrado5 = document.getElementById(5);
    let quadrado6 = document.getElementById(6);
    let quadrado7 = document.getElementById(7);
    let quadrado8 = document.getElementById(8);
    let quadrado9 = document.getElementById(9);

    if(sequencyCheck(quadrado1, quadrado2, quadrado3)){
           changeColor(quadrado1, quadrado2, quadrado3);
           changeWinner(quadrado1);
           return;
    }

    else if(sequencyCheck(quadrado4, quadrado5, quadrado6)){
        changeColor(quadrado4, quadrado5, quadrado6);
        changeWinner(quadrado4);
        return;
    }

    else if(sequencyCheck(quadrado7, quadrado8, quadrado9)){
        changeColor(quadrado7, quadrado8, quadrado9);
        changeWinner(quadrado7);
        return;
    }

    else if(sequencyCheck(quadrado1, quadrado4, quadrado7)){
        changeColor(quadrado1, quadrado4, quadrado7);
        changeWinner(quadrado1);
        return;
    }

    else if(sequencyCheck(quadrado2, quadrado5, quadrado8)){
        changeColor(quadrado2, quadrado5, quadrado8);
        changeWinner(quadrado2);
        return;
    }

    else if(sequencyCheck(quadrado3, quadrado6, quadrado9)){
        changeColor(quadrado3, quadrado6, quadrado9);
        changeWinner(quadrado3);
        return;
    }

    else if(sequencyCheck(quadrado1, quadrado5, quadrado9)){
        changeColor(quadrado2, quadrado5, quadrado9);
        changeWinner(quadrado1);
        return;
    }

    else if(sequencyCheck(quadrado3, quadrado5, quadrado7)){
        changeColor(quadrado3, quadrado5, quadrado7);
        changeWinner(quadrado3);
        return;
    }
}

function changeWinner(quadrado){
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}

function changeColor(quadrado1, quadrado2, quadrado3){
    quadrado1.style.background = 'aqua';
    quadrado2.style.background = 'aqua';
    quadrado3.style.background = 'aqua';
}

function sequencyCheck(quadrado1, quadrado2, quadrado3){
    let check = false;

if(quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML){
        check = true;
    }

    return check;
}

function reiniciar(){
    vencedor = null;
    vencedorSelecionado.innerHTML = '';

    for(var i = 1; i <= 9; i++){
        let quadrado = document.getElementById(i);
        quadrado.style.background = '#eee';
        quadrado.style.color = '#eee';
        quadrado.innerHTML = '-';
    }

    mudarJogador('X');
}