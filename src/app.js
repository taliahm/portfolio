console.log('hello')

const portApp = {};



portApp.hamburgerClick = () => {
	$('#hamburger').on('click', () => {
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
// 	const controllerLeave = new ScrollMagic.Controller();
// 	const scene = new ScrollMagic.Scene({
// 		duration: 300, //this is how long scene lasts
// 		offset: 0,
// 		// triggerElement: 'header' //this is where the scene starts
// 	})
// 	// .setClassToggle('.headerAndProfileWrap', 'backgroundColor')
// 	.setPin('header')
// 	.addTo(controller);

// 	scene.on('leave', () => {
// 		console.log('left')
// 	})
// 	// const sceneTwo = new ScrollMagic.Scene({
// 	// 	triggerElement: '#unpin'
// 	// })
// 	// .removePin('header')
// 	// .addTo(controller)
// 	portApp.windowResize(scene)
// }

portApp.parallax = () => {
	const controllerLeave = new ScrollMagic.Controller({
		globalSceneOptions: {
			triggerHook: 'onLeave'
		}
	});
	const controllerEnter = new ScrollMagic.Controller({
		globalSceneOptions: {
			triggerHook: 'onEnter'
		}
	})
	const header = $('header')
	const sceneOne = new ScrollMagic.Scene({
		// triggerElement: '.overflowWrap'
		// duration: 300
		offset: 0
	})
	.setPin('header', {spacerClass: '.spacer'})
	.addTo(controllerEnter)

	const sceneTwo = new ScrollMagic.Scene({
		triggerElement: '.profile__text',
		reverse: true
	})
	// .on('enter', function() {
	// 	sceneOne.destroy(true)
	// })
	.on('enter', function() {
		sceneOne.removePin('header')
	})
	.addTo(controllerLeave)


	// const scene = new ScrollMagic.Scene({
	// 	duration: 300, //this is how long scene lasts
	// 	offset: 0,
	// 	// triggerElement: 'header' //this is where the scene starts
	// })
	// // .setClassToggle('.headerAndProfileWrap', 'backgroundColor')
	// .setPin('header')
	// .addTo(controller);

	// scene.on('leave', () => {
	// 	console.log('left')
	// })
	// const sceneTwo = new ScrollMagic.Scene({
	// 	triggerElement: '#unpin'
	// })
	// .removePin('header')
	// .addTo(controller)
	portApp.windowResize(sceneOne)
}

portApp.windowResize = (scene) => {
	window.onresize = () => {
		console.log('we sizing')
		console.log(scene)
		scene.destroy(true)
	}
}

// portApp.windowResize = (scene) => {
// 	window.onresize = () => {
// 		scene.refresh()
// 	}
// }

portApp.hoverImg = () => {
	$('.pinkLine').on('mouseover', () => {
		console.log('moused')
	})
}

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
	portApp.parallax()
	// portApp.windowResize()
}

$(function() {
   portApp.init();
}); 

