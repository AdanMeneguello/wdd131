
const btn = document.getElementById('menuBtn');
const nav = document.getElementById('siteNav');

if (btn && nav) {
  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

const y = document.getElementById('year');
const lm = document.getElementById('lastmod');
if (y) y.textContent = new Date().getFullYear();
if (lm) lm.textContent = document.lastModified;
