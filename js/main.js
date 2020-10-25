//переменная  - кнопка меню
let menuToggle = document.querySelector('#menu-toggle');
//переменная - положим меню
let menu = document.querySelector('.sidebar')

//отслеживаем клик и запуск функции
menuToggle.addEventListener('click', function (event) {
    event.preventDefault();   //отменяет стандартный клик - поднимает страницу к началу
    menu.classList.toggle('visible');
})