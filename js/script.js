// Меню бургер
const iconMenu = document.querySelector('.menu__icon');
const  menuBody = document.querySelector('.menu__body');
if (iconMenu) {
    iconMenu.addEventListener("click", function(e) {
        document.querySelectorAll('.menu__item').forEach(n => n.classList.remove('_hidden'));
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    })
}

// Прокрутка при клике
