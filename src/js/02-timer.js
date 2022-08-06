import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const dateInputRef = document.querySelector('#datetime-picker');
const startButtonRef = document.querySelector('button[data-start]');
const daysRef = document.querySelector('span[data-days]');
const hoursRef = document.querySelector('span[data-hours]');
const minutesRef = document.querySelector('span[data-minutes]');
const secondsRef = document.querySelector('span[data-seconds]');

const calendar = flatpickr(dateInputRef, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // console.log(selectedDates[0]);

    if (selectedDates[0] < Date.now()) {
      window.alert('Please choose a date in the future');
    } else startButtonRef.disabled = false;
  },
});

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

startButtonRef.addEventListener('click', onStartButtonClick);

function onStartButtonClick() {
  const timerId = setInterval(() => {
    let currentTime = Date.now();
    let currentMs = calendar.latestSelectedDateObj - currentTime;
    const timerObj = convertMs(currentMs);
    if (currentMs - 999 <= 0) {
      clearInterval(timerId);
    }
    daysRef.textContent = addLeadingZero(timerObj.days);
    hoursRef.textContent = addLeadingZero(timerObj.hours);
    minutesRef.textContent = addLeadingZero(timerObj.minutes);
    secondsRef.textContent = addLeadingZero(timerObj.seconds);
  }, 1000);
}
