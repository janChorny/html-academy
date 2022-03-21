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