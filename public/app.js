(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

console.log('hello');

var portApp = {};

portApp.scroll = function () {};

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

portApp.events = function () {
	portApp.clickPortfolio();
	portApp.hamburgerClick();
};

portApp.init = function () {
	portApp.events();
};

$(function () {
	portApp.init();
});

},{}]},{},[1]);
