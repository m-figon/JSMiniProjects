const bottom = document.querySelector(".bottom");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const middle = document.querySelector(".middle");
var num;
const ball = document.createElement("img");
function randomInt(min, max) {
	return min + Math.floor((max - min) * Math.random());
}
num = randomInt(0,3);
switch (num){
    case 0: ball.src="soccer.png"; break;
    case 1: ball.src="basketball.png"; break;
    case 2: ball.src="volley.png"; break;
}
num = randomInt(0,10);
num = num + "0%";
ball.style.left=num;
num = randomInt(0,8);
num = num + "0%";
ball.style.top=num;
//random number from 0-9, 0-7
bottom.firstElementChild.appendChild(ball);
