var audioList = document.querySelector(".audio-list");
var buttonsList = document.querySelector(".buttons-list");
var options = document.querySelector(".options");
var c3, cis3, d3, dis3, e3, f3, fis3, g3, gis3, a3, ais3, b3, c4,cis4,d4,dis4,e4,f4,fis4,g4,gis4,a4,ais4,b4,c5, cis5, d5, dis5, e5, f5, fis5, g5, gis5, a5, ais5, b5;
var octave = [c3, cis3, d3, dis3, e3, f3, fis3, g3, gis3, a3, ais3, b3,c4, cis4, d4, dis4, e4, f4, fis4, g4, gis4, a4, ais4, b4,c5, cis5, d5, dis5, e5, f5, fis5, g5, gis5, a5, ais5, b5];
var txtOctave = ["c3", "cis3", "d3", "dis3", "e3", "f3", "fis3", "g3", "gis3", "a3", "ais3", "b3","c4", "cis4", "d4", "dis4", "e4", "f4", "fis4", "g4", "gis4", "a4", "ais4", "b4","c5", "cis5", "d5", "dis5", "e5", "f5", "fis5", "g5", "gis5", "a5", "ais5", "b5"];
const octaveInit = (startButtonIndex) =>{
  //creating buttons
for (var i = startButtonIndex-1; i < startButtonIndex+11; i++) {
  octave[i] = document.createElement("button");
  octave[i].innerHTML = txtOctave[i];
  if(txtOctave[i].includes("is")){
    octave[i].style.backgroundColor='black';
    octave[i].style.color='white';
  }
  buttonsList.appendChild(octave[i]);
}
// copying c3-audio
for (var i = startButtonIndex-1; i < startButtonIndex+11; i++) {
  var tmp = audioList.children[i].cloneNode(true);
  tmp.firstElementChild.src = "C:/Muzyczka/Notes/"+txtOctave[i+1]+".mp3";
  audioList.appendChild(tmp);
}
//
const playing = (number)=>{
  console.log(number);
  audioList.children[number].play();
}
//adding listeners to buttons

  buttonsList.children[startButtonIndex-1].addEventListener('click', () => playing(startButtonIndex-1));
  buttonsList.children[startButtonIndex].addEventListener('click', () => playing(startButtonIndex))
  buttonsList.children[startButtonIndex+1].addEventListener('click', () => playing(startButtonIndex+1))
  buttonsList.children[startButtonIndex+2].addEventListener('click', () => playing(startButtonIndex+2))
  buttonsList.children[startButtonIndex+3].addEventListener('click', () => playing(startButtonIndex+3))
  buttonsList.children[startButtonIndex+4].addEventListener('click', () => playing(startButtonIndex+4))
  buttonsList.children[startButtonIndex+5].addEventListener('click', () => playing(startButtonIndex+5))
  buttonsList.children[startButtonIndex+6].addEventListener('click', () => playing(startButtonIndex+6))
  buttonsList.children[startButtonIndex+7].addEventListener('click', () => playing(startButtonIndex+7))
  buttonsList.children[startButtonIndex+8].addEventListener('click', () => playing(startButtonIndex+8))
  buttonsList.children[startButtonIndex+9].addEventListener('click', () => playing(startButtonIndex+9))
  buttonsList.children[startButtonIndex+10].addEventListener('click', () => playing(startButtonIndex+10))
//
}
options.children[0].addEventListener('click', ()=>{
  octaveInit(1);
})
options.children[1].addEventListener('click', ()=>{
  octaveInit(13);
})
options.children[2].addEventListener('click', ()=>{
  octaveInit(25);
})
//https://gomakethings.com/why-you-shouldnt-attach-event-listeners-in-a-for-loop-with-vanilla-javascript/

//octaveInit(octave4,txtOctave4);