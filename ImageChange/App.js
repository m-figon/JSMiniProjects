const slider = document.querySelector(".slider");
const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const img3 = document.querySelector("#img3");
const img4 = document.querySelector("#img4");

const dot1 = document.querySelector("#dot1");
const dot2 = document.querySelector("#dot2");
const dot3 = document.querySelector("#dot3");
const dot4 = document.querySelector("#dot4");

const dots=[dot1,dot2,dot3,dot4];
const imgs=[img1,img2,img3,img4];

function displayImgs(item, index){
    item.style.display="none";
}
function displayDots(item, index){
    item.style.backgroundColor="#bbb";
}
function showNext(value){
    imgs.forEach(displayImgs);
    value.style.display="block";
}
function addListeners(item, index){
    
    item.addEventListener("click",(e)=>{
        dots.forEach(displayDots);
        e.target.style.backgroundColor="#e6e6e6";
    });
}

dots.forEach(addListeners);
