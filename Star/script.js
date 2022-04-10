const ratingItemsList = document.querySelectorAll('.rating__item');
const ratingItemsArray = [...ratingItemsList];

ratingItemsArray.forEach((item) => {
	item.addEventListener('click', () => {
		const {itemValue} = item.dataset;
		item.parentNode.dataset.totalValue = itemValue;
	})
})