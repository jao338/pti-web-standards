const btn = document.getElementById('btnTop');

window.addEventListener('scroll', () => {
  btn.classList.toggle('show', window.scrollY > 300);
});

window.onload = function() {
  console.log("The entire page has loaded, and the screen is open!");
};

btn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const section = document.querySelector(link.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
  });
});
