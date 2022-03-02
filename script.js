const hamburger = document.querySelector('.navbar-toggler');
const navMenu = document.querySelector('.collapse');

hamburger.addEventListener('click', mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle('open')
    navMenu.classList.toggle('open');
}

