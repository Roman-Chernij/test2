


window.addEventListener( "DOMContentLoaded", function() {
    new MyScript();
});

window.addEventListener("resize", function () {
    new ScriptAtResize()
});

function ScriptAtResize () {
    new WidthDocoment();
}

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


function WidthDocoment() {
    this.ww = innerWidth;
    console.log(this.ww);
    this.addMobiMenu();
}

WidthDocoment.prototype.addMobiMenu = function () {
    this.headCenter = document.querySelector('.head-center');
    this.str = '<div></div>';
    if(this.ww == '786'){
        this.nav = document.querySelector('.nav__nav-list');
        this.cloneNav = this.nav.cloneNode(true);
        this.str = '<div>'+this.cloneNav+'</div>';
        this.headCenter.insertAdjacentHTML('beforeBegin', this.str);
        alert(this.cloneNav)
    }
    return;
};