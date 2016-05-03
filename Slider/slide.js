var numImg = 1;
var totalImg = 5;
//load image
function load() {
	changeColor(1);
}
//change color index 
function changeColor(current) {
  	var number = document.getElementsByClassName("li-index");
	for (i = 0; i < number.length; i++) {
     		number[i].style.color = number[i].style.color.replace("yellow", "white");
  	}
  	number[numImg-1].style.color = "yellow";
}

//previous and next images
function slidePrevNext(x) {	
	var img = document.getElementById("slide-img");
	numImg = numImg + x;
	if (numImg > totalImg) {
		numImg = 1;
	}
	if (numImg < 1) {
		numImg = totalImg;
	}
	img.src = "images/" + numImg + ".jpg";
	changeColor(numImg);
}

//index image
function indexImages(x) {
	var img = document.getElementById("slide-img");
	numImg = x;
	img.src = "images/" + numImg + ".jpg";
	changeColor(numImg);
}
