const whiteAreas = document.querySelectorAll('.white-part');
const blackAreas = document.querySelectorAll('.black-part');
const game = document.querySelector('.game');
const boardPart = document.querySelector('.board');
let round=0;
let board = [[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']];
const SIZE = 8;
let prevY, prevX, currentY, currentX, currentTarget, dragObject;
const afterWinFunc = (text) => {
  boardPart.remove();
  let signDiv = document.createElement('div');
  signDiv.className = "game-status";
  let sign = document.createElement('h2');
  sign.innerText = `${text} Draughts Won!`;
  signDiv.appendChild(sign);
  game.appendChild(signDiv);
}
const printBoard = () => {
  console.log(board);
}
const readBoardState = () => {
  const rows = document.querySelectorAll('.row');
  let blackDraughts = false;
  let whiteDraughts = false;
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
            whiteDraughts = true;
          }
          else if (rows[i].children[j].firstElementChild.className === 'black-button') {
            board[i][j] = 'B'
            blackDraughts = true;
          }
        }
      }
    }
  }
  if (!whiteDraughts) {
    afterWinFunc('Black');
  } else if (!blackDraughts) {
    afterWinFunc('White');
  }
}
//console.log(whiteAreas[0]);
const dragstartHandler = (e) => {
  e.dataTransfer.setData("content", e.target.className);
  currentTarget = e.target.className;
  dragObject = e.target;
  const rows = document.querySelectorAll('.row');
  for (let i = 0; i < rows.length; i++) {
    //console.log(rows[i].children);
    for (let j = 0; j < rows[i].children.length; j++) {
      if (rows[i].children[j].firstElementChild) {
        if (rows[i].children[j].firstElementChild.tagName === 'BUTTON') {
          //console.log(rows[i].children[j].firstElementChild.className);
          if (rows[i].children[j].firstElementChild === e.target) {
            prevY = i;
            prevX = j;
            console.log(prevY + " " + prevX);
          }
        }
      }
    }
  }
  printBoard();
}

