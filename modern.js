const topbar = document.querySelector('.topbar');
const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');
const navLinks = [...document.querySelectorAll('[data-nav-link]')];

menu.addEventListener('click', () => {
  const open = topbar.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
});

nav.addEventListener('click', (event) => {
  if (event.target.matches('a')) {
    topbar.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
  }
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

const setActiveNav = () => {
  const marker = window.scrollY + window.innerHeight * 0.36;
  let activeId = sections[0]?.id;
  sections.forEach((section) => {
    if (section.offsetTop <= marker) activeId = section.id;
  });
  navLinks.forEach((link) => {
    link.classList.toggle('is-active', link.getAttribute('href') === '#' + activeId);
  });
};

window.addEventListener('scroll', setActiveNav, { passive: true });
window.addEventListener('resize', setActiveNav);
setActiveNav();
