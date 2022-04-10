let position = 0;
const slidesToShow = 3;
const slidesToScroll = 2;
const container = document.querySelector('.slider-container'); 
const track = document.querySelector('.slider-track'); 
const items = document.querySelectorAll('.slider-item');
const itemCount = items.length;
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;


items.forEach(item => {
	item.style.minWidth = `${itemWidth}px`;
})

btnPrev.addEventListener('click', () => {
	const itemsLeft = Math.abs(position) / itemWidth;
	position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
	setPosition();
	checkBtns();
})
btnNext.addEventListener('click', () => {
	const itemsLeft = itemCount - (Math.abs(position) + slidesToScroll * itemWidth) / itemWidth;
	position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
	setPosition();
	checkBtns();
})

const setPosition = () => {
	track.style.transform = `translateX(${position}px)`;
}
const checkBtns = () => {
	btnPrev.disabled = position === 0;
	btnNext.disabled = position <= -(itemCount - slidesToShow) * itemWidth;
}

checkBtns();

