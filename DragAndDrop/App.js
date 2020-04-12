const bottom = document.querySelector(".bottom");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const middle = document.querySelector(".middle");
const areasArray = [bottom, left, right, middle];
var num, positionX, positionY;

var ball1 = document.createElement("img");
var ball2 = document.createElement("img");
var ball3 = document.createElement("img");
var ball4 = document.createElement("img");

var balls = [ball1, ball2, ball3, ball4];


function randomInt(min, max) {
    return min + Math.floor((max - min) * Math.random());
}
//random ball generating
for (var ball of balls) {
    num = randomInt(0, 3);
    switch (num) {
        case 0: ball.src = "soccer.png"; break;
        case 1: ball.src = "basketball.png"; break;
        case 2: ball.src = "volley.png"; break;
    }
    num = randomInt(2, 9);
    num = num + "0%";
    ball.style.left = num;
    num = randomInt(7, 9.1);
    num = num + "0%";
    ball.style.top = num;
    bottom.firstElementChild.appendChild(ball); //adding ball
    //
    //ball draggable
    ball.draggable = "true";
    console.log(ball);


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
        console.log(data);
        if (data === "ball1") {
            ball1.style.left = positionX + "px";
            ball1.style.top = positionY + "px";
        } else if (data === "ball2") {
            ball2.style.left = positionX + "px";
            ball2.style.top = positionY + "px";
        } else if (data === "ball3") {
            ball3.style.left = positionX + "px";
            ball3.style.top = positionY + "px";
        } else if (data === "ball4") {
            ball4.style.left = positionX + "px";
            ball4.style.top = positionY + "px";
        }

    })
}
