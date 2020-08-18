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
		console.log('Option clicked:', mode)
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