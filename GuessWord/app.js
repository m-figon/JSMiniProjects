const words = ['sandwich', 'fabulous', 'computer'];
let number = Math.floor((Math.random() * 3));
console.log(words[number]);
let letters = [];
let guessingLetters = [];
let word = words[number];
let win=false;
let loss=false;
let wrong=0;
function shuffelWord(word) {
    let shuffledWord = '';
    word = word.split('');
    while (word.length > 0) {
        shuffledWord += word.splice(word.length * Math.random() << 0, 1);
    }
    return shuffledWord;
}
letters = (words[number]).split('');
$(".score div:first-child").text('0');
$(".score div:last-child").text('10');
for (let item of letters) {
    $(".board").append("<h1>_</h1>");
}
for (let item of shuffelWord(words[number] + "abcdefghtyjk").split('')) {
    $(".letters").append("<button class='letter'>" + item + "</button>");
}
$(".letter").on('click', (e) => {
    console.log(e.target.innerText);
    let search=false;
    for (let i = 0; i < letters.length; i++) {
        console.log(letters[i]);
        if (e.target.innerText === letters[i]) {
            search=true;
            console.log(i);
            $(".board h1:eq(" + i + ")").html(e.target.innerText);
            e.target.remove();
            let emptyLetters;
            for (let item of letters) {
                if(!$(".board h1").text().includes('_')){
                    console.log('you won');
                    win=true;
                }
            }
        }
    }
    if(!search){
        wrong++;
        $(".score div:first-child").text(wrong);
        if(wrong>=10){
            loss=true;
        }
    }
    if(win && !loss){
        console.log('win board');
        $(".app div").remove();
        $(".app").append("<h2 id='green'>YOU WON</h2>");
    }
    if(loss && !win){
        console.log('loss board');
        $(".app div").remove();
        $(".app").append("<h2 id='red'>YOU LOSE</h2>");
    }
})
