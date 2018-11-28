$(window).scroll(function() {

// Параллакс

 var st = $(this).scrollTop();

 $(".parallax .bg").css({
 	"transform" : "translate(0%, "+ st /15 +"%"
 	 });

 $(".parallax .bg2").css({
 	"transform" : "translate(0%, "+ st /10 +"%"
 	 });

 $(".parallax .bg3").css({
 	"transform" : "translate(0%, "+ st /26 +"%"
 	 });

 $(".title").css({
 	"transform" : "translate(0%, "+ st /2 +"%"
 	 });
});


jQuery('document').ready(function(){

  $('#send').on('click', function(e){
    e.preventDefault();
    $('#modal_shadow').css({
      'display' : 'block',
    });

  if ($('#input_name').val().trim().length) {

    var name = jQuery('#input_name').val();

    var modalText = document.getElementById('modaltext');
    modalText.innerHTML += 'Hey, <span>' + name + '</span>, I will read your msg asap!';

  } 

  else {

    var modalText = document.getElementById('modaltext');
    modalText.innerHTML += 'Write your name, please!';

    }

    
  });

   $('#exit_modal').on('click', function(e){
    $('#modal_shadow').css({
      'display' : 'none',
    });

    var name = jQuery('#input_name').val();

    var modalText = document.getElementById('modaltext');
    modalText.innerHTML = '';

  });

// Мобильное меню 

  $(window).on('scroll', function(e){
    $('.mobile_ul').slideUp(500);
    $('#burger').removeClass("fa-times");
    $('#burger').addClass("fa-bars");
  })


  $(function(){

    $('#burger').on('click', function() {
      $('#burger').toggleClass("fa-bars fa-times");
      $('.mobile_ul').slideToggle(400, function(){
            if( $(this).css('display') === "none"){
                $(this).removeAttr('style');
            }
       });
    });
  });


// Анимация формы

	$('.input').focus(function(){
 
	$(this).parent('div').addClass('anim');
 
	});
 
	$('.input').blur(function(){
 
	$(this).parent('div').removeClass('anim');
 
	});

	$(".input").change(function() {

  if ($(this).val().trim().length) {

    $(this).parent('div').addClass("filled");
  } 

  else {

    $(this).parent('div').removeClass("filled");

  	}

	});

  // Анимация прокрутки

  $('.butt').on('click',function (e) {
  	e.preventDefault();

  	var target = this.hash;
  	var $target = $(target);

  	$('html, body').animate({
  		'scrollTop': $target.offset().top
  	}, 1500, 'swing');
  });

  	var nav = $("nav"); // Меню
  var scrollPrev = 0 // Предыдущее значение скролла

  $(window).scroll(function() {
    var scrolled = $(window).scrollTop(); // Высота скролла в px
    var firstScrollUp = false; // Параметр начала сколла вверх
    var firstScrollDown = false; // Параметр начала сколла вниз

    // Если скроллим
    if ( scrolled > 0 ) {
      // Если текущее значение скролла > предыдущего, т.е. скроллим вниз
      if ( scrolled > scrollPrev ) {
        firstScrollUp = false; // Обнуляем параметр начала скролла вверх
        // Если меню видно
        if ( scrolled < nav.height() + nav.offset().top ) {
          // Если только начали скроллить вниз
          if ( firstScrollDown === false ) {
            var topPosition = nav.offset().top; // Фиксируем текущую позицию меню
            nav.css({
              "top": topPosition + "px"
            });
            firstScrollDown = true;
          }
          // Позиционируем меню абсолютно
          nav.css({
            "position": "absolute"
          });
        // Если меню НЕ видно
        } else {
          // Позиционируем меню фиксированно вне экрана
          nav.css({
            "position": "fixed",
            "top": "-" + nav.height() + "px"
          });
        }

      // Если текущее значение скролла < предыдущего, т.е. скроллим вверх
      } else {
        firstScrollDown = false; // Обнуляем параметр начала скролла вниз
        // Если меню не видно
        if ( scrolled > nav.offset().top ) {
          // Если только начали скроллить вверх
          if ( firstScrollUp === false ) {
            var topPosition = nav.offset().top; // Фиксируем текущую позицию меню
            nav.css({
              "top": topPosition + "px"
            });
            firstScrollUp = true;
          }
          // Позиционируем меню абсолютно
          nav.css({
            "position": "absolute"
          });
        } else {
          // Убираем все стили
          nav.removeAttr("style");
        }
      }
      // Присваеваем текущее значение скролла предыдущему
      scrollPrev = scrolled;
    }   
  });  

});
