
console.log('jQuery is working');
$( "div" ).first().remove()





//________WOW___________ ANIMATE SCROLL REPEATER
  WOW.prototype.addBox = function(element) {
    this.boxes.push(element);
  };
  var wow = new WOW({
	mobile: false,  // default
	live: true // default  	
  });
  wow.init();
  $('.wow').on('scrollSpy:exit', function() {
    $(this).css({
      'visibility': 'hidden',
      'animation-name': 'none'
    }).removeClass('animated');
    wow.addBox(this);
  }).scrollSpy();
//____________________________________________



// Preloader
$(window).load(function(){
	$('.preloader').fadeOut('slow',function(){$(this).remove();});

});
console.log('456')

// Mob_Menu
function change(){
	$('.navbar-toggle').toggleClass("change");
	$('.header_nav').toggle(500);
	$('.line').toggle(500);
	$('.header_title').toggleClass('unvis');
	$('.title_span').toggleClass('unvis');
	$('.prime_button.top').toggleClass('unvis');
}

// Header Scroll
$(window).scroll(function () {
	if ($(window).scrollTop() > 100) {
		$(".header").removeClass("animated-header");
	} else{	
		$(".header").addClass("animated-header");
	}
})

// SLIDER
$(".about_slider, .feed_slider").slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	prevArrow: $('.arr_prev'),
	nextArrow: $('.arr_next')
})


//Прокрутка к секции (по высоте)
//https://webcomplex.com.ua/jquery/plavnyj-skroll-posle-nazhatiya-na-yakornuyu-ssylku.html

  $(".header_nav").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    // Если есть мобильное меню - скрываем
    if ($('.navbar-toggle').is(':visible')) {
    	change('navbar-toggle')
    }
    

    //забираем идентификатор блока с атрибута href
    var id  = $(this).attr('href');

    //узнаем высоту от начала страницы до блока на который ссылается якорь
      topp = $(id).offset().top;
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: topp}, 1000);
  });

/*
// Photo_ZOOMER

$(".modal_zoom, .modal_content").on("click", function(){
	$(".modal_content").css("transform", "scale(0)");
	$(".modal_zoom").css("display", "none");
});

$(".photo_item").on("click", function(){
	var src = $(this).attr("src");
	$(".modal_content").attr("src", src);
	$(".modal_zoom").css("display", "block");
	$(".modal_content").css("transform", "scale(1)");

});

*/


























	//console.log($('.header_nav'));	

	

