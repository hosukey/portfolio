'use strict';

// Contact Form
const form = document.querySelector('.contact-form');
async function handleSubmit(event) {
  event.preventDefault();
  let status = document.querySelector('.my-form-status');
  let data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: 'application/json',
    },
  })
    .then((response) => {
      status.innerHTML = 'Thanks for your submission!';
      form.reset();
    })
    .catch((error) => {
      status.innerHTML = 'Oops! There was a problem submitting your form';
    });
}
form.addEventListener('submit', handleSubmit);

// Hamburger Menu
const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.nav-container');
const menuItem = document.querySelectorAll('.nav-container li');
const bodyTag = document.querySelector('body');
let showMenu = false;

const hamburgerMenuOpen = function () {
  hamburger.classList.add('open');
  nav.classList.add('open');
  menuNav.classList.add('open');
  menuItem.forEach((item) => item.classList.add('open'));
  //prevent scrolling in the body behind menu
  bodyTag.style = 'overflow: hidden';
  showMenu = true;
};

const hamburgerMenuClose = function () {
  hamburger.classList.remove('open');
  nav.classList.remove('open');
  menuNav.classList.remove('open');
  menuItem.forEach((item) => item.classList.remove('open'));
  bodyTag.style = 'overflow: scroll';
  showMenu = false;
};

function toggleMenu() {
  if (!showMenu) {
    hamburgerMenuOpen();
  } else {
    hamburgerMenuClose();
  }
}

window.addEventListener('resize', function () {
  if (nav.classList.contains('open')) {
    hamburgerMenuClose();
  }
});

menuBtn.addEventListener('click', toggleMenu);

// AOS CSS

AOS.init({
  disable: false,
  startEvent: 'DOMContentLoaded',
  initClassName: 'aos-init',
  animatedClassName: 'aos-animate',
  useClassNames: false,
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay: 99,
  offset: 120,
  delay: 0,
  duration: 400,
  easing: 'ease',
  once: false,
  mirror: false,
  anchorPlacement: 'top-bottom',
});
