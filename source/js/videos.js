var bodyElement = document.body;
var videoWrap = document.querySelector('.video-wrap');
var videoElement = videoWrap.querySelector('video');
var playControl = document.querySelector('.action--play');
var closeControl = document.querySelector('.action--close');

var playVideo1 = document.querySelector('.action--play1');
var playVideo2 = document.querySelector('.action--play2');
var playVideo3 = document.querySelector('.action--play3');

function init() {
	initEvents();
}

function initEvents() {
	playControl.addEventListener('click', play);
	playVideo1.addEventListener('click', play);
	playVideo2.addEventListener('click', play);
	playVideo3.addEventListener('click', play);
	closeControl.addEventListener('click', hide);
	videoElement.addEventListener('canplaythrough', allowPlay);
	videoElement.addEventListener('ended', hide);
}

function allowPlay() {
	classie.add(bodyElement, 'video-loaded');
}

function play() {
	videoElement.currentTime = 0;
	classie.remove(videoWrap, 'video-wrap--hide');
	classie.add(videoWrap, 'video-wrap--show');
	setTimeout(function() {videoElement.play(), 600});
}

function hide() {
	classie.remove(videoWrap, 'video-wrap--show');
	classie.add(videoWrap, 'video-wrap--hide');
	videoElement.pause();
}

init();