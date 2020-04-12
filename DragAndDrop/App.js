const bottom = document.querySelector(".bottom");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const middle = document.querySelector(".middle");
const bottomField = document.querySelector(".bottom > .field")
const areasArray = [bottom, left, right, middle];
var num, positionX, positionY;
var correctDrops=0;

var ball1 = document.createElement("img");
var ball2 = document.createElement("img");
var ball3 = document.createElement("img");
var ball4 = document.createElement("img");

var balls = [ball1, ball2, ball3, ball4];

function randomInt(min, max) {
    return min + Math.floor((max - min) * Math.random());
}
//random ball generating
const ballsInit = () =>{
    for (var ball of balls) {
        num = randomInt(0, 3);
        switch (num) {
            case 0: ball.src = "soccer.png"; break;
            case 1: ball.src = "basketball.png"; break;
            case 2: ball.src = "volley.png"; break;
        }
        num = randomInt(2, 9);
        num = num + "0%";
        ball.style.zIndex=3;
        ball.style.left = num;
        num = randomInt(7, 9.1);
        num = num + "0%";
        ball.style.top = num;
        ball.draggable = "true";
        bottom.firstElementChild.appendChild(ball); 
    }
}

ball1.addEventListener("dragstart", event => {
    event.dataTransfer.setData("text/plain", "ball1");
    event.dataTransfer.effectAllowed = "move";
})
ball2.addEventListener("dragstart", event => {
    event.dataTransfer.setData("text/plain", "ball2");
    event.dataTransfer.effectAllowed = "move";
})
ball3.addEventListener("dragstart", event => {
    event.dataTransfer.setData("text/plain", "ball3");
    event.dataTransfer.effectAllowed = "move";
})
ball4.addEventListener("dragstart", event => {
    event.dataTransfer.setData("text/plain", "ball4");
    event.dataTransfer.effectAllowed = "move";
})
//
const dropFunctionality = (dataSend,name,obj,obj2) =>{
    if (dataSend === name) {
        if((obj2.className==="left" && obj.src.match(/soccer/))|| (obj2.className==="middle" && obj.src.match(/basketball/)) || (obj2.className==="right" && obj.src.match(/volley/))){
            obj.style.left = positionX + "px";
            obj.style.top = positionY + "px";
            correctDrops++;
        }
        if(correctDrops==4){
            console.log('you won!');
        }
}
}
for (const area of areasArray) {
    area.firstElementChild.addEventListener("dragover", event => {
        event.preventDefault();
        positionX = event.clientX;
        positionY = event.clientY;
        area.firstElementChild.style.backgroundColor = "orange";
    });
    area.addEventListener("dragleave", event => {
        event.preventDefault();
        area.firstElementChild.style.backgroundColor = "white";
    });
    area.addEventListener("drop", event => {
        area.firstElementChild.style.backgroundColor = "white";
        var data = event.dataTransfer.getData("text/plain");
        dropFunctionality(data,"ball1",ball1,area);
        dropFunctionality(data,"ball2",ball2,area);
        dropFunctionality(data,"ball3",ball3,area);
        dropFunctionality(data,"ball4",ball4,area);
    });
}
ballsInit();