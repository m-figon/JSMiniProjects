var wordsArray = ['elephant', 'water','lamp','desktop','headphones'];
const word = document.querySelector("#word");
const input = document.querySelector("input");
const img = document.querySelector("img");
const content = document.querySelector(".content");

//init values
var tmpword;
input.style.display="none";
var num=3;
var counterFlag=true;
img.src="p100.png";
content.removeChild(content.lastElementChild);
//
function intervalFunctionality(){
  num=3;
  console.log('5s');
  content.appendChild(img);
  input.style.display="block";
  word.previousElementSibling.textContent="Type a word:"
  var number = Math.floor(Math.random() * 5);
  tmpword=wordsArray[number];
  word.textContent= "'" + tmpword+"'";
}
//set 1sec interval
  setInterval(()=>{
    console.log('1s');
    if(!counterFlag){
      switch (num){
        case 4: img.src="p100.png"; num--; break;
        case 3: img.src="p75.png"; num--; break;
        case 2: img.src="p50.png"; num--; break;
        case 1: img.src="p25.png"; num--; break;
        case 0: img.src="p0.png"; num--; break;
        case -1: img.src="p100.png"; num=4; break;
      }
    }
    if(num>=0 && counterFlag){
      word.previousElementSibling.textContent=num;
      num--;
    }if(num<0 && counterFlag){
      counterFlag=false;
      num=4;
    }
  },1000)
//
var fiveSecTimer = setInterval(intervalFunctionality,5000); //set 5sec interval

window.addEventListener('keypress', function (e) { //entering word
  if (e.key === 'Enter' && input.value===tmpword) {
    num=3;
    word.previousElementSibling.textContent=""
    word.textContent=""
    input.value="";
    input.style.display="none";
    counterFlag=true;
    content.removeChild(content.lastElementChild);
    clearInterval(fiveSecTimer);
    fiveSecTimer = setInterval(intervalFunctionality,5000);
  }
});