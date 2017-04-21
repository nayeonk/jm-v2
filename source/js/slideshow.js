var slideIndex = 1;
var nextSlideIndex = 0;
var prevSlideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex = slideIndex + n);
}

function showSlides(n) {
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

	next.style.backgroundImage = 'url(assets/images/gallery/' + nextSlideIndex +'_500.jpg)';
	prev.style.backgroundImage = 'url(assets/images/gallery/' + prevSlideIndex +'_500.jpg)';

	// Change the links for each
	var imagePath = 'assets/images/gallery/';
	document.querySelector('.nav__content-link-mobile').href = imagePath + slideIndex + '_1920.jpg';
	document.querySelector('.nav__content-link-tablet').href = imagePath + slideIndex + '_2048.jpg';
	document.querySelector('.nav__content-link-hd').href = imagePath + slideIndex + '_1080.jpg';
	document.querySelector('.nav__content-link-4k').href = imagePath + slideIndex + '_2160.jpg';
}