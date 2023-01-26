const showModalBtn = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

for (let i = 0; i < showModalBtn.length; i++) {
  showModalBtn[i].addEventListener('click', () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

document.querySelector('.close-modal').addEventListener('click', closeModal);

document.querySelector('.overlay').addEventListener('click', closeModal);

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
