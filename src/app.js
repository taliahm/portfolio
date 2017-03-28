console.log('Thank you so much for taking the time to look through my portfolio! I can be reached at hello@talialongname.com')

const portApp = {};

//Menu Click Function
portApp.hamburgerClick = () => {
	$('#hamburger').on('click', () => {
		let menuStatus = $('.menuInner').hasClass('menuShow')
		if(menuStatus === false) {
			$('#hamburgerIcon').addClass('hamburgerSpin').delay(500).queue(function() {
				$('#hamburgerIcon').removeClass('hamburgerSpin').addClass('hamburgerHide')
				$('.exitIcon').addClass('exitIconShow');
				$(this).dequeue();
			})
			$('.menuInner').toggleClass('menuShow')
		}
		else if (menuStatus === true) {
			$('.menuInner').toggleClass('menuShow')
			$('.exitIcon').removeClass('exitIconShow')
			$('#hamburgerIcon').removeClass('hamburgerHide')
			$('#hamburgerIcon').removeClass('hamburgerSpin')
		}
	})
}

//Click functions for portfolio images
portApp.clickPortfolio = () => {
	$('.imgContain').on('click', (e) => {
		let id = $(e.currentTarget).attr('id')
		console.log(id)
		if(id === 'spill'){
			window.open('http://talialongname.com/spill')
		}
		else if(id === 'cleanIt'){
			window.open('http://cleanit.talialongname.com')
		}
		else if(id === 'gift'){
			window.open('https://giftme.talialongname.com')
		}
		else if(id === 'charity'){
			window.open('http://talialongname.com/psdConversion/')
		}
	})
}

//Smooth scroll to page sections when clicked in hamburger menu
portApp.burgerMenuScroll = () => {
	$('#menuAbout').on('click', (e) => {
		e.preventDefault();
		let targetElem = $('#about');
		portApp.scroll(targetElem);
	});
	$('#menuSkill').on('click', (e) => {
		e.preventDefault();
		let targetElem = $('#skills');
		portApp.scroll(targetElem)
	});
	$('#menuPortfolio').on('click', (e) => {
		e.preventDefault();
		let targetElem = $('#portfolio')
		portApp.scroll(targetElem)
	})
	$('#menuContact').on('click', (e) => {
		e.preventDefault();
		let targetElem = $('#contact')
		portApp.scroll(targetElem)
	})

}

//Smooth scroll function reused 
portApp.scroll = (target) => {
	$('body, html').animate({
		scrollTop: target.offset().top}, 'fast');
}

//Events
portApp.events = () => {
	portApp.clickPortfolio();
	portApp.hamburgerClick();
	portApp.burgerMenuScroll();
}

//Animation in Header
portApp.animation = () => {
	const pinkLine = $('#pinkLine');
	const greenArrow = $('#greenArrow');
	const blueLineOne = $('#blueSquiggleOne')
	const blueLineTwo = $('#blueSquiggleTwo')
	const blueLineThree = $('#blueSquiggleThree')
	const timeline = new TimelineLite()
	timeline
		.fromTo(greenArrow, 1.5, {drawSVG: 0}, {drawSVG: "100%"}, 0.5)
		.fromTo(blueLineOne, 1, {drawSVG: 0}, {drawSVG: "100%"}, 0.5)
		.fromTo(blueLineTwo, 1, {drawSVG: 0}, {drawSVG: "100%"}, 0.7)
		.fromTo(blueLineThree, 1, {drawSVG: 0}, {drawSVG: "100%"}, 0.5)
		.fromTo(pinkLine, 1.5, {drawSVG: 0}, {drawSVG: "100%"}, 0.7)
}

//Animation in Footer
portApp.contactAnimation = () => {
	const pinkLineContact = $('#contact__pinkLine')
	const greenArrowContact = $('#contact__greenArrow')
	const blueCircleContact = $('#contact__blueCircle')
	const triangleContact = $('#contact__triangle')
	const pinkCircleContact = $('#contact__pinkCircle')
	const timelineContact = new TimelineLite({paused:true})
	timelineContact
		.fromTo(pinkLineContact, 1.5, {drawSVG: 0}, {drawSVG: "100%"}, 0.5)
		.fromTo(greenArrowContact, 1.5, {drawSVG: 0}, {drawSVG: "100%"}, 1)
		.fromTo(blueCircleContact, 1.5, {drawSVG: 0, fill: 'none'}, {drawSVG: "100%"}, 1)
		.fromTo(triangleContact, 1.5, {drawSVG: 0, fill: 'none'}, {drawSVG: "100%"}, 0)
		.fromTo(pinkCircleContact, 1.5, {drawSVG: 0, fill: 'none'}, {drawSVG: "100%"}, 0)
	const controller = new ScrollMagic.Controller();
	const scene = new ScrollMagic.Scene({
		triggerElement: '#trigger'
	})
		.on('enter', () => {
			timelineContact.play()
		})
		.addTo(controller)
}

portApp.init = () => {
	portApp.events()
	portApp.animation()
	portApp.contactAnimation()
}

$(function() {
   portApp.init();
}); 

