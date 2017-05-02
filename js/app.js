


window.addEventListener( "DOMContentLoaded", function() {
    new MyScript();
});

function MyScript() {
  new MyBurger();
}

function MyBurger() {
    this.burger = document.querySelector('.burger');
    this.burger.addEventListener('click', this.burgerAddEvent.bind(this));
}

MyBurger.prototype.burgerAddEvent = function () {
    this.burgerChild = this.burger.querySelector('.burger__item');
    this.burgerChild.classList.toggle("burger_active");
    this.mobiMunu = document.querySelector('.mobi-menu');
    this.mobiMunu.classList.toggle("mobi-menu_show");
};


