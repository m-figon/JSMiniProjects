let dragObject;
let whiteAreas = document.querySelectorAll('.white-part');
let blackAreas = document.querySelectorAll('.black-part');

console.log(whiteAreas[0]);
const dragstartHandler = (e) => {
    e.dataTransfer.setData("text/plain", e.target);
    dragObject = e.target;
  }

  window.addEventListener('DOMContentLoaded', () => {
    const element = document.querySelectorAll("button");
    for(let item of element){
        item.addEventListener("dragstart", dragstartHandler);
        console.log(item);
    }
    for(let item of whiteAreas){
        item.addEventListener("dragover", dragoverHandler);
        item.addEventListener("drop", (e) => {dropHandler(e,"rgb(243, 242, 242)")});
        item.addEventListener("dragleave", (e) => {dragleaveHandler(e,"rgb(243, 242, 242)")});
        console.log(item);
    }
    for(let item of blackAreas){
        item.addEventListener("dragover", dragoverHandler);
        item.addEventListener("drop", (e) => {dropHandler(e,"rgb(56, 56, 56)")});
        item.addEventListener("dragleave", (e) => {dragleaveHandler(e,"rgb(56, 56, 56)")});
        console.log(item);
    }
  });
  const dragoverHandler = (e) => {
    e.preventDefault();
    e.target.style.backgroundColor="green";
   }
   const dropHandler = (e, color) => {
    e.preventDefault();
    e.target.style.backgroundColor=color;
    e.target.appendChild(dragObject);
   }
   const dragleaveHandler = (e,color) => {
    e.target.style.backgroundColor=color;
   }