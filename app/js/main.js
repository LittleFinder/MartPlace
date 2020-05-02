$(function(){

     
    

    $('input[type="select"], select').styler(); 

    $('.product-slider__box-wrapper').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: '<button type="button" class="slick-prev"></button>',
          nextArrow: '<button type="button" class="slick-next"></button>'
       });

     $('.recently-slider__items').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          prevArrow: '<button type="button" class="slick-prev"></button>',
          nextArrow: '<button type="button" class="slick-next"></button>'
     });


 
     $(".rateYo").rateYo({
          rating: 4.5,
          readOnly: true,
          starWidth: "17px"
     });

     $('.product-filter__btn-icon').on('click', function(){
          $('.product-filter__product-item').addClass('list');
          $('.product-filter__btn-dropdown').addClass('active');   
      });

      
      $('.product-filter__btn-icon').on('click', function(){
        $('.product-filter__btn-dropdown').slideToggle("duration: 600;",  )
       });

   
     
     var mixer = mixitup('.product-filter__product-inner');
 
});
   