let menuToggle = document.querySelector('#menu-toggle');
let menu = document.querySelector('.sidebar')

menuToggle.addEventListener('click', function (event) {
    console.log('клик');
    menu.classList.toggle('visible');
})