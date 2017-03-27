(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

console.log('hello');

var portApp = {};

portApp.hamburgerClick = function () {
	$('#hamburger').on('click', function () {
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

portApp.parallax = function () {
	var controller = new ScrollMagic.Controller();
	var scene = new ScrollMagic.Scene({
		duration: 300 })
	// .setClassToggle('.headerAndProfileWrap', 'backgroundColor')
	.setPin('header').addTo(controller);

	// const sceneTwo = new ScrollMagic.Scene({
	// 	triggerElement: '#unpin'
	// })
	// .removePin('header')
	// .addTo(controller)
	portApp.windowResize(scene);
};

// portApp.parallax = () => {
// 	const controllerLeave = new ScrollMagic.Controller({
// 		globalSceneOptions: {
// 			triggerHook: 'onLeave'
// 		}
// 	});
// 	const controllerEnter = new ScrollMagic.Controller({
// 		globalSceneOptions: {
// 			triggerHook: 'onEnter'
// 		}
// 	})
// 	const header = $('header')
// 	const sceneOne = new ScrollMagic.Scene({
// 		// triggerElement: '.overflowWrap'
// 		// duration: 300
// 		offset: 0
// 	})
// 	.setPin('header', {spacerClass: '.spacer'})
// 	.addTo(controllerEnter)

// 	const sceneTwo = new ScrollMagic.Scene({
// 		triggerElement: '.profile__text',
// 		reverse: true
// 	})
// 	// .on('enter', function() {
// 	// 	sceneOne.destroy(true)
// 	// })
// 	.on('enter', function() {
// 		sceneOne.removePin('header')
// 	})
// 	.addTo(controllerLeave)


// 	// const scene = new ScrollMagic.Scene({
// 	// 	duration: 300, //this is how long scene lasts
// 	// 	offset: 0,
// 	// 	// triggerElement: 'header' //this is where the scene starts
// 	// })
// 	// // .setClassToggle('.headerAndProfileWrap', 'backgroundColor')
// 	// .setPin('header')
// 	// .addTo(controller);

// 	// scene.on('leave', () => {
// 	// 	console.log('left')
// 	// })
// 	// const sceneTwo = new ScrollMagic.Scene({
// 	// 	triggerElement: '#unpin'
// 	// })
// 	// .removePin('header')
// 	// .addTo(controller)
// 	portApp.windowResize(sceneOne)
// }

portApp.windowResize = function (scene) {
	window.onresize = function () {
		console.log('we sizing');
		console.log(scene);
		scene.destroy(true);
	};
};

// portApp.windowResize = (scene) => {
// 	window.onresize = () => {
// 		scene.refresh()
// 	}
// }

portApp.hoverImg = function () {
	$('.pinkLine').on('mouseover', function () {
		console.log('moused');
	});
};

portApp.scroll = function (target) {
	$('body, html').animate({
		scrollTop: target.offset().top }, 'fast');
};

portApp.events = function () {
	portApp.clickPortfolio();
	portApp.hamburgerClick();
	portApp.burgerMenuScroll();
};

portApp.animation = function () {
	var pinkLine = $('#pinkLine');
	var greenArrow = $('#greenArrow');
	var blueLineOne = $('#blueSquiggleOne');
	var blueLineTwo = $('#blueSquiggleTwo');
	var blueLineThree = $('#blueSquiggleThree');
	console.log(greenArrow);
	var timeline = new TimelineLite();
	timeline.fromTo(greenArrow, 2, { drawSVG: 0 }, { drawSVG: "100%" }, 1).fromTo(blueLineOne, 1, { drawSVG: 0 }, { drawSVG: "100%" }, 1).fromTo(blueLineTwo, 1, { drawSVG: 0 }, { drawSVG: "100%" }, 1).fromTo(blueLineThree, 1, { drawSVG: 0 }, { drawSVG: "100%" }, 1).fromTo(pinkLine, 1, { drawSVG: 0 }, { drawSVG: "100%" }, 1);
	console.log(timeline);
};

portApp.init = function () {
	portApp.events();
	portApp.animation();
	// portApp.parallax()
	// portApp.windowResize()
};

$(function () {
	portApp.init();
});

},{}]},{},[1]);
