console.log('hello')

const portApp = {};



portApp.hamburgerClick = () => {
	$('#hamburger').on('click', () => {
		// e.preventDefault()
		console.log('HAMBURGER')
		console.log($('#hamburger'))
		$('.menuInner').toggleClass('menuShow')
	})
}

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
			window.open('http://talialongname.com/TaliaMercyHeart')
		}
	})
}

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

portApp.scroll = (target) => {
	$('body, html').animate({
		scrollTop: target.offset().top}, 'fast');
}

portApp.events = () => {
	portApp.clickPortfolio();
	portApp.hamburgerClick();
	portApp.burgerMenuScroll();
}


portApp.init = () => {
	portApp.events()
	// portApp.parallax()
}

$(function() {
   portApp.init();
}); 

