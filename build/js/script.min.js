 
const nav = document.querySelector('.nav');

nav.addEventListener('click', (e) => {
    const thisEl = e.target;

    if (thisEl.classList.contains('nav__link--submenu')) {
        thisEl.parentElement.classList.toggle('nav__item--active');
    }
});

