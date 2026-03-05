// SELECTORS
const navButton = document.querySelector('#ham-btn');
const navBar = document.querySelector('#nav-bar');

// HAMBURGER MENU VIEW
navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navBar.classList.toggle('show');
});
