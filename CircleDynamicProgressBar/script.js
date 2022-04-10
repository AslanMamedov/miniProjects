const progress = document.querySelector('.progress');
const loading = document.querySelector('.loading');

let i = 0;
const interval = setInterval(() => {
	i++;
	progress.style.width = `${i}%`
	loading.innerText = `${i}%`
	if(i === 100) {
		loading.innerText = 'Loaded'
		clearInterval(interval);
	}
}, 100)