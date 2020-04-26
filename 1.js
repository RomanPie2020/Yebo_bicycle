//  slider
$(document).ready(function () {
    $('.slider').slick({
        arrows: false,
        autoplay: true,
        dots: true,
    });
});

// burger menu
$(document).ready(function () {
    $('.burger-btn').click(function (event) {
        $('.burger-btn, .burger-menu').toggleClass('active');
        $('body').toggleClass('lock');
        
    });
    
});