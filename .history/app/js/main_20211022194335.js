$(function () {
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        prevArrow: $('.control__prev'),
        nextArrow: $('.control__next')
      });
     
      $('#form').validate({
        rules: {
          'name': {
            required: true
          },
          'name': {
            required: true,
            minlength: 10
          }
        },
        messages: {
          'name': {
            required: 'ИМЯ ГДЕ???!!!'
          },
          'name': {
            required: 'no phone',
            minlength: 'коротковато'
          }
        }
      });
})