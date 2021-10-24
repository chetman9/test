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
          phone: "required",
          yes:"required"
        },
        
        messages : {
          name: "Введите ваше имя",
          phone: "Введите ваш телефон",
          yes: "Подтвердите",
        },


      submitHandler: function(form) { 
        $('.btm_form').on('click', function (){
          $('.popup-show').fadeIn();
        });
        //submit via ajax
        return false;  //This doesn't prevent the form from submitting.
    }

      });

      $.validator.addMethod("checkallowedchars", function (value) {
        var pattern = new RegExp('^[ а-я]+', 'g');
        return /^[ а-я]+$/i.test(value);
    }, "The field contains non-admitted characters")

    
      $('input[name=phone]').mask("+7 (999) 999-99-99");

      

});