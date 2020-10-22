const daysNumber = document.querySelector("#days");
const hoursNumber = document.querySelector("#hours");
const minutesNumber = document.querySelector("#minutes");
const secondsNumber = document.querySelector("#seconds");

const app = document.querySelector(".app");
const title = document.querySelector(".title");
const timer = document.querySelector(".timer");

const button = document.querySelector("button");
const input = document.querySelector("input");

const MILLI_SECOND = 1;
const SECOND = 1000 * MILLI_SECOND;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

let currentDate = new Date();
let birthdayDate = new Date();
let days, hours, minutes, seconds;
let tmpDays, tmpHours, tmpMinutes, tmpSeconds, started;

const displaySurprise = () => {

    app.removeChild(timer);
    title.firstElementChild.innerText = "Happy Birthday!";
    const image = document.createElement("img");
    image.src = "http://www.pngall.com/wp-content/uploads/2016/07/Birthday-Present-PNG-Pic.png"
    image.addEventListener('click', () => {
        console.log("Click!");
    })
    title.appendChild(image);
    title.appendChild(tooltip);

}
function makeAnimation(condition1, condition2, value) {
    if (condition1 !== condition2) {
        const childElem = value.firstElementChild;
        childElem.style.animation = "mymove 0.5s steps(50)";
        value.removeChild(childElem);
        value.appendChild(childElem);
    }
}
const checkAndPrintTime = () => {
    function displayNumber(value, type) {
        (value < 10 && value >= 0) ? type.textContent = "0" + value : type.textContent = value;
    }
    let currentDate = new Date();
    if (birthdayDate.getTime() - currentDate.getTime() >= 0) {
        if (started) {
            days = Math.floor((birthdayDate.getTime() - currentDate.getTime()) / (DAY));
            hours = Math.floor((birthdayDate.getTime() - currentDate.getTime() - (days * DAY)) / (HOUR));
            minutes = Math.floor((birthdayDate.getTime() - currentDate.getTime() - (days * DAY) - (hours * HOUR)) / (MINUTE));
            seconds = Math.floor(((birthdayDate.getTime() - currentDate.getTime()) - (days * DAY) - (hours * HOUR) - (minutes * MINUTE)) / (SECOND));

            makeAnimation(tmpMinutes, minutes, minutesNumber);
            makeAnimation(tmpHours, hours, hoursNumber);
            makeAnimation(tmpDays, days, daysNumber);

            tmpDays = days;
            tmpHours = hours;
            tmpMinutes = minutes;
            tmpSeconds = seconds;

            displayNumber(days, daysNumber.firstElementChild);
            displayNumber(hours, hoursNumber.firstElementChild);
            displayNumber(minutes, minutesNumber.firstElementChild);
            displayNumber(seconds, secondsNumber.firstElementChild);
        }

    } else {
        if (started) {
            displaySurprise();
            try {
                setInterval("javascript function", milliseconds);
            } catch (e) { }

        }

    }
}
app.removeChild(timer);
title.firstElementChild.innerText = "Please enter date e.g.'April 29, 2020 00:00:00'";
button.addEventListener("click", () => {
    birthdayDate = new Date(input.value);
    title.firstElementChild.innerText = "Birthday Timer";
    app.appendChild(timer);
    input.style.display = "none";
    button.style.display = "none";
    started = true;
    secondsNumber.firstElementChild.style.animation = "mymove 0.5s steps(50)";
    checkAndPrintTime();
})

setInterval(checkAndPrintTime, 1000)








