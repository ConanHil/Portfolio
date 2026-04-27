let miliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

let timer = null;

const display = document.getElementById('display');

function updateDisplay() {
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = Math.floor(miliseconds / 10);
ms = String(ms).padStart(2, '0');

    display.textContent = `${h}:${m}:${s}.${ms}`;
}

function startTimer() {
    if (timer !== null) return;

    updateDisplay();
    
    timer = setInterval(() => {
        miliseconds += 10; 

        if (miliseconds === 1000) {
            miliseconds = 0;
            seconds++;
        }

        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }

        if (minutes === 60) {
            minutes = 0;
            hours++;
        }

        updateDisplay();
    }, 10);
}   

function stopTimer() {
    clearInterval(timer);
    timer = null;
}

function resetTimer() {
    clearInterval(timer);
    timer = null;

    miliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;

    updateDisplay();
}

document.getElementById("start").onclick = startTimer;
document.getElementById("stop").onclick = stopTimer;
document.getElementById("reset").onclick = resetTimer;