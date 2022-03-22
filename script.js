"use strict"
//hamburger menu
const hamburger = document.querySelector('.hamburger');
const headerList = document.querySelector('.header__list');
const navLinks = document.querySelectorAll('.header__item');

function toggleMenu() {
	hamburger.classList.toggle('open');
	headerList.classList.toggle('open');
}
hamburger.addEventListener('click', toggleMenu);

function closeMenu() {
	hamburger.classList.remove('open');
	headerList.classList.remove('open');
}
navLinks.forEach((el) => el.addEventListener('click', closeMenu));

//scroll button modified
function scrollTo(to, duration = 700) {
	const
		element = document.scrollingElement || document.documentElement,
		start = element.scrollTop,
		change = to - start,
		startDate = +new Date(),
		// t = current time
		// b = start value
		// c = change in value
		// d = duration
		easeInOutQuad = function (t, b, c, d) {
			t /= d / 2;
			if (t < 1) return c / 2 * t * t + b;
			t--;
			return -c / 2 * (t * (t - 2) - 1) + b;
		},
		animateScroll = function () {
			const currentDate = +new Date();
			const currentTime = currentDate - startDate;
			element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));
			if (currentTime < duration) {
				requestAnimationFrame(animateScroll);
			}
			else {
				element.scrollTop = to;
			}
		};
	animateScroll();
}

document.addEventListener('DOMContentLoaded', function () {
	let btn = document.querySelector('#toTop');
	window.addEventListener('scroll', function () {
		// If scroll further than 599px, show button
		if (pageYOffset > 100) {
			btn.classList.add('show');
			// Else hide button
		} else {
			btn.classList.remove('show');
		}
	});

	// Onclick scroll to the top
	btn.onclick = function (click) {
		click.preventDefault();
		scrollTo(0, 400);
	}
});