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
	
};