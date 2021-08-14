const hrHand = document.getElementById("hr");
const minHand = document.getElementById("min");
const secHand = document.getElementById("sec");
const digitTime = document.getElementById("time");


let set_clock = setInterval(() => {
    let date_now = new Date();

    let hr = date_now.getHours();
    let min = date_now.getMinutes();
    let sec = date_now.getSeconds();

    let calc_hr = (hr * 30) + (min / 2);
    let calc_min = (min * 6) + (sec / 10);
    let calc_sec = sec * 6;

    hrHand.style.transform = `rotate(${calc_hr}deg)`;
    minHand.style.transform = `rotate(${calc_min}deg)`;
    secHand.style.transform = `rotate(${calc_sec}deg)`;
}, 1000);

let digital_clock = setInterval(() => {
    let date_now = new Date();
    let hr = date_now.getHours();
    let min = date_now.getMinutes();
    let sec = date_now.getSeconds();
    let time = `${hr} : ${min} : ${sec}`;
    digitTime.textContent = time;

}, 1000);