$(window).on('scroll', function () {

    const k = .2;  // moving coefficient
    var bias = $(window).scrollTop() - $('.scroller').offset().top;

    $('.scroller__row').odd().css('transform', 'translateX(' + (bias * k - 200) + 'px)');
    $('.scroller__row').even().css('transform', 'translateX(' + -(bias * k + 100) + 'px)');

});


$(function () {

    const k = .2;  // moving coefficient
    var bias = $(window).scrollTop() - $('.scroller').offset().top;

    $('.scroller__row').odd().css('transform', 'translateX(' + (bias * k - 200) + 'px)');
    $('.scroller__row').even().css('transform', 'translateX(' + -(bias * k + 100) + 'px)');

});