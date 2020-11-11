var menuToggle = document.querySelector('.page-header__menu-toggle');
var modalMenuMobile = document.querySelector('.main-nav__wrapper');
var modalClosure = document.querySelector('.main-nav__list__closure-button');


menuToggle.addEventListener('click', function () {
    modalMenuMobile.classList.toggle('main-nav__wrapper--active');
 
})

console.log(menuToggle);
console.log(modalMenuMobile);