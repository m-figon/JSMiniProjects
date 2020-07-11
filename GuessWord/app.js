const words = ['apple', 'sandwich', 'bottle', 'lattern', 'bookshelf', 'milkshake', 'fabulous', 'computer'];
let number = Math.floor((Math.random() * 8));
console.log(words[number]);
let letters = [];
let guessingLetters = [];
let word = words[number]
function shuffelWord(word) {
    let shuffledWord = '';
    word = word.split('');
    while (word.length > 0) {
        shuffledWord += word.splice(word.length * Math.random() << 0, 1);
    }
    return shuffledWord;
}
letters=shuffelWord(words[number]).split('');
$(".score div:first-child").text('0');
$(".score div:last-child").text('10');
for(let item of letters){
    $(".board").append("<h1>_</h1>");
}
for(let item of shuffelWord(words[number]+"abcdefghtyjk").split('')){
    $(".letters").append("<div class='letter'></div>");
    $(".letter:last-child").append("<h1>"+item+"</h1>");
}
//now clicking deletes div letter and changes _ to this letter
//if wrong 0//10 increases
//if won show winning display
//if loss show loss display