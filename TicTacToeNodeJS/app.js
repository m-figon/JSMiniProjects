const gameArray = [[' ', 'A', 'B', 'C'], ['1', '-', '-', '-'], ['2', '-', '-', '-'], ['3', '-', '-', '-']];
const readline = require('readline');
const http = require('http');
const fs = require('fs');
const { isRegExp } = require('util');
const xLength = 3;
const yLength = 3;
let round = 1;
let sign = '';
let game = true;
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const gameInit = () => {
    for (let i = 1; i <= yLength; i++) {
        for (let j = 1; j <= xLength; j++) {
            gameArray[i][j] = '-';
        }
    }
}
const printSign = () => {
    (round % 2 === 0) ? sign = 'O' : sign = "X";
    return (`${sign} player turn. Write coordinates (eg. A1) and press enter to confirm.\n`);
}
const printGame = () => {
    for (let i = 0; i <= yLength; i++) {
        for (let j = 0; j <= xLength; j++) {
            process.stdout.write(gameArray[i][j]);
        }
        console.log('\n');
    }
}
const checkIfWin = () =>{
    for (let i = 1; i <= yLength; i++) {
        
        for (let j = 1; j <= xLength; j++) {
            if(j+2<=xLength){
                if(gameArray[i][j]===sign && gameArray[i][j+1]===sign && gameArray[i][j+2]===sign){
                    game=false;
                }
            }
            if(j+2<=xLength && i+2<=yLength){
                if(gameArray[i][j]===sign && gameArray[i+1][j+1]===sign && gameArray[i+2][j+2]===sign){
                    game=false;
                }
                if(gameArray[i][j+2]===sign && gameArray[i+1][j+1]===sign && gameArray[i+2][j]===sign){
                    game=false;
                }
            }
            if(i+2<=yLength){
                if(gameArray[i][j]===sign && gameArray[i+1][j]===sign && gameArray[i+2][j]===sign){
                    game=false;
                }
            }
        }
    }
}
const newRound = () => {
    rl.question(printSign(), (coordinates) => {
        let x;
        switch (coordinates.substr(0, 1)) {
            case 'A': x = 1; break;
            case 'B': x = 2; break;
            case 'C': x = 3; break;
            default: console.log('error'); newRound();
        }
        let y = parseInt(coordinates.substr(1, 1));
        gameArray[y][x] = sign;
        let date = new Date();
        checkIfWin();
        printGame();
        if(round===1){
            fs.appendFile('TicTacToeLog.txt', "New Game\n" , function (err) {
                if (err) return console.log(err);
            });    
        }
        if(game){
            fs.appendFile('TicTacToeLog.txt', String(date)+"/sign:"+sign+"/noWinner/"+"round:"+round+"\n" , function (err) {
                if (err) return console.log(err);
            });
            round++;
        }else{
            fs.appendFile('TicTacToeLog.txt', String(date)+"/"+sign+"Won/"+"round:"+round+"\n" , function (err) {
                if (err) return console.log(err);
            });
            console.log(sign+" Won in "+round+" round");
            fs.appendFile('TicTacToeLog.txt', "End of Game\n" , function (err) {
                if (err) return console.log(err);
            });  
        }
        if(game){
            newRound();
        }
    });
}
gameInit();
newRound();
/*
let server= http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Test');
})
server.listen(3000,'127.0.0.01');
*/


