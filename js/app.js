

;(function() {
    $(document).foundation();
})();

window.addEventListener('scroll' ,function () {
    new Paralax();
    new FixedToBar();

});


window.addEventListener( "DOMContentLoaded", function() {
    new MyScript();
});


function MyScript() {
  new MyBurger();
  new ClickScrol();
  new ChangeWindow();

}

function MyBurger() {
    this.burger = document.querySelector('.burger');
    this.burger.addEventListener('click', this.burgerAddEvent.bind(this));
}

MyBurger.prototype.burgerAddEvent = function () {
    new Ww();
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
        window.scrollBy(0,-15);
        this.t = setTimeout(this.scrolEvent.bind(this), 10);
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

    if(this.widthWindow < '1020') {
        innerNav();
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
            phone = document.querySelector('.phone'),
            clonePhone = phone.cloneNode(true),
            t = document.querySelector('#offCanvasRight');
        t.insertAdjacentHTML('afterBegin', str);
        t.appendChild(clonePhone);
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
    return  '<div class="mobi-menu"></div>'
};




function Paralax() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop,
        banner = document.querySelector('.banner__paralax'),
        bannerAttr = banner.getAttribute('data-speed'),
        numberBanner = scrolled/bannerAttr;
    banner.style.cssText +="transform: translateY("+numberBanner+"px);";
}

function FixedToBar() {
    this.header = document.querySelector('.header');
    this.scrolled = window.pageYOffset || document.documentElement.scrollTop;
    this.headerHegth = parseInt(getComputedStyle(this.header).height);
    this.fixedTopBar = document.querySelector('.fixed-top-bar');



    if(!this.fixedTopBar) {
        this.fixedAddElem();
    }else {this.removeFixedMenu();}


}

FixedToBar.prototype.fixedAddElem = function () {
    this.topBar = this.header.querySelector('.top-bar');
    this.cloneTopBar = this.topBar.cloneNode(true);
    this.offCanvasContent = document.querySelector('.off-canvas-content');
    this.row = document.querySelector('.row');
    this.rowWidht = getComputedStyle(this.row).width;
    this.markur = '<div class="fixed-top-bar"></div>';

    if(this.scrolled > this.headerHegth){
        this.addFixedMenu();
    }

};

FixedToBar.prototype.addFixedMenu = function () {
    this.offCanvasContent.insertAdjacentHTML('afterBegin', this.markur);
    this.fixedTopBarAdd = document.querySelector('.fixed-top-bar');
    this.fixedTopBarAdd.appendChild(this.cloneTopBar);
    this.fixedTopBarAdd.style.cssText +="width:"+this.rowWidht+";";
};

FixedToBar.prototype.removeFixedMenu = function () {
    if(this.scrolled < this.headerHegth) {
        this.parentFixed = document.querySelector('.off-canvas-content');
        this.fix = this.parentFixed.querySelector('.fixed-top-bar');
            if(this.fix == 'null'){
                return
                }else if(this.fix != 'null') {
                this.fix.classList.add('fixed-top-bar_hide');
                this.fix.addEventListener('animationend', this.removeFixed.bind(this))
            }
    }
};

FixedToBar.prototype.removeFixed = function () {
    this.parentFixed.removeChild(this.fix);
};