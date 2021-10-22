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
          name: {
            required: true,
            minlength: 2,
            maxlength: 50,
            number: false,
            checkallowedchars: true
          },
          phone: "required"
        },
        messages : {
          name: "Введите ваше имя",
          phone: "Введите ваш телефон",
        }
      });

      $.validator.addMethod("checkallowedchars", function (value) {
        var pattern = new RegExp('[A-Za-z]+', 'g');
        return /^[A-Z]+$/i.test(value);
    }, "The field contains non-admitted characters");

      $('input[name=phone]').mask("+7 (999) 999-99-99");

})