$(function () {
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        prevArrow: $('.control__prev'),
        nextArrow: $('.control__next')
      });
      $('#form').validate();

      $('input[name=phone]').mask(+7 (999) 999-99-99);
})