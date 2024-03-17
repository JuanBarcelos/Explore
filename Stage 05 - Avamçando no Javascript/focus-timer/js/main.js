let timer;
let timeLeft = 25 * 60;
let intervalId;

const leafAudio = new Audio('./assets/sounds/leaf.wav');
const cloudSnowAudio = new Audio('./assets/sounds/Chuva.wav');
const storefrontAudio = new Audio('./assets/sounds/Cafeteria.wav');
const fireAudio = new Audio('./assets/sounds/Lareira.wav');


function startTimer() {
    if (!intervalId) {
        intervalId = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateTimerDisplay();
            } else {
                clearInterval(intervalId);
                intervalId = null;
                // You can add whatever you want to do when the timer finishes here
                // For example, play a sound
                playAudio(1);
            }
        }, 1000);
    }
}

function stopTimer() {
    clearInterval(intervalId);
    intervalId = null;
    updateTimerDisplay();
}

function addMinute() {
    timeLeft += 5 * 60;
    updateTimerDisplay();
}

function subtractMinute() {
    if (timeLeft >= 5 * 60) {
        timeLeft -= 5 * 60;
        updateTimerDisplay();
    }
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('timer').textContent = `${minutes}:${
        seconds < 10 ? '0' : ''
    }${seconds}`;
}

function btnLeafAudio() {
    document.getElementById('sounds').classList.remove('active');
    document.getElementById('sounds1').classList.add('active');
    document.getElementById('sounds2').classList.remove('active');
    document.getElementById('sounds3').classList.remove('active');

    leafAudio.play();
    
}

function btnCloudSnowAudio() {
    document.getElementById('sounds').classList.add('active');
    document.getElementById('sounds1').classList.remove('active');
    document.getElementById('sounds2').classList.remove('active');
    document.getElementById('sounds3').classList.remove('active');

   
    cloudSnowAudio.play();
    
}

function btnLeafAudio() {
    document.getElementById('sounds').classList.add('active');
    document.getElementById('sounds1').classList.remove('active');
    document.getElementById('sounds2').classList.remove('active');
    document.getElementById('sounds3').classList.remove('active');

    leafAudio.play();
}

function btnLeafAudio() {
    document.getElementById('sounds').classList.add('active');
    document.getElementById('sounds1').classList.remove('active');
    document.getElementById('sounds2').classList.remove('active');
    document.getElementById('sounds3').classList.remove('active');

    leafAudio.play();
}
/*
function playAudio(audioId) {
    const audios = document.querySelectorAll('audio');
    audios.forEach((audio) => {
        if (audio.id === `audio${audioId}`) {
            audio.play();
        } else {
            audio.pause();
            audio.currentTime = 0;
        }
    });
}*/
