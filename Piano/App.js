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
const playing = (number, audioList, buttonsList) => {
  buttonsList.children[number].style.backgroundColor = "gray";
  buttonsList.children[number].style.color = "gray";
  audioList.children[number].play();
  setTimeout(() => {
    if (buttonsList.children[number].id === "black-button") {
      buttonsList.children[number].style.backgroundColor = "black";
      buttonsList.children[number].style.color = "white";
    } else {
      buttonsList.children[number].style.backgroundColor = "white";
      buttonsList.children[number].style.color = "black";
    }
  }, 100);
}
const octaveInit = (octave, txtOctave, audioList, buttonsList) => {
  //creating buttons
  for (let i = 0; i < 12; i++) {
    octave[i] = document.createElement("button");
    octave[i].innerHTML = txtOctave[i];
    if (txtOctave[i].includes("is")) {
      octave[i].id = "black-button";
    } else {
      octave[i].id = "white-button";
    }
    buttonsList.appendChild(octave[i]);
  }
  // copying c3-audio
  for (let i = 0; i < 12; i++) {
    let tmp = audioList.children[i].cloneNode(true);
    tmp.firstElementChild.src = "./Notes/" + txtOctave[i + 1] + ".mp3";
    audioList.appendChild(tmp);
  }
  //

  //adding listeners to buttons

  buttonsList.children[0].addEventListener('click', () => playing(0, audioList, buttonsList))
  buttonsList.children[1].addEventListener('click', () => playing(1, audioList, buttonsList))
  buttonsList.children[2].addEventListener('click', () => playing(2, audioList, buttonsList))
  buttonsList.children[3].addEventListener('click', () => playing(3, audioList, buttonsList))
  buttonsList.children[4].addEventListener('click', () => playing(4, audioList, buttonsList))
  buttonsList.children[5].addEventListener('click', () => playing(5, audioList, buttonsList))
  buttonsList.children[6].addEventListener('click', () => playing(6, audioList, buttonsList))
  buttonsList.children[7].addEventListener('click', () => playing(7, audioList, buttonsList))
  buttonsList.children[8].addEventListener('click', () => playing(8, audioList, buttonsList))
  buttonsList.children[9].addEventListener('click', () => playing(9, audioList, buttonsList))
  buttonsList.children[10].addEventListener('click', () => playing(10, audioList, buttonsList))
  buttonsList.children[11].addEventListener('click', () => playing(11, audioList, buttonsList));
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
  switch (keyName) {
    case "1": if (options.children[0].firstElementChild.checked) { playing(0, audioList3, buttonsList3) }; break;
    case "2": if (options.children[0].firstElementChild.checked) { playing(1, audioList3, buttonsList3) }; break;
    case "3": if (options.children[0].firstElementChild.checked) { playing(2, audioList3, buttonsList3) }; break;
    case "4": if (options.children[0].firstElementChild.checked) { playing(3, audioList3, buttonsList3) }; break;
    case "5": if (options.children[0].firstElementChild.checked) { playing(4, audioList3, buttonsList3) }; break;
    case "6": if (options.children[0].firstElementChild.checked) { playing(5, audioList3, buttonsList3) }; break;
    case "7": if (options.children[0].firstElementChild.checked) { playing(6, audioList3, buttonsList3) }; break;
    case "8": if (options.children[0].firstElementChild.checked) { playing(7, audioList3, buttonsList3) }; break;
    case "9": if (options.children[0].firstElementChild.checked) { playing(8, audioList3, buttonsList3) }; break;
    case "0": if (options.children[0].firstElementChild.checked) { playing(9, audioList3, buttonsList3) }; break;
    case "-": if (options.children[0].firstElementChild.checked) { playing(10, audioList3, buttonsList3) }; break;
    case "=": if (options.children[0].firstElementChild.checked) { playing(11, audioList3, buttonsList3) }; break;
    case "q": if (options.children[1].firstElementChild.checked) { playing(0, audioList4, buttonsList4) }; break;
    case "w": if (options.children[1].firstElementChild.checked) { playing(1, audioList4, buttonsList4) }; break;
    case "e": if (options.children[1].firstElementChild.checked) { playing(2, audioList4, buttonsList4) }; break;
    case "r": if (options.children[1].firstElementChild.checked) { playing(3, audioList4, buttonsList4) }; break;
    case "t": if (options.children[1].firstElementChild.checked) { playing(4, audioList4, buttonsList4) }; break;
    case "y": if (options.children[1].firstElementChild.checked) { playing(5, audioList4, buttonsList4) }; break;
    case "u": if (options.children[1].firstElementChild.checked) { playing(6, audioList4, buttonsList4) }; break;
    case "i": if (options.children[1].firstElementChild.checked) { playing(7, audioList4, buttonsList4) }; break;
    case "o": if (options.children[1].firstElementChild.checked) { playing(8, audioList4, buttonsList4) }; break;
    case "p": if (options.children[1].firstElementChild.checked) { playing(9, audioList4, buttonsList4) }; break;
    case "[": if (options.children[1].firstElementChild.checked) { playing(10, audioList4, buttonsList4) }; break;
    case "]": if (options.children[1].firstElementChild.checked) { playing(11, audioList4, buttonsList4) }; break;
    case "a": if (options.children[2].firstElementChild.checked) { playing(0, audioList5, buttonsList5) }; break;
    case "s": if (options.children[2].firstElementChild.checked) { playing(1, audioList5, buttonsList5) }; break;
    case "d": if (options.children[2].firstElementChild.checked) { playing(2, audioList5, buttonsList5) }; break;
    case "f": if (options.children[2].firstElementChild.checked) { playing(3, audioList5, buttonsList5) }; break;
    case "g": if (options.children[2].firstElementChild.checked) { playing(4, audioList5, buttonsList5) }; break;
    case "h": if (options.children[2].firstElementChild.checked) { playing(5, audioList5, buttonsList5) }; break;
    case "j": if (options.children[2].firstElementChild.checked) { playing(6, audioList5, buttonsList5) }; break;
    case "k": if (options.children[2].firstElementChild.checked) { playing(7, audioList5, buttonsList5) }; break;
    case "l": if (options.children[2].firstElementChild.checked) { playing(8, audioList5, buttonsList5) }; break;
  }
})