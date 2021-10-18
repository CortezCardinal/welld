  const owl         = $('.owl-carousel-1');
  const owlL        = $('#slider-arrow-l');
  const owlR        = $('#slider-arrow-r');
  const lifeSlider  = $('#responses-slider');

owlL.click(function(){
   
    lifeSlider.trigger('prev.owl.carousel');
});

owlR.click(function(){
lifeSlider.trigger('next.owl.carousel');
});

owl.owlCarousel({
  	loop:true,
    margin:16,
    autoHeight: true,
    responsive:{
        0:{
            items:1
        },
        385:{
            items:1
        },
        900:{
            items:1
        }
    }
  });
  const owl2         = $('#owl-carousel-2');
owl2.owlCarousel({
    loop:true,
 /*   margin:10,*/
    autoHeight: true,
    responsive:{
        0:{
            items:1
        },
        385:{
            items:1
        },
        900:{
            items:1
        }
    }
  });




  const menuBtn  = $('#menu-btn');
  const menuCross  = $('#menu-cross');
  const menuBody  = $('.heder__menu-list');


  menuBtn.click(function(){
      menuBody.toggleClass('heder__menu-list_active');
  });
  menuCross.click(function(){
      menuBody.toggleClass('heder__menu-list_active');
  });


$('a[href^="#"]').click(function () 
{
    var target = $(this).attr('href');
    $('html, body').animate({  
    scrollTop: $(target).offset().top + 2
    }, 500);
 
});

$('.menu__link').click(function () {  
        menuBody.removeClass('heder__menu-list_active');
   });