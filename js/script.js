$(function(){
	
// Кнопка наверх
$(window).scroll(function(){
    if($(window).scrollTop() > 100) {
        $('.button-up').show();
    } else {
        $('.button-up').hide();
    }
});

$('.button-up').click(function(){
    $('html, body').animate({scrollTop: 0}, 600);
    return false;
});

// Меню гамбургер
$('.nav-menu__toggle').click(function (e){
    e.preventDefault();
    $('.menu-header__nav').toggleClass('show');
});

if ($(window).width() < 768) {
    $('.menu-header__nav li a').click(function(e) {
        e.preventDefault();
        $('.menu-header__nav').toggleClass('show');
    });
};

// Плавная прокрутка
$("a.scroll-to").on("click", function(e){
    e.preventDefault();
    let elementClick = $(this).attr('href');
    $('html, body').stop().animate({
        scrollTop: $(elementClick).offset().top - 60
    }, 1000);
});


// Попап окно (прописать кнопке href="#modal" class="modal-btn")
$('a.modal-btn').click(function (e) {
    e.preventDefault();
    let destinationPopup = $(this).attr('href');
    $(destinationPopup).addClass('show');
    $(destinationPopup + ' .popup__close').click(function (e) {
        e.preventDefault();
        $(destinationPopup).removeClass('show');
    });
    $(destinationPopup + ' .popup__overlay').click(function (e) {
        e.preventDefault();
        $(destinationPopup).removeClass('show');
    });
});

// Слайдер
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

// Preloader
$(window).on('load', function() {
    $('.preloader').fadeOut().end().delay(1000).fadeOut('slow');
  });

});