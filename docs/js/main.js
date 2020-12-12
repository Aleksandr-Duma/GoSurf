$(function(){

	$('.header__slider').slick({
		infinite: true,
		fade: true,
		prevArrow: '<img class = "slider-arrows slider-arrows__left" src="img/arrow-left.svg" alt="arrow">',
		nextArrow: '<img class = "slider-arrows slider-arrows__right" src="img/arrow-right.svg" alt="arrow">',
		asNavFor: '.slider-dots',
		responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        arrows: false,
	        dots: true,
	        fade: false
	      }
	    }
	   ]
	});

	$('.slider-dots').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		asNavFor: '.header__slider',
		responsive: [
	    {
	      breakpoint: 890,
	      settings: "unslick"
	    }
	  ]
	});

	$('.surf__slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<img class = "slider-arrows slider-arrows__left" src="img/arrow-left.svg" alt="arrow">',
		nextArrow: '<img class = "slider-arrows slider-arrows__right" src="img/arrow-right.svg" alt="arrow">',
		asNavFor: '.slider-map',
		responsive: [
	    {
	      breakpoint: 1040,
	      settings: {
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 890,
	      settings: {
	        slidesToShow: 2,
	        centerMode: true
	      }
	    },
	    {
	      breakpoint: 560,
	      settings: {
	        slidesToShow: 1,
	        centerMode: false,
	        arrows: false,
	        dots: true
	      }
	    }
	  ]
	});

	$('.slider-map').slick({
		slidesToShow: 8,
		slidesToScroll: 1,
		arrows: false,
		focusOnSelect: true,
		asNavFor: '.surf__slider',
		responsive: [
	    {
	      breakpoint: 1040,
	      settings: {
	        slidesToShow: 3,
	        infinite: true,
	        centerPadding: '10px'
	      }
	    },
	     {
	      breakpoint: 890,
	      settings: {
	        slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 560,
	      settings: {
	      	dots: true,
	        slidesToShow: 1
	      }
	    }
	  ]
	});

	$('.benefits__slider').slick({
		infinite: true,
		fade: true,
		prevArrow: '<img class = "slider-arrows slider-arrows__left" src="img/arrow-left.svg" alt="arrow">',
		nextArrow: '<img class = "slider-arrows slider-arrows__right" src="img/arrow-right.svg" alt="arrow">'
	});

	$('.shop__slider').slick({
		infinite: true,
		prevArrow: '<img class = "slider-arrows slider-arrows__left" src="img/arrow-left.svg" alt="arrow">',
		nextArrow: '<img class = "slider-arrows slider-arrows__right" src="img/arrow-right.svg" alt="arrow">'
	});

/*----------------------Custom input type number-------------------------*/
	$('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
    $('.quantity').each(function() {
      	var spinner = $(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

    	btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      	btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });
    });

/*------------------------Calculate page Sleep-----------------------------*/
    $('.quantity-button').on('click', function(){
    	let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() - 1) * $('.summ').data('guests');
    	$('.summ').html('$' + summ);
    });

    let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() - 1) * $('.summ').data('guests');
    $('.summ').html('$' + summ);

/*----------------------Shop surfboard buttons-----------------------------*/
    $('.surfboard__discription-circle').on('click', function(){
    	$(this).toggleClass('active');
    });

/*----------------------------Mobile menu----------------------------------*/ 
    $('.menu__btn').on('click', function(){
    	$('.menu, .menu__btn').toggleClass('active');

    	$('a[href^="#"]').on('click', function(){
    		$('.menu, .menu__btn').removeClass('active');
    	});
    });

/*--------------------------------Scroll------------------------------------*/ 
    $('a[href^="#"]').click(function(){
		var target = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(target).offset().top
		},800);
	});

	$('.header__search-img').on('click', function(){
		$('.form__search').toggleClass('active');
	});

/*-----------------------------Animate.js----------------------------------*/
    new WOW().init();

});


