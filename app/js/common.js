window.onload = function(){
	$('.section-13-owl').owlCarousel({
		items: 1,
		nav: true, 
		navText: "",
		dots: true,
	});

	/* всплывающая форма обратной связи */
	$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in',
	});

	var scroolTo = function(event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 500);
	};

	$('.header-bottom').click(scroolTo);
	
	$(".block-right__text, .owl-text, .inner-text").mCustomScrollbar({
		axis: "y",
		theme:"dark"
	});

	$('#callback .block__text').hide();
	$('.form__open').click(function(){
	    $(this).parent().siblings(".block__text").slideToggle();
	});

	$(".callback .btn").click(function(e){
		e.preventDefault();
		if($('input[name="callback"]').prop("checked")){
			e.preventDefault();
			console.log($('input:radio:checked').prop("checked"));
		} else {
			console.log($('input:radio:checked'));
		}
	});


	function getRandomArbitrary(min, max) {
	  return Math.random() * (max - min) + min;
	}

	function messageInterval(){
		if ($(window).width() >= '768'){
			if (!$('.header-message').hasClass('show-js')) {
				setInterval(function(){
					setTimeout(function(){
						$(".header-message").toggleClass('show-js');
					}, getRandomArbitrary(4000, 5000));
				}, getRandomArbitrary(8000, 12000));
			}
		}
	}
		
	messageInterval();

};