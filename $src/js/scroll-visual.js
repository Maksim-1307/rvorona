// DONT REUSE THIS CODE
$(function () {
    var Width = $(this).find('.nav__link').last().width();
    var Offset = $(this).find('.nav__link').last().offset().left;
    var isScrolling = (Width + Offset + 40) > $(this).innerWidth();

    if(isScrolling){
        var top = $('.scroll-visual').offset().top;
        $('.scroll-visual__element--right').css('display', 'block');
        $('.scroll-visual__element--right').css('top', top + 'px');
    }
});

$('.scroll-visual').on('scroll load', function(){
    var Width = $(this).find('.nav__link').last().width();
    var Offset = $(this).find('.nav__link').last().offset().left;
    var isScrolling = (Width + Offset + 40) > $(this).innerWidth();

    if ($(this).scrollLeft() <= 20){
        $('.scroll-visual__element--right').css('opacity', '1');
    } else {
        $('.scroll-visual__element--right').css('opacity', '0');
    }
});