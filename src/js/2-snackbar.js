import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import iconDagger from '../img/icon/Group.png';
import iconOk from '../img/icon/form icon/circle Ok.png';
import iconCaution from '../img/icon/form icon/triangle Caution.png';
import iconBell from '../img/icon/form icon/bell welcome.png';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');

  form.addEventListener('submit', event => {
    event.preventDefault();

    const delay = parseInt(form.elements.delay.value, 10);
    const state = form.elements.state.value;

    createPromise(delay, state)
      .then(delay => {
        iziToast.success({
          title: 'Success',
          message: `✅ Fulfilled promise in ${delay}ms`,
          position: 'topRight',
        });
      })
      .catch(delay => {
        iziToast.error({
          title: 'Error',
          message: `❌ Rejected promise in ${delay}ms`,
          position: 'topRight',
        });
      });

    form.reset();
  });

  function createPromise(delay, state) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (state === 'fulfilled') {
          resolve(delay);
        } else {
          reject(delay);
        }
      }, delay);
    });
  }
});
