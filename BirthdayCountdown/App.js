const daysNumber = document.querySelector("#days");
const hoursNumber = document.querySelector("#hours");
const minutesNumber = document.querySelector("#minutes");
const secondsNumber = document.querySelector("#seconds");

const MILLI_SECOND = 1;
const SECOND = 1000*MILLI_SECOND;
const MINUTE = SECOND*60;
const HOUR = MINUTE*60;
const DAY = HOUR*24;

var birthdayDate = new Date("April 10, 2020 00:00:00");

const checkAndPrintTime = () =>{
    function displayNumber(value,type){
        (value<10)?type.textContent="0"+value:type.textContent=value;
    }
    var currentDate = new Date();
    var days = Math.floor((birthdayDate.getTime() - currentDate.getTime())/(DAY));
    var hours = Math.floor((birthdayDate.getTime() - currentDate.getTime()-(days*DAY))/(HOUR));
    var minutes = Math.floor((birthdayDate.getTime() - currentDate.getTime()-(days*DAY)-(hours*HOUR))/(MINUTE));
    var seconds = Math.floor(((birthdayDate.getTime() - currentDate.getTime())-(days*DAY)-(hours*HOUR)-(minutes*MINUTE))/(SECOND));
    
    displayNumber(days,daysNumber);
    displayNumber(hours,hoursNumber);
    displayNumber(minutes,minutesNumber);
    displayNumber(seconds,secondsNumber);

}

checkAndPrintTime();

setInterval(checkAndPrintTime,1000)






