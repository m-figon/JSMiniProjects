const daysNumber = document.querySelector("#days");
const hoursNumber = document.querySelector("#hours");
const minutesNumber = document.querySelector("#minutes");
const secondsNumber = document.querySelector("#seconds");
const app = document.querySelector(".app");
const title = document.querySelector(".title");
const timer = document.querySelector(".timer");


const MILLI_SECOND = 1;
const SECOND = 1000 * MILLI_SECOND;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

var currentDate = new Date();
const birthdayDate = new Date("April 10, 2020 18:17:00");

const displaySurprise = () => {    
    app.removeChild(timer);
    console.log(title.children[0].innerText="Happy Birthday!");
}

const checkAndPrintTime = () => {
    function displayNumber(value, type) {
        (value < 10 && value >= 0) ? type.textContent = "0" + value : type.textContent = value;
    }
    var currentDate = new Date();
    if (birthdayDate.getTime() - currentDate.getTime() >= 0) {
        var days = Math.floor((birthdayDate.getTime() - currentDate.getTime()) / (DAY));
        var hours = Math.floor((birthdayDate.getTime() - currentDate.getTime() - (days * DAY)) / (HOUR));
        var minutes = Math.floor((birthdayDate.getTime() - currentDate.getTime() - (days * DAY) - (hours * HOUR)) / (MINUTE));
        var seconds = Math.floor(((birthdayDate.getTime() - currentDate.getTime()) - (days * DAY) - (hours * HOUR) - (minutes * MINUTE)) / (SECOND));
        
        displayNumber(days, daysNumber);
        displayNumber(hours, hoursNumber);
        displayNumber(minutes, minutesNumber);
        displayNumber(seconds, secondsNumber);
    }else{
        displaySurprise();
        setInterval("javascript function", milliseconds);
    }
}

checkAndPrintTime();
setInterval(checkAndPrintTime, 1000)








