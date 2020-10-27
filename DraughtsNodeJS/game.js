let dragObject;
let whiteAreas = document.querySelectorAll('.white-part');
let blackAreas = document.querySelectorAll('.black-part');
let board = [[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']];
const SIZE = 8;
let prevY;
let prevX;
let currentY;
let currentX;
const printBoard = () => {
  console.log(board);
}
const readBoardState = () => {
  let rows = document.querySelectorAll('.row');
  for (let i = 0; i < rows.length; i++) {
    //console.log(rows[i].children);
    for (let j = 0; j < rows[i].children.length; j++) {
      if (rows[i].children[j].firstElementChild) {
        if (rows[i].children[j].firstElementChild.tagName === 'H1') {
          //console.log(rows[i].children[j].firstElementChild.innerHTML);
          board[i][j] = rows[i].children[j].firstElementChild.innerHTML;
        }
        else if (rows[i].children[j].firstElementChild.tagName === 'BUTTON') {
          //console.log(rows[i].children[j].firstElementChild.className);
          if (rows[i].children[j].firstElementChild.className === 'white-button') {
            board[i][j] = 'W'
          }
          else if (rows[i].children[j].firstElementChild.className === 'black-button') {
            board[i][j] = 'B'
          }
        }
      } else {
        //console.log(rows[i].children[j].firstElementChild)
      }
    }
  }
}
//console.log(whiteAreas[0]);
const dragstartHandler = (e) => {
  e.dataTransfer.setData("content", e.target.className);
  dragObject = e.target;
  let rows = document.querySelectorAll('.row');
  for (let i = 0; i < rows.length; i++) {
    //console.log(rows[i].children);
    for (let j = 0; j < rows[i].children.length; j++) {
      if (rows[i].children[j].firstElementChild) {
        if (rows[i].children[j].firstElementChild.tagName === 'BUTTON') {
          //console.log(rows[i].children[j].firstElementChild.className);
          if (rows[i].children[j].firstElementChild === e.target) {
            prevY = i;
            prevX = j;
          }
        }
      } else {
        //console.log(rows[i].children[j].firstElementChild)
      }
    }
  }
  printBoard();
}

window.addEventListener('DOMContentLoaded', () => {
  const element = document.querySelectorAll("button");
  for (let item of element) {
    item.addEventListener("dragstart", dragstartHandler);
    //console.log(item);
  }
  for (let item of blackAreas) {
    item.addEventListener("dragover", dragoverHandler);
    item.addEventListener("drop", (e) => { dropHandler(e, "rgb(56, 56, 56)") });
    item.addEventListener("dragleave", (e) => { dragleaveHandler(e, "rgb(56, 56, 56)") });
    //console.log(item);
  }
});
const dragoverHandler = (e) => {
  e.preventDefault();
  if (e.target.children.length === 0 && e.target.className === 'black-part') {
    e.target.style.animation = "bgChange 1s infinite";
  }
}
const dropHandler = (e, color) => {
  e.preventDefault();
  e.target.style.animation = "bgChange 0s";
  if (e.target.children.length === 0 && e.target.className === 'black-part') {
    if (e.dataTransfer.getData("content") === 'black-button') {
      dragObject.style.backgroundColor = "black";
      e.target.appendChild(dragObject);
      console.log(e.target.firstElementChild);
      e.target.style.backgroundColor = color;
      board[prevY][prevX] = ' ';
      let rows = document.querySelectorAll('.row');
      readBoardState();
      for (let i = 0; i < rows.length; i++) {
        //console.log(rows[i].children);
        for (let j = 0; j < rows[i].children.length; j++) {
          if (rows[i].children[j].firstElementChild) {
            if (rows[i].children[j].firstElementChild.tagName === 'BUTTON') {
              //console.log(rows[i].children[j].firstElementChild.className);
              if (rows[i].children[j].firstElementChild === e.target.firstElementChild) {
                currentY = i;
                currentX = j;
                if(currentY-prevY===2 && currentX-prevX===2){
                  console.log((currentY-1)+" "+(currentX-1));
                  board[currentY-1][currentX-1]=' ';
                  rows[currentY-1].children[currentX-1].removeChild(rows[currentY-1].children[currentX-1].firstElementChild)
                }else if(prevY-currentY===2 && prevX-currentX===2){
                  console.log((prevY-1)+" "+(prevX-1));
                  board[prevY-1][prevX-1]=' ';
                  rows[prevY-1].children[prevX-1].removeChild(rows[prevY-1].children[prevX-1].firstElementChild)
                }
              }
            }
          } else {
            //console.log(rows[i].children[j].firstElementChild)
          }
        }
      }
      console.log(prevY+" "+prevX+"/"+currentY+" "+currentX);
      printBoard();
    } else if (e.dataTransfer.getData("content") === 'white-button') {
      dragObject.style.backgroundColor = "white";
      e.target.appendChild(dragObject);
      console.log(e.target.firstElementChild);
      e.target.style.backgroundColor = color;
      board[prevY][prevX] = ' ';
      let rows = document.querySelectorAll('.row');
      readBoardState();
      for (let i = 0; i < rows.length; i++) {
        //console.log(rows[i].children);
        for (let j = 0; j < rows[i].children.length; j++) {
          if (rows[i].children[j].firstElementChild) {
            if (rows[i].children[j].firstElementChild.tagName === 'BUTTON') {
              //console.log(rows[i].children[j].firstElementChild.className);
              if (rows[i].children[j].firstElementChild === e.target.firstElementChild) {
                currentY = i;
                currentX = j;
                if(currentY-prevY===2 && currentX-prevX===2){
                  console.log((currentY-1)+" "+(currentX-1));
                  board[currentY-1][currentX-1]=' ';
                  rows[currentY-1].children[currentX-1].removeChild(rows[currentY-1].children[currentX-1].firstElementChild)
                }else if(prevY-currentY===2 && prevX-currentX===2){
                  console.log((prevY-1)+" "+(prevX-1));
                  board[prevY-1][prevX-1]=' ';
                  rows[prevY-1].children[prevX-1].removeChild(rows[prevY-1].children[prevX-1].firstElementChild)
                }
              }
            }
          } else {
            //console.log(rows[i].children[j].firstElementChild)
          }
        }
      }
      console.log(prevY+" "+prevX+"/"+currentY+" "+currentX);
      printBoard();
    }
  }
}
const dragleaveHandler = (e, color) => {
  if (e.target.className === 'black-part') {
    e.target.style.animation = "bgChange 0s";
  }
}
readBoardState();
printBoard();