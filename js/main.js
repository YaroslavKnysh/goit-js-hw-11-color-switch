import colors from './colors.js';

const buttonStart = document.querySelector('button[data-action="start"]');
const buttonStop = document.querySelector('button[data-action="stop"]');
const body = document.querySelector('body');
// console.log(buttonStart);
// console.log(buttonStop);
// console.dir(body);
// console.log(colors);

buttonStart.addEventListener('click', changeColor);
buttonStop.addEventListener('click', reset);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
let interval = null;

function changeColor() {
  interval = setInterval(() => {
    const min = 0;
    const max = colors.length - 1;
    const i = randomIntegerFromInterval(min, max);
    body.style.backgroundColor = colors[i];
    buttonStart.setAttribute('disabled', true);
  }, 500);
}

function reset() {
  const text = 'Вы остановили интервал!)';
  clearInterval(interval);
  buttonStart.removeAttribute('disabled');
  body.style.backgroundColor = colors[0];
  alert(text);
}
