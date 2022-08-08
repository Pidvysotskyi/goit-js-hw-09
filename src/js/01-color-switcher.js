function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector('body');

const startButtonRef = document.querySelector('button[data-start]');

const stopButtonRef = document.querySelector('button[data-stop]');

startButtonRef.addEventListener('click', onStartButtonClick);
stopButtonRef.addEventListener('click', onStopButtonClick);

let timerID = null;

function onStartButtonClick() {
  startButtonRef.disabled = true;
  timerID = setInterval(() => {
    const backColor = getRandomHexColor();
    bodyRef.style.backgroundColor = backColor;
  }, 1000);
}

function onStopButtonClick() {
  clearInterval(timerID);
  startButtonRef.disabled = false;
}
