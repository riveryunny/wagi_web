const toggleBtn = document.querySelector('.group');
const menu = document.querySelector('.menu');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});
