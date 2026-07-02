const header = document.querySelector('.header');
const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');
const form = document.querySelector('form');
const note = document.querySelector('.note');
menuButton.addEventListener('click', () => header.classList.toggle('open'));
nav.addEventListener('click', (event) => { if (event.target.matches('a')) header.classList.remove('open'); });
form.addEventListener('submit', (event) => { event.preventDefault(); note.textContent = 'Заявка принята. В реальном проекте здесь откроется кабинет или SMS-подтверждение.'; });
