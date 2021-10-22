$(function () {
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        prevArrow: $('.control__prev'),
        nextArrow: $('.control__next')
      });
})