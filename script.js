let menu = document.querySelector('.menu');
let nav = document.querySelector('.nav-2');
menu.addEventListener('click', () => {
    nav.classList.toggle('show');
    menu.classList.toggle('active')
});