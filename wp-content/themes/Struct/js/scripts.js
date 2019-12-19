jQuery(function( $ ) {
	'use strict';

	/* -----------------------------------------
	Responsive Menus Init with mmenu
	----------------------------------------- */
	var $mainNav   = $( '.navigation' );
	var $mobileNav = $( '#mobilemenu' );

	$mainNav.clone().removeAttr( 'id' ).removeClass().appendTo( $mobileNav );
	$mobileNav.find( 'li' ).removeAttr( 'id' );

	$mobileNav.mmenu({
		offCanvas: {
			position: 'top',
			zposition: 'front'
		},
		"autoHeight": true,
		"navbars": [
			{
				"position": "top",
				"content": [
					"prev",
					"title",
					"close"
				]
			}
		]
	});

	/* -----------------------------------------
	Main Navigation Init
	----------------------------------------- */
	$mainNav.superfish({
		delay: 300,
		animation: { opacity: 'show', height: 'show' },
		speed: 'fast',
		dropShadows: false
	});

	/* -----------------------------------------
	Responsive Videos with fitVids
	----------------------------------------- */
	$( 'body' ).fitVids({
		ignore: '.main-slider'
	});

	/* -----------------------------------------
	Image Lightbox
	----------------------------------------- */
	$( ".ci-lightbox, a[data-lightbox^='gal']" ).magnificPopup({
		type: 'image',
		mainClass: 'mfp-with-zoom',
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true
		}
	} );

	$( '.ci-video-lightbox' ).magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});

	/* -----------------------------------------
	FAQ Toggling
	----------------------------------------- */
	var $faqTitle = $( '.faq-title' );

	$faqTitle.on('click', function(e) {
		e.preventDefault();

		var $this = $(this);
		var $content = $this.parent().find('.faq-content');

		$this.toggleClass( 'faq-open' );
		$content.slideToggle('fast');
	});

	$( '.faq-section' ).first()
		.find( '.faq-wrap' ).first()
		.find('.faq-title')
		.trigger( 'click' );
	

	/* -----------------------------------------
	Back to top icon
	----------------------------------------- */
	var $btt = $( '.back-top' );

	$btt.on('click', function(e) {
		e.preventDefault();

		$('html, body').animate({
			scrollTop: 0
		}, 750);
	});

	$(window).on('scroll', function() {
		var $this = $(this);
		$btt.toggleClass( 'back-top-visible', $this.scrollTop() > 800 );
	});

	/* -----------------------------------------
	Custom Post Type Select
	----------------------------------------- */
	$( '.ci-post-select' ).on( 'change', function(e) {
		e.preventDefault();
		var $this = $( this );
		location.href = $this.val();
	});

	$( window ).on( 'load', function() {
		/* -----------------------------------------
		MatchHeight
		----------------------------------------- */
		$( '.row-equal' ).find( '[class^="col"]' ).matchHeight();

		/* -----------------------------------------
		FlexSlider Init
		----------------------------------------- */
		var homeSlider = $( '.main-slider' );

		if ( homeSlider.length ) {
			var slideshow      = homeSlider.data( 'slideshow' ),
					slideshowSpeed = homeSlider.data( 'slideshowspeed' ),
					animationSpeed = homeSlider.data( 'animationspeed' );

			homeSlider.flexslider({
				animation     : 'fade',
				slideshow     : slideshow,
				slideshowSpeed: slideshowSpeed,
				animationSpeed: animationSpeed,
				directionNav: false,
				namespace: 'ci-',
				prevText: '',
				nextText: '',
				start: function( slider ) {
					slider.removeClass( 'loading' );
				}
			});
		}

		var testimonialSlider = $( '.testimonial-slider' );
		if ( testimonialSlider.length ) {
			testimonialSlider.flexslider({
				animation     : 'fade',
				slideshow     : 1,
				directionNav: false,
				namespace: 'ci-',
				prevText: '',
				nextText: ''
			});
		}

	});

});
