document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.querySelector('.main-nav ul');
  if (toggle && menu) {
    toggle.addEventListener('click', function () { menu.classList.toggle('open'); });
  }
  var yearSpan = document.getElementById('year');
  if (yearSpan) { yearSpan.textContent = new Date().getFullYear(); }
});

document.addEventListener('DOMContentLoaded', function () {
  const hero = document.querySelector('.hero-carousel');
  if (!hero) return;

  const track = hero.querySelector('.hero-track');
  const photos = hero.querySelectorAll('.hero-photo');
  const previous = hero.querySelector('.hero-prev');
  const next = hero.querySelector('.hero-next');
  const counter = hero.querySelector('.hero-counter');

  if (!track || !photos.length || !previous || !next || !counter) return;

  let current = 0;

  function showPhoto(index) {
    current = (index + photos.length) % photos.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    counter.textContent = `Photo ${current + 1} of ${photos.length}`;
  }

  previous.addEventListener('click', function () {
    showPhoto(current - 1);
  });

  next.addEventListener('click', function () {
    showPhoto(current + 1);
  });

  if (photos.length < 2) {
    hero.querySelector('.hero-controls').hidden = true;
  }

  showPhoto(0);
});
