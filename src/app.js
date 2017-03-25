console.log('hello')

const portApp = {};


portApp.scroll = () => {

}

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

portApp.events = () => {
	portApp.clickPortfolio()
	portApp.hamburgerClick()
}


portApp.init = () => {
	portApp.events()
}

$(function() {
   portApp.init();
}); 

