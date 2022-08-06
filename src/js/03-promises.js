function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve('OK');
    }
    reject('NOK');
  });
}

createPromise()
  .then(x => {
    console.log(x);
  })
  .catch(y => {
    console.log(y);
  });
