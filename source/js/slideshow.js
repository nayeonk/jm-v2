var slideIndex = 1;
var nextSlideIndex = 0;
var prevSlideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex = slideIndex + n);
}

function showSlides(n) {
	var slides = document.querySelectorAll('.slide');
	var prev = document.querySelector('.nav__prev div');
	var next = document.querySelector('.nav__next div');

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

	nextSlideIndex = slideIndex + 1;
	prevSlideIndex = slideIndex - 1;

	if(nextSlideIndex > slides.length) {
		nextSlideIndex = 1;
	}
	if(prevSlideIndex < 1) {
		prevSlideIndex = slides.length;
	}

	next.style.backgroundImage = 'url(assets/images/gallery/item' + nextSlideIndex +'-thumb.jpg)';
	prev.style.backgroundImage = 'url(assets/images/gallery/item' + prevSlideIndex +'-thumb.jpg)';
}