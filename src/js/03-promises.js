import Notiflix from 'notiflix';

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

const formEl = document.querySelector('form');

formEl.addEventListener('submit', event => {
  event.preventDefault();
  const delay = Number(event.target.elements.delay.value);
  const step = Number(event.target.elements.step.value);
  const amount = Number(event.target.elements.amount.value);

  if (amount <= 0 || delay < 0 || step < 0) {
    Notiflix.Notify.failure('Please input correct values (>=0)');
    return;
  }

  let currentDelay = delay;

  for (let position = 1; position <= amount; position += 1) {
    createPromise(position, currentDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      });

    currentDelay += step;
  }

  formEl.reset();
});
