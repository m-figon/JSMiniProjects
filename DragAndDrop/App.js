const bottom = document.querySelector(".bottom");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const middle = document.querySelector(".middle");
const app = document.querySelector(".app");

const bottomField = document.querySelector(".bottom > .field")
const areasArray = [bottom, left, right, middle];
var num, correctFlag, positionX, positionY;
var correctDrops=0;

var ball1 = document.createElement("img");
var ball2 = document.createElement("img");
var ball3 = document.createElement("img");
var ball4 = document.createElement("img");
var positionsX=[];
var positionsY=[];
var balls = [ball1, ball2, ball3, ball4];

function randomInt(min, max) {
    return min + Math.floor((max - min) * Math.random());
}
const positionReset = () =>{
    for(var i=0; i<4; i++){
        positionsX[i]=0;
        positionsY[i]=0;
    }
}
const positionCheck = () =>{
    for(var i=0; i<4; i++){
        for(var j=0; j<4; j++){
            if(positionsX[i]===positionsX[j] && positionsY[i]===positionsY[j] && i!==j){
                return false;
            }
        }
    }
    return true;
}
//random ball generating
const ballsInit = () =>{
    for (var i=0; i<4; i++) {
        num = randomInt(0, 3);
        switch (num) {
            case 0: balls[i].src = "soccer.png"; break;
            case 1: balls[i].src = "basketball.png"; break;
            case 2: balls[i].src = "volley.png"; break;
        }
        positionsX[i] = randomInt(2, 9);
        positionsY[i] = randomInt(7, 9);
        positionsX[i] = positionsX[i] + "0%";
        positionsY[i] = positionsY[i] + "0%";
        balls[i].style.zIndex=3;
        balls[i].style.left = positionsX[i];
        balls[i].style.top = positionsY[i];
        balls[i].draggable = "true";
        bottom.firstElementChild.appendChild(balls[i]); 
    }
    correctFlag=positionCheck();
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
}
//
const dropFunctionality = (dataSend,name,obj,obj2) =>{
    if (dataSend === name) {
        if((obj2.className==="left" && obj.src.match(/soccer/))|| (obj2.className==="middle" && obj.src.match(/basketball/)) || (obj2.className==="right" && obj.src.match(/volley/))){
            obj.style.left = positionX + "px";
            obj.style.top = positionY + "px";
            correctDrops++;
        }
        if(correctDrops==4){
            correctDrops=0;
            document.lastElementChild.lastElementChild.removeChild(app);
            var signDiv = document.createElement("div");
            signDiv.className = "sign-div";
            var sign = document.createElement("h1");
            sign.textContent = "You won!"
            signDiv.appendChild(sign);
            document.lastElementChild.lastElementChild.appendChild(signDiv);
            setTimeout(function() {
                document.lastElementChild.lastElementChild.removeChild(signDiv);
                document.lastElementChild.lastElementChild.appendChild(app);
                correctFlag=false;
                while(!correctFlag){
                    ballsInit();
                }
            
            }, 3000);
        }
}
}
const areasInit = () =>{
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
}
while(!correctFlag){
    ballsInit();
}
areasInit();
