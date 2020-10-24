let board = [[' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],[' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],[' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],[' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],[' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],[' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],[' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],[' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],[' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']];
const SIZE = 8;
const boardInit = () => {
    let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
    for (let i = 1; i < SIZE+1; i++) {
        board[0][i]=letters[i-1];
    }
    for(let i= 1; i< SIZE+1; i++){
        board[i][0]=i.toString();
    }
}
const playersInit = () =>{
    for(let i =1; i<SIZE/2; i++){
        for(let j=2; j<SIZE+1; j++){
            if((j%2==0 && i%2==1) || (j%2==1 && i%2==0)){
                board[i][j]='B';
            }
            else{
                continue
            }
        }
    }
    for(let i =SIZE; i>SIZE/2+1; i--){
        for(let j=1; j<SIZE+1; j++){
            if((j%2==0 && i%2==1) || (j%2==1 && i%2==0)){
                board[i][j]='W';
            }
            else{
                continue
            }
        }
    }
}
const printBoard = () =>{
    for(let i=0; i<SIZE+1; i++){
        for(let j=0; j<SIZE+1; j++){
            process.stdout.write(board[i][j]);
        }
        process.stdout.write("\n");
    }
}
const makeMove = (x,y,player) =>{
    if(player!=='B' && player!=='W'){
        console.log('1');
        return false;
    }
    let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    let xIndex;
    for(let i=0; i<letters.length; i++){
        if(letters[i]===x){
            xIndex=i;
        }
    }
    if(xIndex!==undefined && Number.isInteger(y)){
        let possible = checkIfPossible(y, xIndex+1,player);
        if(possible){
            board[y][xIndex+1]=player;
            console.log('possible');
            printBoard();
            return true;
        }
        else{
            console.log('not possible');
            return false;
        }
    }else{
        return false;
    }
}
const checkIfPossible = (y,x,player) =>{
    if((board[y+1][x+1]==='W' && player==='W') || (board[y+1][x-1]==='W' && player==='W') || (board[y-1][x+1]==='B' && player==='B') || (board[y-1][x-1]==='B' && player==='B')){
        return true
    }
    else{
        return false
    }
}
boardInit();
playersInit();

exports.boardInit = boardInit;
exports.playersInit = playersInit;
exports.printBoard = printBoard;
exports.makeMove = makeMove;
exports.checkIfPossible = checkIfPossible;



