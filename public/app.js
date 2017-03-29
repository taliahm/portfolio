(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

console.log('Thank you so much for taking the time to look through my portfolio! I can be reached at hello@talialongname.com');

var portApp = {};

//Menu Click Function
portApp.hamburgerClick = function () {
	$('#hamburger').on('click', function () {
		var menuStatus = $('.menuInner').hasClass('menuShow');
		if (menuStatus === false) {
			$('#hamburgerIcon').addClass('hamburgerSpin').delay(500).queue(function () {
				$('#hamburgerIcon').removeClass('hamburgerSpin').addClass('hamburgerHide');
				$('.exitIcon').addClass('exitIconShow');
				$(this).dequeue();
			});
			$('.menuInner').toggleClass('menuShow');
		} else if (menuStatus === true) {
			$('.menuInner').toggleClass('menuShow');
			$('.exitIcon').removeClass('exitIconShow');
			$('#hamburgerIcon').removeClass('hamburgerHide');
			$('#hamburgerIcon').removeClass('hamburgerSpin');
		}
	});
};

//Click functions for portfolio images
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
			window.open('http://talialongname.com/psdConversion/');
		}
	});
};

//Skills Click
portApp.skillFlip = function () {
	$('.skill__iconContain').on('mouseover', function (e) {
		console.log(e);
		var id = $(this).attr('id');
		$(id).addClass('showText');
	});
};

//Smooth scroll to page sections when clicked in hamburger menu
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

//Smooth scroll function reused 
portApp.scroll = function (target) {
	$('body, html').animate({
		scrollTop: target.offset().top }, 'fast');
};

//Events
portApp.events = function () {
	portApp.clickPortfolio();
	portApp.hamburgerClick();
	portApp.burgerMenuScroll();
	portApp.skillFlip();
};

//Animation in Header
portApp.animation = function () {
	var pinkLine = $('#pinkLine');
	var greenArrow = $('#greenArrow');
	var blueLineOne = $('#blueSquiggleOne');
	var blueLineTwo = $('#blueSquiggleTwo');
	var blueLineThree = $('#blueSquiggleThree');
	var timeline = new TimelineLite();
	timeline.fromTo(greenArrow, 1.5, { drawSVG: 0 }, { drawSVG: "100%" }, 0.5).fromTo(blueLineOne, 1, { drawSVG: 0 }, { drawSVG: "100%" }, 0.5).fromTo(blueLineTwo, 1, { drawSVG: 0 }, { drawSVG: "100%" }, 0.7).fromTo(blueLineThree, 1, { drawSVG: 0 }, { drawSVG: "100%" }, 0.5).fromTo(pinkLine, 1.5, { drawSVG: 0 }, { drawSVG: "100%" }, 0.7);
};

//Animation in Footer
portApp.contactAnimation = function () {
	var pinkLineContact = $('#contact__pinkLine');
	var greenArrowContact = $('#contact__greenArrow');
	var blueCircleContact = $('#contact__blueCircle');
	var triangleContact = $('#contact__triangle');
	var pinkCircleContact = $('#contact__pinkCircle');
	var timelineContact = new TimelineLite({ paused: true });
	timelineContact.fromTo(pinkLineContact, 1.5, { drawSVG: 0 }, { drawSVG: "100%" }, 0.5).fromTo(greenArrowContact, 1.5, { drawSVG: 0 }, { drawSVG: "100%" }, 1).fromTo(blueCircleContact, 1.5, { drawSVG: 0, fill: 'none' }, { drawSVG: "100%" }, 1).fromTo(triangleContact, 1.5, { drawSVG: 0, fill: 'none' }, { drawSVG: "100%" }, 0).fromTo(pinkCircleContact, 1.5, { drawSVG: 0, fill: 'none' }, { drawSVG: "100%" }, 0);
	var controller = new ScrollMagic.Controller();
	var scene = new ScrollMagic.Scene({
		triggerElement: '#trigger'
	}).on('enter', function () {
		timelineContact.play();
	}).addTo(controller);
};

portApp.init = function () {
	portApp.events();
	portApp.animation();
	portApp.contactAnimation();
};

$(function () {
	portApp.init();
});

},{}]},{},[1]);
