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
let points=0;
let length=2;
let canMove, direction;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
function generateNewPositions(){
    for(let i=0; i<length; i++){
        x[i] = getRandomInt(0,size/scale);
        y[i] = getRandomInt(0,size/scale);
    }
}
function moveLogic(){

}
function paintGameStatus(){
    g.fillStyle = "#ebebeb";
    g.fillRect(0,0, size, size);
    g.fillStyle = "#b5b5b5";
    g.fillRect(x[0]*scale, y[0]*scale, size/scale, size/scale);
    g.fillStyle = "#fc9003";
    g.fillRect(x[1]*scale, y[1]*scale, size/scale, size/scale);
}
function paintsNewPositions(){

    if(direction==='up' && y[1]>0){
        y[1]--;
    }else if(direction==='down' && y[1]<size/scale-1){
        y[1]++;
    }else if(direction==='left' && x[1]>0){
        x[1]--;
    }else if(direction==='right' && x[1]<size/scale-1){
        x[1]++;
    }

    
    paintGameStatus();
    if(x[0]==x[1] && y[0]==y[1]){
        points++;
        direction=null;
        displayInit();
    }
    if(direction==='up' && y[1]==0){
        y[1]=size/scale;
    }else if(direction==='down' && y[1]==size/scale-1){
        y[1]=-1;
    }else if(direction==='left' && x[1]==0){
        x[1]=size/scale;
    }else if(direction==='right' && x[1]==size/scale-1){
        x[1]=-1;
    }
}

function displayInit(){
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
  window.setInterval(paintsNewPositions, 500);