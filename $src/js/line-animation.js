var textpath = document.querySelector("#text-path");
var textcontainer = document.querySelector("#text-container")
var boddy = document.querySelector("body")

if (textcontainer) {
    var scrollSelf = textcontainer.scrollTop + -100;
}

window.addEventListener('scroll', function () {
    textpath.setAttribute('startOffset', scrollSelf - document.documentElement.scrollTop);
    //document.querySelector(".line-section").style.bottom = -(document.documentElement.scrollTop - (scrollSelf - 800)) / 5 + 'px';
});

window.addEventListener('onload', function () {
    textpath.setAttribute('startOffset', scrollSelf - document.documentElement.scrollTop);
    //document.querySelector(".line-section").style.bottom = -(document.documentElement.scrollTop - (scrollSelf - 800)) / 5 + 'px';
});
