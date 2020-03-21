const canvas = document.querySelector("#myCanvas");
const startBtn = document.querySelector("#start-btn");
const pointsBtn = document.querySelector("#points-btn");

const size=320;
const scale=20;
canvas.width=size;
canvas.height=size;

let g = canvas.getContext("2d");
let x = new Array();
let y = new Array();
x[0]=0;
let length=2;
let canMove, direction, points;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
function generateNewPositions(){//get random value of blocks with array numbers 0 and 1 and make other blocks position equal to block 1
    for(let i=0; i<=1; i++){
        x[i] = getRandomInt(0,size/scale);
        y[i] = getRandomInt(0,size/scale);
    }
    for(let i=2; i<=points+1; i++){
        x[i]=x[1];
        y[i]=y[1];
    }
}
function moveLogic(){
    for(let i=points+2; i>=2; i--){ //change positions of previous blocks
        x[i]=x[i-1];
        y[i]=y[i-1];
    }
    if(direction==='up' && y[1]>=0){//chaning position of main block
        y[1]--;
    }else if(direction==='down' && y[1]<=size/scale-1){
        y[1]++;
    }else if(direction==='left' && x[1]>=0){
        x[1]--;
    }else if(direction==='right' && x[1]<=size/scale-1){
        x[1]++;
    }
    
    if(direction==='up' && y[1]<0){//teleporting main block on the other side of the board
        y[1]=size/scale;
    }else if(direction==='down' && y[1]>size/scale-1){
        y[1]=-1;
    }else if(direction==='left' && x[1]<0){
        x[1]=size/scale;
    }else if(direction==='right' && x[1]>size/scale-1){
        x[1]=-1;
    }
}
function checkIfWin(){//checks if position of block 1 is equals to position of block 0
    if(x[0]==x[1] && y[0]==y[1]){
        points++;
        newRound();
    }
}
function paintGameStatus(){//reset board, paint treasure block and paint in loop other blocks which depends of points number
    g.fillStyle = "#ebebeb";
    g.fillRect(0,0, size, size);
    g.fillStyle = "#b5b5b5";
    g.fillRect(x[0]*scale, y[0]*scale, size/scale, size/scale);
    for(let i=1; i<=points+1; i++){
        g.fillStyle = "#fc9003";
        g.fillRect(x[i]*scale, y[i]*scale, size/scale, size/scale);
    }
}
function createNewPositions(){//this function is executed by timer
    moveLogic();
    checkIfWin();
    paintGameStatus();
}
function displayInit(){
    points=0;
    newRound();
}
function newRound(){
    direction=null;
    pointsBtn.textContent="Points:"
    pointsBtn.textContent+=points;
    generateNewPositions();
}

startBtn.addEventListener("click", displayInit);

document.addEventListener('keyup', (e) => {
    
        if(e.code === "ArrowUp"){
            direction="up"
        }else if(e.code === "ArrowDown"){
            direction="down"
        }else if(e.code === "ArrowLeft"){
            direction="left"
        }else if(e.code === "ArrowRight"){
            direction="right"
        }
        
  });
  window.setInterval(createNewPositions, 300);