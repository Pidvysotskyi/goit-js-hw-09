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
    });
  }, 1000);
  return promise;
}

console.log(
  createPromise(1, 5000)
    .then(({ position, delay }) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    })
);

// const firstDelayInputRef = document.querySelector('input[name = delay]');
// const delayStepInputRef = document.querySelector('input[name = step]');
// const amountInputRef = document.querySelector('input[name = amount]');
// const submitFormRef = document.querySelector('.form');

// submitFormRef.addEventListener('submit', onFormSubmit);

// function onFormSubmit(evt) {
//   const firstDelay = Number(firstDelayInputRef.value);
//   const delayStep = Number(delayStepInputRef.value);
//   const amount = Number(amountInputRef.value);

//   evt.preventDefault();

//   let itemDelay = firstDelay;

//   for (let i = 1; i <= amount; i += 1) {
//     createPromise(i, itemDelay)
//       .then(({ position, delay }) => {
//         console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//       })
//       .catch(({ position, delay }) => {
//         console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//       });
//     itemDelay = firstDelay + i * delayStep;
//   }
// }
