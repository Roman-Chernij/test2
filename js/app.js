


window.addEventListener( "DOMContentLoaded", function() {
    new MyScript();
});

function MyScript() {
  new MyBurger();
  new ClickScrol();
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

function ClickScrol() {
    this.block = document.querySelectorAll('.scrolTop');
    this.t = '';
    this.addEvntScrol();
}

ClickScrol.prototype.addEvntScrol = function () {
   for(var p=0;p<this.block.length;p++) {
       this.block[p].addEventListener('click', this.scrolEvent.bind(this));
   }
};

ClickScrol.prototype.scrolEvent = function () {
    var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
    if(top > 0) {
        window.scrollBy(0,-50);
        this.t = setTimeout(this.scrolEvent.bind(this), 20);
    } else clearTimeout(this.t);
    return false;
};