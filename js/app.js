const container = document.querySelector('.container')
const switchBtn = document.querySelector('.switch')
let x = true
switchBtn.addEventListener('click', () => {
	container.classList.toggle('light')
	if (x) {
		switchBtn.innerHTML = 'Dark Mode'
		x = false
	} else {
		switchBtn.innerHTML = 'Light Mode'
		x = true
	}
	
})