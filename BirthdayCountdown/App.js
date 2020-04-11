const daysNumber = document.querySelector("#days");
const hoursNumber = document.querySelector("#hours");
const minutesNumber = document.querySelector("#minutes");
const secondsNumber = document.querySelector("#seconds");
const app = document.querySelector(".app");
const title = document.querySelector(".title");
const timer = document.querySelector(".timer");
const unitDay = document.querySelector("#day");
const unitHour = document.querySelector("#hour");
const unitMinute = document.querySelector("#minute");
const unitSecond = document.querySelector("#second");
const button = document.querySelector("button");
const input = document.querySelector("input");

const MILLI_SECOND = 1;
const SECOND = 1000 * MILLI_SECOND;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

var currentDate = new Date();
var birthdayDate = new Date();
var days, hours, minutes, seconds;
var tmpDays, tmpHours, tmpMinutes, tmpSeconds, started;

const displaySurprise = () => {
    app.removeChild(timer);
    title.children[0].innerText = "Happy Birthday!";
    var image = document.createElement("img");
    image.src = "http://www.pngall.com/wp-content/uploads/2016/07/Birthday-Present-PNG-Pic.png"
    title.appendChild(image);
}
function makeAnimation(condition1, condition2, value1, value2) {
    if (condition1 !== condition2) {
        value1.style.animation = "mymove 0.5s steps(50)";
        value2.removeChild(value1);
        value2.appendChild(value1);
    }
}
const checkAndPrintTime = () => {
    function displayNumber(value, type) {
        (value < 10 && value >= 0) ? type.textContent = "0" + value : type.textContent = value;
    }
    var currentDate = new Date();
    if (birthdayDate.getTime() - currentDate.getTime() >= 0) {
        if (started) {
            days = Math.floor((birthdayDate.getTime() - currentDate.getTime()) / (DAY));
            hours = Math.floor((birthdayDate.getTime() - currentDate.getTime() - (days * DAY)) / (HOUR));
            minutes = Math.floor((birthdayDate.getTime() - currentDate.getTime() - (days * DAY) - (hours * HOUR)) / (MINUTE));
            seconds = Math.floor(((birthdayDate.getTime() - currentDate.getTime()) - (days * DAY) - (hours * HOUR) - (minutes * MINUTE)) / (SECOND));

            makeAnimation(tmpMinutes, minutes, unitMinute, minutesNumber);
            makeAnimation(tmpHours, hours, unitHour, hoursNumber);
            makeAnimation(tmpDays, days, unitDay, daysNumber);

            tmpDays = days;
            tmpHours = hours;
            tmpMinutes = minutes;
            tmpSeconds = seconds;

            displayNumber(days, unitDay);
            displayNumber(hours, unitHour);
            displayNumber(minutes, unitMinute);
            displayNumber(seconds, unitSecond);
        }

    } else {
        if (started) {
            displaySurprise();
            setInterval("javascript function", milliseconds);
        }

    }
}
app.removeChild(timer);
title.children[0].innerText = "Please enter date e.g.'April 29, 2020 00:00:00'";
button.addEventListener("click", () => {
    birthdayDate = new Date(input.value);
    title.children[0].innerText = "Birthday Timer";
    app.appendChild(timer);
    input.style.display = "none";
    button.style.display = "none";
    started = true;
    unitSecond.style.animation = "mymove 0.5s steps(50)";
    checkAndPrintTime();
})

setInterval(checkAndPrintTime, 1000)








