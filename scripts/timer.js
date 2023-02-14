'use strict';

const formatDigit = (time) => `0${time}`.slice(-2);

const updateTimer = (time) => {
    let seconds = document.getElementById('seconds');
    let minutes = document.getElementById('minutes')
    let hours = document.getElementById('hours')
    let days = document.getElementById('days')

    let amountSeconds = time % 60;
    let amountMinutes = Math.floor((time % (60 * 60)) / 60)
    let amountHours = Math.floor((time % (60 * 60 * 24)) / (60 * 60));
    let amountDays = Math.floor(time / (60 * 60 * 24));

    seconds.textContent = formatDigit(amountSeconds);
    minutes.textContent = formatDigit(amountMinutes);
    hours.textContent = formatDigit(amountHours);
    days.textContent = formatDigit(amountDays);
}

const countdown = (time) => {
    const countdownStop = () => clearInterval(id);

    const count = () => {
        if (time == 0) {
            countdownStop();
        }    
        updateTimer(time);
        time--;
    }
    const id = setInterval(count, 1000);
}

const timeRemaining = () => {
    let eventDate = new Date('2023-02-08 17:30');
    let todayDate = Date.now();
    return Math.floor((eventDate - todayDate) / 1000)

}

countdown(timeRemaining())