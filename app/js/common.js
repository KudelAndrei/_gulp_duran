window.onload = function(){
	var check = false;
	var checkVal = '';
	var country = $('#user_country').val();

	switch(country){
		case 'BLR':
			$('.country .country__img img').attr('src', 'http://dukan-cocktail.ru/2687/img/by.png');
			$('.country strong').text('Беларуси');
			break;
		case 'RUS':
			$('.country .country__img img').attr('src', 'http://dukan-cocktail.ru/2687/img/ru.png');
			$('.country strong').text('России');
			break;
		case 'KAZ':
			$('.country .country__img img').attr('src', 'http://dukan-cocktail.ru/2687/img/kz.png');
			$('.country strong').text('Казахстане');
			break;
		default:
			$('.country .country__img img').attr('src', 'http://dukan-cocktail.ru/2687/img/ru.png');
			$('.country strong').text('России');
			break;
	} 

	$('select.country').each(function(){
		$(this).change(function() {
				var country = $(this).val();
				switch(country){
					case 'BLR':
						$('.country .country__img img').attr('src', 'http://dukan-cocktail.ru/2687/img/by.png');
						$('.country strong').text('Беларуси');
						break;
					case 'RUS':
						$('.country .country__img img').attr('src', 'http://dukan-cocktail.ru/2687/img/ru.png');
						$('.country strong').text('России');
						break;
					case 'KAZ':
						$('.country .country__img img').attr('src', 'http://dukan-cocktail.ru/2687/img/kz.png');
						$('.country strong').text('Казахстане');
						break;
					default:
						$('.country .country__img img').attr('src', 'http://dukan-cocktail.ru/2687/img/ru.png');
						$('.country strong').text('России');
						break;
				}
		})
	});

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

	$(".callback, .callback-popup").on('submit',function(e){
		e.preventDefault();
		var country = $('#country').val();
		var cid = $('input[name="cid"]').val();
		var name = $('input[name="name"]').val();
		var tel = $('input[name="telephone"]').val();
		if(check){
			e.preventDefault();
			$.ajax({
				url: "/order/?short=true",
				type: "POST",
				data: {cid: cid, order: 1, country: country, name: name, telephone: tel, comment: checkVal },
				success: function() {
					$('#callback').magnificPopup('close');
					$.magnificPopup.open({
						items: {
							src: '#send',
							type: 'inline'
						}
					});
					setTimeout(function(){
						$('#send').magnificPopup('close');
					}, 2000);
				}
			});
		} else {
			$.magnificPopup.open({
				items: {
					src: '#callback'
				}
			});
		}
	});

	$('input[name="callback"]').on('change', function(){
		$('input[name="callback"]').each(function(){
			$('input[name="callback"]').prop('checked', 'false');
		});
		$(this).prop('checked', 'true');
		check = true;
		checkVal = $(this).val();
	})

	function getRandomArbitrary(min, max) {
		return Math.random() * (max - min) + min;
	}

	function messageInterval(){
		if ($(window).width() >= '768'){
			if (!$('.header-message').hasClass('show-js')) {
				// setInterval(function(){
				// 	setTimeout(function(){
				// 		$(".header-message").toggleClass('show-js');
				// 	}, getRandomArbitrary(4000, 5000));
				// }, getRandomArbitrary(8000, 12000));
			}
		}
	}

	$(window).on('scroll', function(){
		var topWindow = $(window).scrollTop() + $(window).height();
		$('.header').each(function(){
			var headBottom = $(this).offset().top + $(this).height();
			if (topWindow >= headBottom) {
				$(this).children('.header-message').removeClass('opacity-js');
				$(this).children('.header-message').addClass('show-js');
				setTimeout(function(){
					$('.header-message').addClass('opacity-js');
				}, 4000);
			}
		});
	})

	$('.header-message-close').on('click', function(){
		$(this).parent().css('display','none');
	});

	messageInterval();

};