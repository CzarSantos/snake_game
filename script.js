let canvas = document.getElementById("snake");/* Pegando elemento do documento */
let context = canvas.getContext("2d");/* renderiza o q acontece dentro do canvas | entende como plano 2d*/
let box = 32;/* 32 PX cada quadrado */
let snake = [];/* Criando Array */
snake[0] = {
    x: 8 * box,
    y: 8 * box,/* definindo tamanho */
}
let direction = "right";/* variavel com direção, poderia ser qualquer outro */
let food = {/* varivael da comida */
    x: Math.floor(Math.random() * 15 + 1) * box, /* numeros aleatoririos inteiros até 16 | match floor tira virgulas */
    y: Math.floor(Math.random() * 15 + 1) * box

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
/* Comida */

function drawFood(){
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);/* passando posições */

}




/* Evento */
document.addEventListener('keydown', update);/* pega evento de click e o addEventListener chama update e passa como argumento o evento de tecla 37,38,39,40*/

function update (event){
    if(event.keyCode == 37 && direction != "right") direction = "left"; /* se direção for 37 e for diferente de direita muda para esquerda */
    if(event.keyCode == 38 && direction != "down") direction = "up";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 40 && direction != "up") direction = "down";
}



/* função que atualiza o jogo em time, e parar o jogo quando cobra bater */
function iniciarJogo(){
    /* Plano carteziano X e Y com limites */
    if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;/* Se a cabeça da cobra posição[0] ultrapassar o limite de 15 da direita * o tamanho do Box a posição é zerada e aparece no inicio da esquerda */
    if(snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 && direction == "up") snake[0].y = 16 * 15;


    /* chamando outras funções */
    criarBG();
    criarCobrinha();
    drawFood();

    /* Ponto de partida */
    let snakeX = snake[0].x;/* array na posição 0 x  */
    let snakeY = snake[0].y;/* array na posição 0 Y */

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





