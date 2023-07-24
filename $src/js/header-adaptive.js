$(function(){
    const burgerButton = $('.header__burger-button').get();
    const inscribtion = $('.header__inscribtion').get();

    var windowSize = $(window).width();
    if (windowSize > 500) {
        $('.header').find('.col-3').first().append(inscribtion);
        $('.header__burger-button').remove();
    } else {
        $('.header').find('.col-3').first().append(burgerButton);
        $('.header__inscribtion').remove();
    }

    $(window).resize(function () {
        var windowSize = $(window).width();
        if (windowSize > 500) {
            $('.header').find('.col-3').first().append(inscribtion);
            $('.header__burger-button').remove();
        } else {
            $('.header').find('.col-3').first().append(burgerButton);
            $('.header__inscribtion').remove();
        }
    });

});


