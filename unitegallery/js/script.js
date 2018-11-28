jQuery(document).ready(function(){

// Мобильное меню

  $(function(){

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

  });

  // Настройки галереи

	var colorImg;

	if($("#gall").hasClass("land")){
		var colorImg = '#013a12';
	}
	else if ($("#gall").hasClass("art")) {
		var colorImg = '#460404';
	}
	else if ($("#gall").hasClass("city")) {
		var colorImg = '#000051';
	}
	else if ($("#gall").hasClass("urbex")) {
		var colorImg = '#2f2f31';
	}

	jQuery("#gallery").unitegallery({
		gallery_theme: "tiles",
		tiles_type: "justified",
		tile_enable_image_effect:true,
		tile_image_effect_type: "blur",
		tile_overlay_opacity:0.3,
		tiles_space_between_cols:10,
		tile_image_effect_reverse:true,
		tiles_justified_space_between:12,
		tiles_col_width:220,
		theme_gallery_padding:10,	
		lightbox_textpanel_width: 750,
		lightbox_overlay_opacity:0.9,
		lightbox_slider_control_zoom:false,	
		theme_enable_preloader: true,
		theme_preloading_height: 800,
		theme_preloader_vertpos: 400,
		theme_gallery_padding: 10,
		theme_auto_open:null,
		gallery_width:"100%",
		tiles_justified_row_height: 450,
		tile_overlay_color: colorImg,
	});

// Прокрутка по кнопке

	$('.scroll').on('click',function (e) {
  	e.preventDefault();

  	var target = this.hash;
  	var $target = $(target);

  	$('html, body').animate({
  		'scrollTop': $target.offset().top
  	}, 500, 'swing');
  	});

	$('.butt').on('click',function (e) {
  	e.preventDefault();

  	var target = this.hash;
  	var $target = $(target);

  	$('html, body').animate({
  		'scrollTop': $target.offset().top
  	}, 1500, 'swing');
  	});

  // Выпадающее меню

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