window.addEventListener('DOMContentLoaded', () => {
  const element = document.querySelectorAll("button");
  for (let item of element) {
    item.addEventListener("dragstart", dragstartHandler);
  }
  for (let item of blackAreas) {
    item.addEventListener("dragover", dragoverHandler);
    item.addEventListener("drop", (e) => { dropHandler(e, "rgb(56, 56, 56)") });
    item.addEventListener("dragleave", (e) => { dragleaveHandler(e, "rgb(56, 56, 56)") });
  }
});
const dragoverHandler = (e) => {
  e.preventDefault();
  //console.log(currentTarget);
  if (e.target.children.length === 0 && e.target.className === 'black-part') {
    const rows = document.querySelectorAll('.row');
    for (let i = 0; i < rows.length; i++) {
      //console.log(rows[i].children);
      for (let j = 0; j < rows[i].children.length; j++) {
        //console.log(rows[i].children[j].firstElementChild.className);
        if (rows[i].children[j] === e.target) {
          currentY = i;
          currentX = j;
          //console.log(currentY + " " + currentX);
          if ((currentY - prevY === 1 && currentX - prevX === 1 && currentTarget === 'white-button' && round%2===1) || (currentY - prevY === 1 && currentX - prevX === -1 && currentTarget === 'white-button' && round%2===1) || (currentY - prevY === 2 && currentX - prevX === 2 && currentTarget === 'white-button' && board[currentY - 1][currentX - 1] === 'B' && round%2===1) || (currentY - prevY === 2 && currentX - prevX === -2 && currentTarget === 'white-button' && board[currentY - 1][currentX + 1] === 'B' && round%2===1) || (prevY - currentY === 1 && prevX - currentX === 1 && currentTarget === 'black-button' && round%2===0) || (prevY - currentY === 1 && prevX - currentX === -1 && currentTarget === 'black-button' && round%2===0) || (prevY - currentY === 2 && prevX - currentX === 2 && currentTarget === 'black-button' && board[prevY - 1][prevX - 1] === 'W' && round%2===0) || (prevY - currentY === 2 && prevX - currentX === -2 && currentTarget === 'black-button' && board[prevY - 1][prevX + 1] === 'W' && round%2===0)) {
            e.target.style.animation = "bgChange 1s infinite";
          }
        }
      }
    }
  }
}
const dropHandler = (e, color) => {
  const correctMove = () => {
    e.target.appendChild(dragObject);
    e.target.style.backgroundColor = color;
    board[prevY][prevX] = ' ';
    round++;
  }
  e.preventDefault();
  e.target.style.animation = "bgChange 0s";
  console.log(round);
  if (e.target.children.length === 0 && e.target.className === 'black-part'){
      console.log('dropped black')
      if(e.dataTransfer.getData("content") === 'black-button' && round%2===0) {
        dragObject.style.backgroundColor = "black";
        const rows = document.querySelectorAll('.row');
        for (let i = 0; i < rows.length; i++) {
          //console.log(rows[i].children);
          for (let j = 0; j < rows[i].children.length; j++) {
            //console.log(rows[i].children[j].firstElementChild.className);
            if (rows[i].children[j] === e.target) {
              currentY = i;
              currentX = j;
              //console.log(currentY + " " + currentX);
              if (prevY - currentY === 1 && prevX - currentX === 1) {
                correctMove();
                readBoardState();
              } else if (prevY - currentY === 1 && prevX - currentX === -1) {
                correctMove();
                readBoardState();
              } else if (prevY - currentY === 2 && prevX - currentX === 2 && board[prevY - 1][prevX - 1] === 'W') {
                correctMove();
                board[prevY - 1][prevX - 1] === ' '
                rows[prevY - 1].children[prevX - 1].removeChild(rows[prevY - 1].children[prevX - 1].firstElementChild)
                readBoardState();
              } else if (prevY - currentY === 2 && prevX - currentX === -2 && board[prevY - 1][prevX + 1] === 'W') {
                correctMove();
                board[prevY - 1][prevX + 1] === ' '
                rows[prevY - 1].children[prevX + 1].removeChild(rows[prevY - 1].children[prevX + 1].firstElementChild)
                readBoardState();
              }
            }
          }
        }
        //console.log(prevY + " " + prevX + "/" + currentY + " " + currentX);
        printBoard();
      } else if (e.dataTransfer.getData("content") === 'white-button' && round%2===1) {
        console.log('dropped white')
        dragObject.style.backgroundColor = "white";
        const rows = document.querySelectorAll('.row');
        for (let i = 0; i < rows.length; i++) {
          //console.log(rows[i].children);
          for (let j = 0; j < rows[i].children.length; j++) {
            //console.log(rows[i].children[j].firstElementChild.className);
            if (rows[i].children[j] === e.target) {
              currentY = i;
              currentX = j;
              //console.log(currentY + " " + currentX);
              if (currentY - prevY === 1 && currentX - prevX === 1) {
                correctMove();
                readBoardState();
              } else if (currentY - prevY === 1 && currentX - prevX === -1) {
                correctMove();
                readBoardState();
              } else if (currentY - prevY === 2 && currentX - prevX === 2 && board && board[currentY - 1][currentX - 1] === 'B') {
                correctMove();
                board[currentY - 1][currentX - 1] === ' ';
                rows[currentY - 1].children[currentX - 1].removeChild(rows[currentY - 1].children[currentX - 1].firstElementChild)
                readBoardState();
              } else if (currentY - prevY === 2 && currentX - prevX === -2 && board && board[currentY - 1][currentX + 1] === 'B') {
                correctMove();
                board[currentY - 1][currentX + 1] === ' ';
                rows[currentY - 1].children[currentX + 1].removeChild(rows[currentY - 1].children[currentX + 1].firstElementChild)
                readBoardState();
              }
            }
          }
        }
        //console.log(prevY + " " + prevX + "/" + currentY + " " + currentX);
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