let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('pink')
}else{
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('themeD')


for (var i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log("chal raha hai");
		setTheme(mode)
	})
}

function setTheme(mode){
	if(mode == 'light'){
		document.getElementById('theme-style').href = 'css/light.css'
	}

	if(mode == 'pink'){
		document.getElementById('theme-style').href = 'css/styles.css'
	}

	if(mode == 'dark'){
		document.getElementById('theme-style').href = 'css/dark.css'
	}


	localStorage.setItem('theme', mode)
}



gsap.from('#overlay1', {
	duration: 1.5,
	x: '50%',
	opacity: 0,
	ease: 'fade',
  })

  gsap.from('#overlay2', {
	duration: 1.5,
	delay:1.5,
	y:'-15px',
	x: '-5px',
	opacity: 0,
	ease: 'slow',
  })  
  gsap.from('#overlay3', {
	duration: 1.5,
	delay:3,
	y:'-15px',
	x: '-5px',
	opacity: 0,
	ease: 'slow',
  }) 
  
  