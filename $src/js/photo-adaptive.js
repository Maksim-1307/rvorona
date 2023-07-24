$(function(){
    setTimeout(() => {
        $('.photo-section__scroller').css('height', function(){
            return $('.photo-section__content').css('height')
        });
    }, "100");
});


