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
    console.log(board);

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
        return false;
    }
    let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    let xIndex;
    for(let i=0; i<letters.length; i++){
        if(letters[i]===x){
            xIndex=i;
        }
    }
    if(xIndex && Number.isInteger(y)){
        board[y][xIndex+1]=player;
        printBoard();
        return true;
    }else{
        return false;
    }
}
boardInit();
//playersInit();
printBoard();
console.log(makeMove('C',5,'B'));

