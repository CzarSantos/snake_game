let canvas = document.getElementById("snake");/* Pegando elemento do documento */
let context = canvas.getContext("2d");/* renderiza o q acontece dentro do canvas | entende como plano 2d*/
let box = 32;/* 32 PX cada quadrado */
let snake = [];/* Criando Array */
snake[0] = {
    x: 8 * box,
    y: 8 * box,/* definindo tamanho */
}


function criarBG(){/* background do canvas */
    context.fillStyle = "lightgreen";/*Cor de fundo */
    context.fillRect(0,0,16 * box, 16  * box);/* fillRect: 4 parametros | Desenha retangulo onde acontece o game */
}
function criarCobrinha(){
    for(i=0; i < snake.length; i++){/* For tem o valor do array + incremento */
        context.fillStyle = "green";/* Cor do elemento */
        context.fillRect (snake[i].x, snake[i].y, box, box);/* Definindo tamanho do elemento */

    }
 
}
criarBG();
criarCobrinha();