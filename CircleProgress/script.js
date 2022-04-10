const circle = document.querySelector('.progress-ring__circle');
const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;
const procentEl = document.getElementById('circle')

let sum = 0;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = circumference;

function setProgress(procent) {
	const offset = circumference - procent / 100 * circumference;
	circle.style.strokeDashoffset = offset;
}

let circleStart = setInterval(() => {
	sum++
	setProgress(sum)
	procentEl.innerText = `${sum}%`;
	if(sum === 100) {
		clearInterval(circleStart);
	}
}, 100)

