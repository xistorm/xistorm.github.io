const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('header nav');

let opened = false;

menuBtn.addEventListener('click', () => {
    if (!opened) {
        menu.classList.add('active');
        menuBtn.classList.add('active');
    } else {
        menu.classList.remove('active');
        menuBtn.classList.remove('active');
    }

    opened = !opened;
});