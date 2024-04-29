
const shadov_box = document.querySelector('.teams__description');
const shadov = document.querySelector('.teams__description-decor');
shadov_box.addEventListener('click', () => {
shadov.style.boxShadow = 'none';
});
const vacancyContainer = document.querySelector('.vacancy__list');
const positions = document.querySelectorAll('.vacancy__list-item');

for (const position of positions) {
position.addEventListener('click', e => {
    if (e.currentTarget.children[1].style.display == 'block') {
    e.currentTarget.children[1].style.display = 'none';
    } else {
    e.currentTarget.children[1].style.display = 'block';
    }
});
}
