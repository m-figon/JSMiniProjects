var audioList = document.querySelector(".audio-list");
var buttonsList = document.querySelector(".buttons-list");
var c3, cis3, d3, dis3, e3, f3, fis3, g3, gis3, a3, ais3, b3, c4;
var octave3 = [c3, cis3, d3, dis3, e3, f3, fis3, g3, gis3, a3, ais3, b3, c4];
var txtOctave3 = ["c3", "cis3", "d3", "dis3", "e3", "f3", "fis3", "g3", "gis3", "a3", "ais3", "b3", "c4"];

//creating buttons
for (var i = 0; i < octave3.length; i++) {
  octave3[i] = document.createElement("button");
  octave3[i].innerHTML = txtOctave3[i];
  buttonsList.appendChild(octave3[i]);
}
// copying c3-audio
for (var i = 0; i < octave3.length-1; i++) {
  var tmp = audioList.children[i].cloneNode(true);
  tmp.firstElementChild.src = "C:/Muzyczka/Notes/"+txtOctave3[i+1]+".mp3";
  audioList.appendChild(tmp);
}
//
const playing = (number)=>{
  console.log(number);
  audioList.children[number].play();
}
//adding listeners to buttons

  buttonsList.children[0].addEventListener('click', () => playing(0));
  buttonsList.children[1].addEventListener('click', () => playing(1))
  buttonsList.children[2].addEventListener('click', () => playing(2))
  buttonsList.children[3].addEventListener('click', () => playing(3))
  buttonsList.children[4].addEventListener('click', () => playing(4))
  buttonsList.children[5].addEventListener('click', () => playing(5))
  buttonsList.children[6].addEventListener('click', () => playing(6))
  buttonsList.children[7].addEventListener('click', () => playing(7))
  buttonsList.children[8].addEventListener('click', () => playing(8))
  buttonsList.children[9].addEventListener('click', () => playing(9))
  buttonsList.children[10].addEventListener('click', () => playing(10))
  buttonsList.children[11].addEventListener('click', () => playing(11))
  buttonsList.children[12].addEventListener('click', () => playing(12))

//
//https://gomakethings.com/why-you-shouldnt-attach-event-listeners-in-a-for-loop-with-vanilla-javascript/
