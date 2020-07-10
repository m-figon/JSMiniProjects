const gameArray = [[' ', 'A', 'B', 'C'], ['1', '-', '-', '-'], ['2', '-', '-', '-'], ['3', '-', '-', '-']];
const readline = require('readline');
const { isRegExp } = require('util');
const file = require('./fileOperations.js');
const server = require('./server.js');

const xLength = 3;
const yLength = 3;
let round = 1;
let sign = '';
let winner;
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
const checkIfWin = (player1,player2) => {
    for (let i = 1; i <= yLength; i++) {
        for (let j = 1; j <= xLength; j++) {
            if (j + 2 <= xLength) {
                if (gameArray[i][j] === sign && gameArray[i][j + 1] === sign && gameArray[i][j + 2] === sign) {
                    if(round%2===0){
                        winner=player2;
                    }else{
                        winner=player1
                    }
                    game = false;
                }
            }
            if (j + 2 <= xLength && i + 2 <= yLength) {
                if (gameArray[i][j] === sign && gameArray[i + 1][j + 1] === sign && gameArray[i + 2][j + 2] === sign) {
                    if(round%2===0){
                        winner=player2;
                    }else{
                        winner=player1
                    }
                    game = false;
                }
                if (gameArray[i][j + 2] === sign && gameArray[i + 1][j + 1] === sign && gameArray[i + 2][j] === sign) {
                    if(round%2===0){
                        winner=player2;
                    }else{
                        winner=player1
                    }
                    game = false;
                }
            }
            if (i + 2 <= yLength) {
                if (gameArray[i][j] === sign && gameArray[i + 1][j] === sign && gameArray[i + 2][j] === sign) {
                    if(round%2===0){
                        winner=player2;
                    }else{
                        winner=player1
                    }
                    game = false;
                }
            }
        }
    }
}
const newRound = (player1,player2) => {
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
        checkIfWin(player1,player2);
        printGame();
        if (round === 1) {
            file.append('TicTacToeLog.txt', "New Game\n");
        }
        if (game) {
            file.append('TicTacToeLog.txt', String(date) + "/sign:" + sign + "/noWinner/player1:"+player1 +"/player2:"+player2 +"/round:" + round + "\n");
            round++;
        } else {
            file.append('TicTacToeLog.txt', String(date) + "/" + sign + "Won("+winner+")/player1:"+player1 +"/player2:"+player2 + "/round:" + round + "\n");
                console.log(sign + " Won ("+winner+") in " + round + " round");
                file.append('TicTacToeLog.txt', "End of Game\n");
        }
        if (game) {
            newRound(player1,player2);
        } else {
            server.serverRun();
        }
    });
}
const start = () => {
    rl.question('Enter name of player 1\n', (player1) => {
        rl.question('Enter name of player 2\n', (player2) => {
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
            checkIfWin(player1,player2);
            printGame();
            if (round === 1) {
                file.append('TicTacToeLog.txt', "New Game\n");
            }
            if (game) {
                file.append('TicTacToeLog.txt', String(date) + "/sign:" + sign + "/noWinner/player1:"+player1 +"/player2:"+player2 +"/round:" + round + "\n");
                round++;
            } else {
                file.append('TicTacToeLog.txt', String(date) + "/" + sign + "Won("+winner+")/player1:"+player1 +"/player2:"+player2 + "/round:" + round + "\n");
                console.log(sign + " Won ("+winner+") in " + round + " round");
                file.append('TicTacToeLog.txt', "End of Game\n");
            }
            if (game) {
                newRound(player1,player2);
            } else {
                server.serverRun();
            }
        });
    });
});
}

gameInit();
start();

