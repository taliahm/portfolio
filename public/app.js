(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

console.log('hello');

var portApp = {};

portApp.hamburgerClick = function () {
	$('#hamburger').on('click', function () {
		// e.preventDefault()
		console.log('HAMBURGER');
		console.log($('#hamburger'));
		$('.menuInner').toggleClass('menuShow');
	});
};

portApp.clickPortfolio = function () {
	$('.imgContain').on('click', function (e) {
		var id = $(e.currentTarget).attr('id');
		console.log(id);
		if (id === 'spill') {
			window.open('http://talialongname.com/spill');
		} else if (id === 'cleanIt') {
			window.open('http://cleanit.talialongname.com');
		} else if (id === 'gift') {
			window.open('https://giftme.talialongname.com');
		} else if (id === 'charity') {
			window.open('http://talialongname.com/TaliaMercyHeart');
		}
	});
};

portApp.burgerMenuScroll = function () {
	$('#menuAbout').on('click', function (e) {
		e.preventDefault();
		var targetElem = $('#about');
		portApp.scroll(targetElem);
	});
	$('#menuSkill').on('click', function (e) {
		e.preventDefault();
		var targetElem = $('#skills');
		portApp.scroll(targetElem);
	});
	$('#menuPortfolio').on('click', function (e) {
		e.preventDefault();
		var targetElem = $('#portfolio');
		portApp.scroll(targetElem);
	});
	$('#menuContact').on('click', function (e) {
		e.preventDefault();
		var targetElem = $('#contact');
		portApp.scroll(targetElem);
	});
};

// portApp.parallax = () => {
// 	const controller = new ScrollMagic.Controller();
// 	new ScrollMagic.Scene({
// 		// duration: 1000, //this is how long scene lasts
// 		offset: 0,
// 		// triggerElement: '.greenArrow' //this is where the scene starts
// 	})
// 	.setClassToggle('.headerAndProfileWrap', 'backgroundColor')
// 	.setPin('.text')
// 	.addTo(controller);
// }

portApp.scroll = function (target) {
	$('body, html').animate({
		scrollTop: target.offset().top }, 'fast');
};

portApp.events = function () {
	portApp.clickPortfolio();
	portApp.hamburgerClick();
	portApp.burgerMenuScroll();
};

portApp.init = function () {
	portApp.events();
	// portApp.parallax()
};

$(function () {
	portApp.init();
});

},{}]},{},[1]);
