const input = document.querySelector('input');
const orig = document.querySelector('.orig');

input.addEventListener('input', (event) => {
    const val = event.target.value;
    orig.style.opacity = val / 100;
});