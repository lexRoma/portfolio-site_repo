//@@include('alert.js')

@@include('slick.min.js')




function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}


testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
});

// Настройка слайдера

/*
const butt = document.querySelector('.pause');
if(butt) {
    

    butt.addEventListener("click", function(a) {
        butt.classList.toggle('active');
        
           
    });
}

*/





$(document).ready(function(){
    $('.homepage6__slider').slick({
        arrows:false,
        dots:true,
        autoplay:true,
        autoplaySpeed:5000,
        pauseOnFocus:true,
        pauseOnHover:true,
        pauseOnDotsHover:true,
        touchMove:true
        
    });

});


$(document).ready(function(){
    $('.info__slider').slick({
        arrows:true,
        dots:false,
        slidesToShow: 2,
        centerMode: true,
        autoplay:true,
        autoplaySpeed:5000,
        pauseOnFocus:true,
        pauseOnHover:true,
        pauseOnDotsHover:true,
        touchMove:true
        
    });

});


$(document).ready(function(){
    $('.homepage4__slider').slick({
        arrows:false,
        dots:false,
        slidesToShow: 1,
        centerMode:false,   //delete paddings!!!
        autoplay:true,
        autoplaySpeed:5000,
        pauseOnFocus:true,
        pauseOnHover:false,
        pauseOnDotsHover:true,
        touchMove:true
        
    });

    $('.go').click(function(event) {
        $('.homepage4__slider').slick('slickPlay');
    });

    $('.go').click(function(event) {
        $('.homepage4__slider').slick('slickNext');
    });


    $('.pause').click(function(event) {
        $('.homepage4__slider').slick('slickPause');
    });

    

});




// Бургер-меню

const iconMenu = document.querySelector('.burger');
if(iconMenu) {
    const menuBody = document.querySelector('.menu');
    const inter = document.querySelector('.interview');

    iconMenu.addEventListener("click", function(a) {
        document.body.classList.toggle('lock');
        iconMenu.classList.toggle('active');
        menuBody.classList.toggle('active');
        inter.classList.toggle('active');
    });

    
}


//SWIPER !!!

const swiper = new Swiper('.swiper-container',{

    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },


    //grabCursor: true,
    loop: true,
    speed: 800,

    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },

    slideToClickedSlide: true,

    autoheight: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },

    keyboerd: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },


    mousewheel: {
        sensitivity: 3,
        eventsTarget: ".swiper-container"
    },

    simulateTouch: true,

});


/*
const swiper = new Swiper('.homepage4__slider',{

    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },


    //grabCursor: true,
    loop: true,
    speed: 800,

    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },

    slideToClickedSlide: true,

    autoheight: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },

    keyboerd: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },


    mousewheel: {
        sensitivity: 3,
        eventsTarget: ".swiper-container"
    },

    simulateTouch: true,

});
 

*/


const slider = document.querySelector('.swiper-container');
if (slider) {
    const pause = document.querySelector('.button__pause');
    pause.addEventListener("click", function(a) {
        slider.classList.toggle('paused');
    });
}

function sliderStop () {
    alert('Hello world!');
    swiper.autoplay = false;
}

if (slider.classList.contains('paused')) {
    alert('Hello world!');
    sliderStop ();
}



//dinamic adaptive

const parent_original = document.querySelector('.about__section--2');
const parent = document.querySelector('.services__content3--img');
const item = document.querySelector('.about__section-img');

window.addEventListener('resize', function(event) {
    const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if (viewport_width < 1100) {
        if (!item.classList.contains('done')) {
            parent.insertBefore(item, parent.children[2]);
            item.classList.add('done');
        }
    } else {
        if (item.classList.contains('done')) {
            parent.insertBefore(item, parent.children[2]);
            item.classList.remove('done');
        }
    }
});




