var menuToggle = document.querySelector('.page-header__menu-toggle');
var modalMenuMobile = document.querySelector('.main-nav__wrapper');
var modalClosure = document.querySelector('.main-nav__list__closure-button');


menuToggle.addEventListener('click', function () {
    modalMenuMobile.classList.toggle('main-nav__wrapper--active');
 
})

console.log(menuToggle);
console.log(modalMenuMobile);



var orderButton = document.querySelector('.item-of-the-week__button');
var modalOrderWindow = document.querySelector('.modal-window');
var pageBodyContainer = document.querySelector('.body_container');
var siteBody = document.querySelector('body');
var ESCAPE_BUTTON = '27';

var closePopUp = function (evt) {
    evt.preventDefault();
    if (evt.keyCode == ESCAPE_BUTTON && modalOrderWindow.classList.contains('modal-window--show')) {
        modalOrderWindow.classList.remove('modal-window--show');
        pageBodyContainer.classList.remove('body_container--filter');
    }

    
}
/* var noScroll = function (evt) {
window.addEventListener('scroll', (e) => {
        window.scrollTo(0,0);
      });
} */


var openPopUp = function (evt) {
    evt.preventDefault();
       
    pageBodyContainer.classList.toggle('body_container--filter');
    modalOrderWindow.classList.toggle('modal-window--show');
    siteBody.classList.toggle('body__no-scroll');
   
}

orderButton.addEventListener('click', openPopUp)
document.addEventListener('keydown', closePopUp);

