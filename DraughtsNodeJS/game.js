let dragObject;
let whiteAreas = document.querySelectorAll('.white-part');
let blackAreas = document.querySelectorAll('.black-part');

console.log(whiteAreas[0]);
const dragstartHandler = (e) => {
  e.dataTransfer.setData("content", e.target.className);
  dragObject = e.target;
}

window.addEventListener('DOMContentLoaded', () => {
  const element = document.querySelectorAll("button");
  for (let item of element) {
    item.addEventListener("dragstart", dragstartHandler);
    console.log(item);
  }
  for (let item of blackAreas) {
    item.addEventListener("dragover", dragoverHandler);
    item.addEventListener("drop", (e) => { dropHandler(e, "rgb(56, 56, 56)") });
    item.addEventListener("dragleave", (e) => { dragleaveHandler(e, "rgb(56, 56, 56)") });
    console.log(item);
  }
});
const dragoverHandler = (e) => {
  e.preventDefault();
  if (e.target.children.length === 0 && e.target.className === 'black-part') {
    e.target.style.backgroundColor = "green";
  }
}
const dropHandler = (e, color) => {
  e.preventDefault();
  console.log(e.target.className);
  if (e.target.children.length === 0 && e.target.className === 'black-part') {
    if (e.dataTransfer.getData("content") === 'black-button') {
      dragObject.style.backgroundColor = "black";
      e.target.appendChild(dragObject);
      e.target.style.backgroundColor = color;
    } else if (e.dataTransfer.getData("content") === 'white-button') {
      dragObject.style.backgroundColor = "white";
      e.target.appendChild(dragObject);
      e.target.style.backgroundColor = color;
    }
  }
}
const dragleaveHandler = (e, color) => {
  if(e.target.className==='blac-part'){
    e.target.style.backgroundColor = color;
  }
}