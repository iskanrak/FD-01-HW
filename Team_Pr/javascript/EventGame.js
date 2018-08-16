
function eventGame() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");//метод контекстного рисования
    var ballRadius = 10; //содержит значения радиуса шара будет использоваться для взаимодействия с краями холста и прочими объектами
    var x = canvas.width / 2;//изменение положения(по ценру в низу)
    var y = canvas.height - 30;// координата положения от нижней плоскости
    var dx = 2;//переменная для перемещения шара по оси Х
    var dy = -2;//переменная для перемещения шара по оси У
    var paddleHeight = 10;//высота площадки
    var paddleWidth = 75;//ширина площадки
    var paddleX = (canvas.width - paddleWidth) / 2;//начальное положение по оси Х
    var rightPressed = false;//инициализирована нажатая кнопка определенная как булевая переменная
    var leftPressed = false;//инициализирована нажатая кнопка определенная как булевая переменная
    var brickRowCount = 3;//количество рядов кирпичей
    var brickColumnCount = 6;//количество кирпичей в ряду
    var brickWidth = 75;//координаты верха
    var brickHeight = 20;//высота кирпича
    var brickPadding = 10;//толщина кирпича
    var brickOffsetTop = 30;//смещение от верха что бы не рисовались с краю
    var brickOffsetLeft = 70;//смещение с лева что бы не рисовались от края
    var bricks = [];//массив которых хранит данные о кирпичах
    var score = 0;
    var lives = 3;
    for (c = 0; c < brickColumnCount; c++) { //С это кирпичные слобцы
        bricks[c] = [];//которые заносятся в масив
        for (r = 0; r < brickRowCount; r++) {//кирпичные ряды
            bricks[c][r] = {
                x: 0, y: 0, status: 1
            };//которые заносятся в масив
        }
    }
    document.addEventListener("keydown", keyDownHandler, false);//создали прослушиватель событий для нажатой кнопки
    document.addEventListener("keyup", keyUpHandler, false);//создали прослушиватель событий для отжатой кнопки
    document.addEventListener("mousemove", mouseMoveHandler, false);// прослушивание событий движения мыши!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    function mouseMoveHandler(e) { //функция прослушивая мыши и привязки к объекту
        var relativeX = e.clientX - canvas.offsetLeft;//релатив - значение равное горизонтальному положению указателя которое равно левый край холста минул левый край окна просмотра
        if (relativeX > 0 && relativeX < canvas.width) {
            paddleX = relativeX - paddleWidth / 2;//центрирует движение курсора относительно центра площадки
        }
    }

    //,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,............

    function keyDownHandler(e) {//функция обработки прослушивания нажатия клавишь
        if (e.keyCode == 39) {//если кнопка "в право" нажата то значение true
            rightPressed = true;
        }
        else if (e.keyCode == 37) {//если кнопка "в лево" нажата то значение true
            leftPressed = true;
        }
    }

    function keyUpHandler(e) {//функция обработки прослушивания отпускания клавишь
        if (e.keyCode == 39) {//если кнопка "в право" отжата то значение false
            rightPressed = false;
        }
        else if (e.keyCode == 37) {//если кнопка "в право" отжата то значение false
            leftPressed = false;
        }
    }

    function collisionDetection() {//функция обнаружения кирпичей и столкновения
        for (c = 0; c < brickColumnCount; c++) {//если кирпечей в столбце меньше, то нарисовать кирпич
            for (r = 0; r < brickRowCount; r++) {//если кирпечей в ряду меньше, то нарисовать кирпич
                var b = bricks[c][r];//массив из рядов и столбцов кирпичей
                if (b.status == 1) {//обнаружение кирпича
                    if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
                        dy = -dy;//если кирпич обнаружен то изменить направление на противоположное
                        b.status = 0;// удаление обнаруженного кирпича
                        score++;//увеличить счет на одно очко
                        if (score == brickRowCount * brickColumnCount) {//если количество очков равноколичеству кирпичей вывести сообщение:
                            alert("YOU WIN, CONGRATULATIONS!");
                            document.location.reload();
                        }
                    }
                }
            }
        }
    }
    function drawScore() {//вызов функции отрисовки счета
        ctx.font = "16px Arial";//размер и тип шрифта
        ctx.fillStyle = "#0095DD";//цвет шрифта
        ctx.fillText("Score: " + score, 8, 20);//текст и его положение
    }
    function drawLives() {//функция отрисовки жизни
        ctx.font = "16px Arial";//размер шрифта и его тип
        ctx.fillStyle = "#0095DD";//цвет шрифта
        ctx.fillText("Lives: " + lives, canvas.width - 65, 20);//текст надписи и ее положения на холсте
    }
    function drawBall() {// функция рисующая мач
        ctx.beginPath();//начало рисования
        ctx.arc(x, y, ballRadius, 0, Math.PI * 2);//начальные координаты оХ/оУ, радиус, рисование окружности в радианах
        ctx.fillStyle = "red";//цвет объекта
        ctx.fill();//метод работы с объектом
        ctx.closePath();//конец рисовани
    }

    function drawPaddle() {//рисование площадки
        ctx.beginPath();
        ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);//изменяемые параметры площадки
        ctx.fillStyle = "#0095DD";//цвет
        ctx.fill();
        ctx.closePath();
    }

    function drawBricks() {
        for (c = 0; c < brickColumnCount; c++) {//сравнивается сколько кирпичей нарисовано в столбце, если недостаточно рисует еще один
            for (r = 0; r < brickRowCount; r++) {//сравнивает сколько кирпичей в ряду, не достаточно рисует еще один кирпич
                if (bricks[c][r].status == 1) {
                    var brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;//рисует кирпичные столбцы с отступом другот друга в новой координате
                    var brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;//рисует кирпичные ряды с отступом другот друга в новой координате
                    bricks[c][r].x = brickX;//вывод массива по координатам Х
                    bricks[c][r].y = brickY;//вывод массива по координатом У
                    ctx.beginPath();//начало рисования
                    ctx.rect(brickX, brickY, brickWidth, brickHeight);//высота толщина координаты кирпича
                    ctx.fillStyle = "#0095DD";// цвет кирпича
                    ctx.fill();//управление стилем
                    ctx.closePath();//конец рисования
                }
            }
        }
    }

    function draw() {//функция стирания следов движения исоздания анимимрованого движения
        ctx.clearRect(0, 0, canvas.width, canvas.height);// функция стирания следа от движения шара
        drawBricks();//вызов функции отрисовки кирпичей
        drawBall();//вызов функции для рисования шара
        drawPaddle();//вызов рисования площадки
        drawScore();//вызов функции отрисовки счета
        drawLives();//вызов функции отрисовки жизни
        collisionDetection()//вызов функции стирани кирпичей и изменения движения и увиличения счета
        if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {//проверка:соприкосается ли с левым и правым краем холста мяч
            dx = -dx;//если соприкосается то изменить движение на противоположное
        }
        if (y + dy < ballRadius) {//проверка:соприкосается ли с верхним и нижним краем холста мяч
            dy = -dy;//если соприкосается то изменить движение на противоположное
        }
        else if (y + dy > canvas.height - ballRadius) {//проверка соприкосновения с низом экрана
            if (x > paddleX && x < paddleX + paddleWidth) {//если попадает шар на площадку то отскакивает
                dy = -dy;
            }
            else {//если не попадает то:
                lives--; //отнимает жизнь
                if (!lives) {//если жизнь заканчивается то:
                    alert("GAME OVER");//при соприкосновении с низом экрана:конец игры
                    document.location.reload(); //перезапускает игру
                }
                else {
                    x = canvas.width / 2;//начальная позиция после смерти
                    y = canvas.height - 30;//начальная позиция после смерти
                    dx = 2;//направление движения после смерти
                    dy = -2;//направление движения после смерти
                    paddleX = (canvas.width - paddleWidth) / 2;//перемещает площадку в центр с мячем
                }
            }
        }
        if (rightPressed && paddleX < canvas.width - paddleWidth) {//условие при котором срабатывает перемещение на 7 пикселей в право
            paddleX += 7;
        }
        else if (leftPressed && paddleX > 0) {//условие при котором срабатывает перемещение на 7 пикселей в лево
            paddleX -= 7;
        }
        x += dx;//начало анимированого движение за счет обновления функции Draw
        y += dy;//начало анимимрованого движения за счет обновления функции Draw
        requestAnimationFrame(draw);//цикл для вызова функции рисования, более плавная анимация и лучшая отрисовка чем в сетинтервал
    }

    draw();//метод вызова функции каждые 10 милисек
}