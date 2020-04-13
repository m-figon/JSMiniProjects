var wordsArray = ['elephant', 'water','lamp','desktop','headphones'];
const word = document.querySelector("#word");
const input = document.querySelector("input");

var tmpword;
input.style.display="none";
countdownFlag=true;
var num=3;

  setInterval(()=>{
    if(num<0){
      input.style.display="block";
      countdownFlag=true;
      clearInterval(setInterval("javascript function", milliseconds));
    }
    word.previousElementSibling.textContent=num;
    num--;
  },1000)


  

setInterval(()=>{
  if(!countdownFlag){
    clearInterval(setInterval("javascript function", milliseconds));
  }
  word.previousElementSibling.textContent="Type a word:"
  var number = Math.floor(Math.random() * 5);
  tmpword=wordsArray[number];
  word.textContent= "'" + tmpword+"'";
},5000)

window.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    if(input.value===tmpword && countdownFlag){
      num=3;
      word.previousElementSibling.textContent=""
      word.textContent=""
      input.value="";
      input.style.display="none";
      countdownFlag=false;
      
    }
  }
});