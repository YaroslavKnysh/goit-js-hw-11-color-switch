import colors from './colors.js';

const buttonStart = document.querySelector('button[data-action="start"]');
const buttonStop = document.querySelector('button[data-action="stop"]');
const body = document.querySelector('body');
console.log(buttonStart);
console.log(buttonStop);
console.dir(body);
console.log(colors);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

buttonStart.addEventListener('click', changeColor);
buttonStop.addEventListener('click', reset);

function changeColor() {
  body.style.backgroundColor = '#000';
}

function reset(e) {}
