function load() {
	//background canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");
	
	//bottom canvas
	canvasTop = document.getElementById("top-canvas");
	contextTop = canvasTop.getContext("2d");
	
	//number heart
	heart = 3;
	
	//score kill monster
	score = 0;
	
	//center point in canvas
	centerX = canvas.width/2;
	centerY = canvas.height/2;
	
	//position mouse 
	positionMouse = {
		x : 0,
		y : 0
	}
	//game
	gameOver = false;
	gameWin = false;
	gamePause = false;

	//array monster
	monster =[];
	numMons = 9;
	dieMons = false;

	//method requestAnimationFrame
	reAnima = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;
	cancelAnima = window.cancelAnimationFrame || window.mozCancelAnimationFrame;

	//create image
	imgBg = new Image();
	imgBg.src = "images/background.jpg";
	
	imgScore = new Image();
	imgScore.src
	
	imgMonster = new Image();
	imgMonster.src = "images/Mummy_zombie.jpg";
	
	imgBoss = new Image();
	imgBoss.src = "images/boss.jpg";
	
	imgTop = new Image();
	imgTop.src = "images/top.jpg";
	
	imgHeart = new Image();
	imgHeart.src = "images/heart.png";
	
	imgBoom = new Image();
	imgBoom.src = "images/boom.png";
	
	imgPause = new Image();
	imgPause.src = "images/pause.png";
	
	imgReset = new Image();
	imgReset.src = "images/reset.png";
	
	imgBlood = new Image();
	imgBlood.src = "images/blood.png";
	createMonster();
	
	//loop object
	if (reAnima) {
		if (gamePause == false) {
			drawBgCanvas();
			drawTop();
			drawScore();
			drawHeart();
			drawBoom();		
			drawMonster();
			drawBlood();
			drawGameWin();
			drawGameOver();
		}
		drawReset();
		drawPause();
	}

	//event click
	canvas.addEventListener("mousedown", mousedown, false);
	canvasTop.addEventListener("mousedown", mousedownTop, false);
}
//draw background canvas
function drawBgCanvas() {
	context.drawImage(imgBg, 0, 0, 500, 600);
	reAnima(drawBgCanvas);
}
//create monster
function createMonster() {
	//img, startX, startY, endX, endY, endL, speedX, speedY
	monster[0] = new Monster(imgMonster, 0, 0, 70, 0, -50, 1.5, 0);
	monster[1] = new Monster(imgMonster, (canvas.width/2) - 35, 0, 0, 90, 0, 0, 1.5);
	monster[2] = new Monster(imgMonster, 340, 0, 450, 0, 340, 1.5, 0);
	monster[3] = new Monster(imgMonster, 0, (canvas.height/2) - 30, 80, 0, -50, 1.5, 0);
	monster[4] = new Monster(imgMonster, 320, (canvas.height/2) - 30, 450, 0, 320, 1.5, 0);
	monster[5] = new Monster(imgMonster, 0, 490, 80, 0, -55, 1.5, 0);
	monster[6] = new Monster(imgMonster, (canvas.width/2) - 35, 380, 0, 530, 380, 0, 1.5);
	monster[7] = new Monster(imgMonster, 330, 490, 460, 0, 300, 1.5, 0);
	monster[8] = new Monster(imgBoss, (canvas.width/2)-200, (canvas.height/2) + 20, canvas.width - 30, canvas.height, 0, 4, 4);
}
//draw monster
function drawMonster() {
	for (var i = 0; i < numMons; i++) {
		monster[i].drawMonster(context);
		if (gamePause == false)
			monster[i].move();
		monster[i].checkCollision();
	}
	reAnima(drawMonster);
}
//draw top
function drawTop() {
	contextTop.drawImage(imgTop, 0, 0, 500, 90);
	reAnima(drawTop);
}
//draw score
function drawScore() {
	contextTop.fillStyle = "white";
	contextTop.font = "18px Arial";
	contextTop.fillText("Score: "+ score, 0, 25);
	reAnima(drawScore);
}
//draw heart
function drawHeart() {
	var tmp = 0;
	for (var i = 0; i < heart; i++) {
		contextTop.fillStyle = "white";
		contextTop.font = "18px Arial";
		contextTop.fillText("Heart: ", 0, 55);
		contextTop.drawImage(imgHeart, 50 + tmp, 40, 25, 25);
		tmp += 28;
	}
	reAnima(drawHeart);
}
//draw boom
function drawBoom() {
	contextTop.drawImage(imgBoom, 280, 20, 50, 40);
	reAnima(drawBoom);
}
//draw button pause
function drawPause() {
	contextTop.drawImage(imgPause, 350, 20, 50, 40);
	reAnima(drawPause);
}
//draw game over
function drawGameOver() {
	if (gameOver && gamePause == false) {
		context.fillStyle = 'RED';
		context.font = "bold 50px Arial";
		context.fillText('GAME OVER', centerX - 150, centerY);
		context.font = "bold 30px Arial";
		context.fillText('YOUR SCORE: ' + score, centerX - 125, centerY + 40);
	}
	reAnima(drawGameOver);
}
//draw game win
function drawGameWin() {
	if (gameWin && gamePause == false) {
		context.fillStyle = 'RED';
		context.font = "bold 50px Arial";
		context.fillText('WIN', (canvas.width/2)- 40, canvas.height/2);
		context.font = "bold 30px Arial";
		context.fillText('YOUR SCORE: ' + score, centerX - 125, centerY + 30);
	}
	reAnima(drawGameWin);
	cancelAnima(drawBlood);
}
//draw reset
function drawReset() {
	contextTop.drawImage(imgReset, 420, 20, 50, 40);
	reAnima(drawReset);
}
//draw blood
function drawBlood() {
	if (dieMons && gamePause == false) {
		context.drawImage(imgBlood, positionMouse.x - 20, positionMouse.y - 20, 40, 40);
	}
	reAnima(drawBlood);
}
function mousedown(e) {
	if (gamePause == true)
		return;
	positionMouse.x = e.pageX - canvas.offsetLeft;
	positionMouse.y = e.pageY - canvas.offsetTop;
	var tmp = 0;
	if (heart > 0) {
		for (var i = 0; i < numMons; i++) {
			if (monster[i].handleClick(positionMouse, i)) {
				monster.splice(i,1);
				numMons--;
				heart++;
				tmp = 1;
				score += 10;	
			}
		}
		if (tmp == 0)
			score -= 10;
		heart--;
		if (numMons == 0) {
			gameWin = true;
			console.log("win");
		}
	}
	if (heart == 0) {
		gameOver = true;
		numMons = 0;
		console.log("lose");
	}
	if (tmp == 1) {
		dieMons = true;
	} else {
		dieMons = false;
	}
}
//draw blood when click button boom
function drawBloodBoom() {
	context.drawImage(imgBlood, (canvas.width/2) - 60, (canvas.height/2) - 50, 120, 120);
	reAnima(drawBloodBoom);
}
//position mouse click top canvas
function mousedownTop(e) {
	var mouseClickX = e.pageX - canvasTop.offsetLeft;
	var mouseClickY = e.pageY - canvasTop.offsetTop;
	console.log(mouseClickX);
	console.log(mouseClickY);
	if (mouseClickX >= 420 && mouseClickX <= 470 && mouseClickY >= 25 && mouseClickY <= 50) {
		location.reload();
	}
	if (mouseClickX >= 280 && mouseClickX <= 330 && mouseClickY >= 25 && mouseClickY <= 50) {
		numMons = 0;
		heart = 3;
		drawBloodBoom();
	}
	if (mouseClickX >= 350 && mouseClickX <= 400 && mouseClickY >= 25 && mouseClickY <= 50) {
		gamePause = !gamePause
	}
}
//button reset
function clickReset() {
	if (positionMouse.x) {
		alert("reset");
	}
}
