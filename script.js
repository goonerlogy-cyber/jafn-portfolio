// Simple active nav highlighting
const links = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

function setActive() {
  let current = '';
  sections.forEach(sec => {
    const top = sec.offsetTop - 120;
    if (scrollY >= top) current = sec.getAttribute('id');
  });
  links.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
}

window.addEventListener('scroll', setActive);
setActive();
