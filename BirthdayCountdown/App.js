const daysNumber = document.querySelector("#days");
const hoursNumber = document.querySelector("#hours");
const minutesNumber = document.querySelector("#minutes");
const secondsNumber = document.querySelector("#seconds");
const app = document.querySelector(".app");
const title = document.querySelector(".title");
const timer = document.querySelector(".timer");
const units = document.querySelectorAll(".unit");


const MILLI_SECOND = 1;
const SECOND = 1000 * MILLI_SECOND;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

var currentDate = new Date();
const birthdayDate = new Date("April 10, 2020 20:43:40");

var days,hours,minutes,seconds;
var tmpDays, tmpHours, tmpMinutes, tmpSeconds;

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
        days = Math.floor((birthdayDate.getTime() - currentDate.getTime()) / (DAY));
        hours = Math.floor((birthdayDate.getTime() - currentDate.getTime() - (days * DAY)) / (HOUR));
        minutes = Math.floor((birthdayDate.getTime() - currentDate.getTime() - (days * DAY) - (hours * HOUR)) / (MINUTE));
        seconds = Math.floor(((birthdayDate.getTime() - currentDate.getTime()) - (days * DAY) - (hours * HOUR) - (minutes * MINUTE)) / (SECOND));
        
        if(tmpMinutes!==minutes){
            console.log("minute change!");
            minutesNumber.style.animation = "mymove 0.5s steps(50)";
            for(const element of units){
                timer.removeChild(element);
            }
            for(const element of units){
                timer.appendChild(element);
            }
        }
        tmpDays = days;
        tmpHours = hours;
        tmpMinutes = minutes;
        tmpSeconds = seconds;
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








