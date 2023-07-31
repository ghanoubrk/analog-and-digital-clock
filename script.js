//Variables for analog clock
const hoursHand = document.querySelector(".hours");
const minutesHand = document.querySelector(".minutes");
const secondsHand = document.querySelector(".seconds");

//Variables for digital clock
const hh = document.querySelector(".hh");
const mm = document.querySelector(".mm");
const ss = document.querySelector(".ss");


let seconds = 0;
let minutes = 0;
let hours = 0;


setInterval(setClockTime,1000);
setInterval(setDigitalTime,1000);


function updateTime(){
    let dateNow = new Date();
    seconds = dateNow.getSeconds();
    minutes = dateNow.getMinutes();
    hours = dateNow.getHours();
}


function setClockTime(){
    updateTime();

    minutesHand.style.transform = `rotate( ${minutes * 6}deg)`;
    secondsHand.style.transform = `rotate( ${seconds * 6}deg)`;

    hours = hours > 12 ? hours-12 : hours;

    hoursHand.style.transform = `rotate(${hours * 30 + minutes/2}deg)`;

}


function setDigitalTime(){
    updateTime();
    hh.textContent = `${hours <10 ? "0"+hours : hours}`;
    mm.textContent = `${minutes <10 ? "0"+minutes : minutes}`;
    ss.textContent = `${seconds <10 ? "0"+seconds : seconds}`;
}


setClockTime();
setDigitalTime();

