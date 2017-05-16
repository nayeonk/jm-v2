var container = document.getElementById( 'container' ),
	trigger = container.querySelector( 'button.trigger' );

function toggleContent() {
	if( classie.has( container, 'photos__container--open' ) ) {
		classie.remove( container, 'photos__container--open' );
		classie.remove( trigger, 'trigger--active' );
		window.addEventListener( 'scroll', noscroll );
	}
	else {
		classie.add( container, 'photos__container--open' );
		classie.add( trigger, 'trigger--active' );
		window.removeEventListener( 'scroll', noscroll );
	}
}

function noscroll() {
	window.scrollTo( 0, 0 );
}

// reset scrolling position
document.body.scrollTop = document.documentElement.scrollTop = 0;

// disable scrolling
window.addEventListener( 'scroll', noscroll );

trigger.addEventListener( 'click', toggleContent );


// Manage slides
var slideIndex = 1;
var nextSlideIndex = 0;
var prevSlideIndex = 0;

showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex = slideIndex + n);
}

function showSlides(n) {
	var imagePath = 'assets/images/photos/';

	// Change the main slide
	var slides = document.querySelectorAll('.slide');

	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for(var i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}
	slides[slideIndex-1].style.display = "block";

	// Change the thumbnails of next/prev icons
	var prev = document.querySelector('.nav__prev div');
	var next = document.querySelector('.nav__next div');

	nextSlideIndex = slideIndex + 1;
	prevSlideIndex = slideIndex - 1;

	if(nextSlideIndex > slides.length) {
		nextSlideIndex = 1;
	}
	if(prevSlideIndex < 1) {
		prevSlideIndex = slides.length;
	}

	next.style.backgroundImage = 'url(' + imagePath + nextSlideIndex +'_500.jpg)';
	prev.style.backgroundImage = 'url(' + imagePath + prevSlideIndex +'_500.jpg)';

	// Change the links for each device size download
	document.querySelector('.nav__content-link-mobile').href = imagePath + slideIndex + '_1920.jpg';
	document.querySelector('.nav__content-link-tablet').href = imagePath + slideIndex + '_2048.jpg';
	document.querySelector('.nav__content-link-hd').href = imagePath + slideIndex + '_1080.jpg';
	document.querySelector('.nav__content-link-4k').href = imagePath + slideIndex + '_2160.jpg';
}

// Change slide according to which item user has clicked on
$('.item').on('click', function() {
	var itemIndex = $(this).data('index');
	toggleContent();
	showSlides(slideIndex = itemIndex);
});