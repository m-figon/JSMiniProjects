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
let octave3Flag = false;
let octave4Flag = false;
let octave5Flag = false;
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
  const playing = (number) => {
    audioList.children[number].play();
  }
  //adding listeners to buttons

  buttonsList.children[0].addEventListener('click', () => playing(0))
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
  buttonsList.children[11].addEventListener('click', () => playing(11));
  //
}
options.children[0].addEventListener('click', () => {
  if (!octave3Flag) {
    octaveInit(octave3, txtOctave3, audioList3, buttonsList3);
    octave3Flag = true;
  } else {
    for (let i = 0; i < 12; i++) {
      buttonsList3.removeChild(octave3[i]);
    }
    octave3Flag = false;
  }
})
options.children[1].addEventListener('click', () => {
  if (!octave4Flag) {
    octaveInit(octave4, txtOctave4, audioList4, buttonsList4);
    octave4Flag = true;
  } else {
    for (let i = 0; i < 12; i++) {
      buttonsList4.removeChild(octave4[i]);
    }
    octave4Flag = false;
  }
})
options.children[2].addEventListener('click', () => {
  if (!octave5Flag) {
    octaveInit(octave5, txtOctave5, audioList5, buttonsList5);
    octave5Flag = true;
  } else {
    for (let i = 0; i < 12; i++) {
      buttonsList5.removeChild(octave5[i]);
    }
    octave5Flag = false;
  }
})
