const dayOfWeek = document.querySelector('.current-day');
const time = document.querySelector('.current-time');
const session = document.querySelector('.session');

const listOfDays = ['SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY'];

let date;

function getDayOfTheWeek() {
    date = new Date();
    let currentDay = date.getDay();
    dayOfWeek.innerText = listOfDays[currentDay];
}

function getCurrentTime() {
    date = new Date();

    let hours = date.getUTCHours();
    let minutes = date.getUTCMinutes();
    let seconds = date.getUTCSeconds();

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    session.innerText = (hours >= 12) ? "PM" : "AM";

    let currentTime = hours + ':' + minutes + ':' + seconds;
    time.innerText = currentTime;
}


getDayOfTheWeek();
setInterval(getCurrentTime, 1000);