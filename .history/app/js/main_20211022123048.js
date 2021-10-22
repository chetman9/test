$(function () {
    $('.card__bye').slick({
        prevArrow: '<img class="slide__prev" src="img/header/prev__slide.svg">',
        nextArrow: '<img class="slide__next" src="img/header/next__slide.svg">',
        autoplay: true,
        autoplayTimeout: 2000, 
        dots: true,
        dotsClass: "my-dots",
        speed: 500,
        fade: true,
        cssEase: 'linear',
        lazyLoad: 'ondemand',
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false
                }
            },
        ]
    });
})