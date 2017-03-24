console.log('hello')

const portApp = {};


portApp.scroll = () => {
	
}

portApp.clickPortfolio = () => {
	$('.imgContain').on('click', (e) => {
		console.log('clicked an image contain')
		console.log($('.imgContain'))
		let id = $('.imgContain').attr('id')
		console.log(id)
		if(id === 'spill'){
			window.open('http://talialongname.com/spill')
		}
	})
}

portApp.events = () => {
	portApp.clickPortfolio()
}


portApp.init = () => {
	portApp.events()
}

$(function() {
   portApp.init();
}); 

