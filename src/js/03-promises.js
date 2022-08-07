import Notiflix from 'notiflix';

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({
          position: `${position}`,
          delay: `${delay}`,
        });
      }
      reject({
        position: `${position}`,
        delay: `${delay}`,
      });
    }, delay);
  });
  return promise;
}

const firstDelayInputRef = document.querySelector('input[name = delay]');
const delayStepInputRef = document.querySelector('input[name = step]');
const amountInputRef = document.querySelector('input[name = amount]');
const submitFormRef = document.querySelector('.form');

submitFormRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  const firstDelay = Number(firstDelayInputRef.value);
  const delayStep = Number(delayStepInputRef.value);
  const amount = Number(amountInputRef.value);
  evt.preventDefault();

  let itemDelay = firstDelay;

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, itemDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`,
          {
            timeout: 5000,
            useIcon: false,
          }
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`,
          {
            timeout: 5000,
            useIcon: false,
          }
        );
      });
    itemDelay = firstDelay + i * delayStep;
  }
}
