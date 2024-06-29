const $menuIcon = document.querySelector('.menu__icon');
const $menuBody = document.querySelector('.menu__body');

$menuIcon.addEventListener('click', () => {
	$menuIcon.classList.toggle('__active')
	$menuBody.classList.toggle('__active')
})