'use strict';

let randomNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const message = (message) => {
  return (document.querySelector('.message').textContent = message);
};

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    message('INVALID NUM');
  } else if (randomNum === guess) {
    document.querySelector('.number').textContent = guess;
    message('SUCCESS');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent =
        randomNum > guess ? 'TOO LOW' : 'TOO HIGH';
    } else {
      message('YOU LOSE');
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  randomNum = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  message('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
