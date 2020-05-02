let audioList3 = document.querySelector(".audio-list-3");
let audioList4 = document.querySelector(".audio-list-4");
let audioList5 = document.querySelector(".audio-list-5");
let buttonsList3 = document.querySelector(".buttons-list-3");
let buttonsList4 = document.querySelector(".buttons-list-4");
let buttonsList5 = document.querySelector(".buttons-list-5");
let options = document.querySelector(".options");
let c3, cis3, d3, dis3, e3, f3, fis3, g3, gis3, a3, ais3, b3, c4, cis4, d4, dis4, e4, f4, fis4, g4, gis4, a4, ais4, b4, c5, cis5, d5, dis5, e5, f5, fis5, g5, gis5, a5, ais5, b5;
let octave3 = [c3, cis3, d3, dis3, e3, f3, fis3, g3, gis3, a3, ais3, b3];
let octave4 = [c4, cis4, d4, dis4, e4, f4, fis4, g4, gis4, a4, ais4, b4];
let octave5 = [c5, cis5, d5, dis5, e5, f5, fis5, g5, gis5, a5, ais5, b5];
let txtOctave3 = ["c3", "cis3", "d3", "dis3", "e3", "f3", "fis3", "g3", "gis3", "a3", "ais3", "b3"];
let txtOctave4 = ["c4", "cis4", "d4", "dis4", "e4", "f4", "fis4", "g4", "gis4", "a4", "ais4", "b4"];
let txtOctave5 = ["c5", "cis5", "d5", "dis5", "e5", "f5", "fis5", "g5", "gis5", "a5", "ais5", "b5"];
const playing = (number,audioList) => {
  audioList.children[number].play();
}
const octaveInit = (octave, txtOctave, audioList, buttonsList) => {
  //creating buttons
  for (let i = 0; i < 12; i++) {
    octave[i] = document.createElement("button");
    octave[i].innerHTML = txtOctave[i];
    if (txtOctave[i].includes("is")) {
      octave[i].id="black-button";
    }else{
      octave[i].id="white-button";
      
    }
    buttonsList.appendChild(octave[i]);
  }
  // copying c3-audio
  for (let i = 0; i < 12; i++) {
    let tmp = audioList.children[i].cloneNode(true);
    tmp.firstElementChild.src = "C:/Muzyczka/Notes/" + txtOctave[i + 1] + ".mp3";
    audioList.appendChild(tmp);
  }
  //
  
  //adding listeners to buttons

  buttonsList.children[0].addEventListener('click', () => playing(0,audioList))
  buttonsList.children[1].addEventListener('click', () => playing(1,audioList))
  buttonsList.children[2].addEventListener('click', () => playing(2,audioList))
  buttonsList.children[3].addEventListener('click', () => playing(3,audioList))
  buttonsList.children[4].addEventListener('click', () => playing(4,audioList))
  buttonsList.children[5].addEventListener('click', () => playing(5,audioList))
  buttonsList.children[6].addEventListener('click', () => playing(6,audioList))
  buttonsList.children[7].addEventListener('click', () => playing(7,audioList))
  buttonsList.children[8].addEventListener('click', () => playing(8,audioList))
  buttonsList.children[9].addEventListener('click', () => playing(9,audioList))
  buttonsList.children[10].addEventListener('click', () => playing(10,audioList))
  buttonsList.children[11].addEventListener('click', () => playing(11,audioList));
  //
}
options.children[0].firstElementChild.addEventListener('click', () => {
  if (options.children[0].firstElementChild.checked) {
    octaveInit(octave3, txtOctave3, audioList3, buttonsList3);
  } else {
    for (let i = 0; i < 12; i++) {
      buttonsList3.removeChild(octave3[i]);
    }
  }
})
options.children[1].firstElementChild.addEventListener('click', () => {
  if (options.children[1].firstElementChild.checked) {
    octaveInit(octave4, txtOctave4, audioList4, buttonsList4);
  } else {
    for (let i = 0; i < 12; i++) {
      buttonsList4.removeChild(octave4[i]);
    }
  }
})
options.children[2].firstElementChild.addEventListener('click', () => {
  if (options.children[2].firstElementChild.checked) {
    octaveInit(octave5, txtOctave5, audioList5, buttonsList5);
  } else {
    for (let i = 0; i < 12; i++) {
      buttonsList5.removeChild(octave5[i]);
    }
  }
})
document.addEventListener('keydown', (event) => {
  const keyName = event.key;
  switch(keyName){
    case "1": playing(0,audioList3); break;
    case "2": playing(1,audioList3); break;
    case "3": playing(2,audioList3); break;
    case "4": playing(3,audioList3); break;
    case "5": playing(4,audioList3); break;
    case "6": playing(5,audioList3); break;
    case "7": playing(6,audioList3); break;
    case "8": playing(7,audioList3); break;
    case "9": playing(8,audioList3); break;
    case "0": playing(9,audioList3); break;
    case "-": playing(10,audioList3); break;
    case "=": playing(11,audioList3); break;
    case "q": playing(0,audioList4); break;
    case "w": playing(1,audioList4); break;
    case "e": playing(2,audioList4); break;
    case "r": playing(3,audioList4); break;
    case "t": playing(4,audioList4); break;
    case "y": playing(5,audioList4); break;
    case "u": playing(6,audioList4); break;
    case "i": playing(7,audioList4); break;
    case "o": playing(8,audioList4); break;
    case "p": playing(9,audioList4); break;
    case "[": playing(10,audioList4); break;
    case "]": playing(11,audioList4); break;
    case "a": playing(0,audioList5); break;
    case "s": playing(1,audioList5); break;
    case "d": playing(2,audioList5); break;
    case "f": playing(3,audioList5); break;
    case "g": playing(4,audioList5); break;
    case "h": playing(5,audioList5); break;
    case "j": playing(6,audioList5); break;
    case "k": playing(7,audioList5); break;
    case "l": playing(8,audioList5); break;
  }
})