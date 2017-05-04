;(function() {
    $(document).foundation();
})();


window.addEventListener( "DOMContentLoaded", function() {
    new MyScript();
});


function MyScript() {
  new MyBurger();
  new ClickScrol();
  new ChangeWindow();
}

function MyBurger() {
    //alert(' защел в MyBurger');
    this.burger = document.querySelector('.burger');
    this.burger.addEventListener('click', this.burgerAddEvent.bind(this));
}

MyBurger.prototype.burgerAddEvent = function () {
    //alert(' защел в burgerAddEvent');
    this.burgerChild = this.burger.querySelector('.burger__item');
    this.burgerChild.classList.toggle("burger_active");
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

function ChangeWindow() {
    window.addEventListener('resize', function () {
        new Ww();
    });
}

function Ww() {
    this.widthWindow = innerWidth;
    this.widthChange();
}


Ww.prototype.widthChange = function () {
    this.head = document.querySelector('.header');
    this.headHeight = this.head.clientHeight;

    if(this.widthWindow < '1020') {
        innerNav();
        var mobi = document.querySelector('#offCanvasRight > .mobi-menu');
        mobi.style.cssText +="height: "+this.headHeight+"px;"
    } else if(this.widthWindow > '1020') {
        removeChild();
    }

};



function innerNav() {
    var check = document.querySelector('#offCanvasRight > .mobi-menu'),
        str = patern();

    if(!check){
        var nav = document.querySelector('.nav__nav-list'),
            cloneNav = nav.cloneNode(true),
            r = cloneNav,
            t = document.querySelector('#offCanvasRight');
        t.insertAdjacentHTML('afterBegin', str);
        t.appendChild(cloneNav);
    }
        return
}

function removeChild() {
    var parentElement = document.querySelector('#offCanvasRight'),
        chlildElements = parentElement.children;
    for(r=0;r<chlildElements.length;r++) {
        parentElement.removeChild(chlildElements[r]);
    }
}

function patern() {
    return  '<div class="mobi-menu">'+
        '<h2 class="mobi-menu__title">Menu</h2>'+
        '</div>'
};