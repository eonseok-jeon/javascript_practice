'use strict';

let value = Math.trunc(Math.random() * 10) + 1;
let score = 20;
let highScore = 0;
let setMessage = (message) => {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'NaN';
  } else if (value === guess) {
    document.querySelector('.number').textContent = value;
    setMessage('You Win');
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').style.backgroundColor = 'green';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = score;
    }
  } else {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      if (value > guess) {
        setMessage('Too Low');
      } else if (value < guess) {
        setMessage('Too High');
      }
    } else {
      setMessage('You Lose');
      document.querySelector('.score').textContent = 0;
    }
  }

  document.querySelector('.again').addEventListener('click', () => {
    score = 20;
    value = Math.trunc(Math.random() * 10) + 1;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    setMessage('Start guessing...');
    document.querySelector('.guess').value = '';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').style.backgroundColor = 'white';
  });
});
