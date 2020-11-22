let canvas = document.getElementById("snake");/* Pegando elemento do documento */
let context = canvas.getContext("2d");/* renderiza o q acontece dentro do canvas | entende como plano 2d*/
let box = 32;/* 32 PX cada quadrado */
let snake = [];/* Criando Array */
snake[0] = {
    x: 8 * box,
    y: 8 * box,/* definindo tamanho */
}
let direction = "right";/* variavel com direção, poderia ser qualquer outro */


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

/* função que atualiza o jogo em time, e parar o jogo quando cobra bater */
function iniciarJogo(){
    criarBG();
    criarCobrinha();/* chamando outras funções */

    /* Ponto de partida */
    let snakeX = snake[0].x;/* array na posição 0 x  */
    let snakex = snake[0].y;/* array na posição 0 Y */

    /* Cordenadas */
    if(direction == "right") snakeX += box; /* se posição for igual a direita acrescentar quadrado a mais */
    if(direction == "left") snakeX -= box; /* Esquerda | Pra direita aumenta e pra esquerda diminui */
    if(direction == "up") snakeY -= box;/* Y Pra cima */
    if(direction == "down") snakeY += box;/* Y Pra baixo */

    /* Retira ultimo elemento do Array */
    snake.pop();

    /* Acrescenta +1 a no primeiro elemento */

    let newHead = {
        x: snakeX,
        y: snakeY
    }
    snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100); /* passanndo intervalo para função iniciarJogo atualizar */





