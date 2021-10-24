$(function () {
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        prevArrow: $('.control__prev'),
        nextArrow: $('.control__next')
      });




      $('.btm_form').on('click', function (){
        $('.popup-show').fadeIn();
      });

     /* $('#form').validate({
        rules: {
          name: {
            required: true,
            minlength: 2,
            maxlength: 50,
            number: false,
            checkallowedchars: true
          },
          phone: "required",
          yes:"required"
        },
        
        messages : {
          name: "Введите ваше имя",
          phone: "Введите ваш телефон",
          yes: "Подтвердите",
        },

      });*/

      if ($('.field').val() != '')
        $('#button').removeAttr('disabled');
    else
        $('.btm_form').attr('disabled','disable');
}




      $('input[name=phone]').mask("+7 (999) 999-99-99");


});