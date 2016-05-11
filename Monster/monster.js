//create object monster
var Monster = function(img,pX,pY,eX,eY,eL,sX,sY) {
	//speed
	this.speedX = sX;
	this.speedY = sY;
	//size
	this.width = 100;
	this.height = 100;
	//start
	this.cx = pX;
	this.cy = pY;
	//image
	this.img = img;
	//end
	this.eX = eX;
	this.eY = eY;
	this.eL = eL;
}
//draw monster
Monster.prototype.drawMonster = function(context) {
	context.drawImage(this.img, this.cx, this.cy, this.width, this.height);
}
//move monster
Monster.prototype.move = function() {
	this.cx += this.speedX;
	this.cy += this.speedY;
}
//collistion
Monster.prototype.checkCollision = function() {
	if (this.cx < this.eL || this.cx > this.eX) {
		this.speedX = -this.speedX;
	}
	if (this.cy < this.eL || this.cy > this.eY) {
		this.speedY = -this.speedY;	
	}
}
//mouse position click and kill monster
Monster.prototype.handleClick = function(mouse, index) {
	if (this.cx < mouse.x && this.cx + this.width > mouse.x && this.cy < mouse.y && this.cy + this.height-60  > mouse.y) {
		return true;
	} else {
		return false;
	}
}