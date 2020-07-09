const gameArray = [[' ', 'A', 'B', 'C'], ['1', '-', '-', '-'], ['2', '-', '-', '-'], ['3', '-', '-', '-']];
const readline = require('readline');
const xLength = 3;
const yLength = 3;
let round = 0;
let sign = '';
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
    (round % 2 === 0) ? sign = 'X' : sign = "O";
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
        printGame();
        round++;
        newRound()
    });
}
gameInit();
newRound();



