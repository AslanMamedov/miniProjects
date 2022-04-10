const circle = document.querySelector('.progress-circle');
const loading = document.querySelector('.loading');
const circumference= circle.getTotalLength();
let i = 0;

const interval = setInterval(() =>  {
	loading.innerHTML = ''
	i++;
	circle.style.strokeDashoffset = circumference - (i / 100) * circumference;
	loading.innerHTML = `${i}%`
	if(i === 100) {
		clearInterval(interval);
	}
}, 10)
