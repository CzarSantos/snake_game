let canvas = document.getElementById("snake");/* Pegando elemento do documento */
let context = canvas.getContext("2d");/* renderiza o q acontece dentro do canvas | entende como plano 2d*/
let box = 32;/* 32 PX cada quadrado */

function criarBG(){/* background do canvas */
    context.fillStyle = "lightgreen";/*Cor de fundo */
    context.fillRect(0,0,16 * box, 16  * box);/* fillRect: 4 parametros | Desenha retangulo onde acontece o game */
}

criarBG();