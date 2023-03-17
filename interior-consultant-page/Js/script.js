const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')
const heroSection = document.querySelector('.heroSection');

btn.addEventListener('click', navToggle)

function navToggle() {

  btn.classList.toggle('open');
  menu.classList.toggle('flex');
  menu.classList.toggle('hidden');
  heroSection.classList.toggle('hide-section');
}

const menuBtn = document.getElementById('menu-btn');

menuBtn.addEventListener('click', () => {
  heroSection.classList.toggle('hide-section');
  heroSection.classList.toggle('heroSection')
});