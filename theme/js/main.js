document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.querySelector('.main-nav ul');
  if (toggle && menu) {
    toggle.addEventListener('click', function () { menu.classList.toggle('open'); });
  }
  var yearSpan = document.getElementById('year');
  if (yearSpan) { yearSpan.textContent = new Date().getFullYear(); }
});
