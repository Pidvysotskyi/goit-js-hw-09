function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector('body');

const startButtonRef = document.querySelector('button[data-start]');

const stopButtonRef = document.querySelector('button[data-stop]');

startButtonRef.addEventListener('click', onStartButtonClick);
stopButtonRef.addEventListener('click', onStopButtonClick);

let isButtonDisable = false;

function onStartButtonClick() {
  if (!isButtonDisable) {
    timerID = setInterval(() => {
      backColor = getRandomHexColor();
      bodyRef.style.backgroundColor = backColor;
      console.log(`I changed background collor for Body to ${backColor}`);
      isButtonDisable = true;
    }, 1000);
  }
}

function onStopButtonClick() {
  clearInterval(timerID);
  isButtonDisable = false;
}
