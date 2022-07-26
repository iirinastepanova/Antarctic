
// навигация с js
const nav = document.querySelector('[data-selector="navigation"]');
const header = document.querySelector('[data-selector="header"]');
const toggle = document.querySelector('[data-selector="button"]');

nav.classList.remove('navigation--nojs');
nav.classList.add('navigation--closed');

toggle.addEventListener('click', function () {
  if (nav.classList.contains('navigation--closed')) {
    nav.classList.remove('navigation--closed');
    nav.classList.add('navigation--opened');
  } else {
    nav.classList.add('navigation--closed');
    nav.classList.remove('navigation--opened');
  }
})
