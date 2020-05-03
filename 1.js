$(document).ready(function () {
    //  slider
    $('.slider').slick({
        arrows: false,
        autoplay: true,
        dots: true,
    });


    // burger menu
    $('.burger-btn').click(function (event) {
        $('.burger-btn, .burger-menu').toggleClass('active');
        $('body').toggleClass('lock');
        
    });
    $('.burger-menu-link').click(function (event) {
        $('.burger-btn, .burger-menu').removeClass('active');
        $('body').removeClass('lock');
    });
    
    //
    $('.slick-dots').attr('id', 'slick-dots');
});