const menuToggle = document.querySelector('.menu-toggle');
const siteMenu = document.querySelector('#site-menu');
const navLinks = [...document.querySelectorAll('.nav-link')];
const progressBar = document.querySelector('#scroll-progress-bar');
const revealItems = document.querySelectorAll('.reveal');
const contactForm = document.querySelector('#contact-form');
const formSuccess = document.querySelector('#form-success');
const year = document.querySelector('#year');

if (year) year.textContent = new Date().getFullYear();

menuToggle?.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  siteMenu?.classList.toggle('is-open', !isOpen);
});

navLinks.forEach((link) => link.addEventListener('click', () => {
  menuToggle?.setAttribute('aria-expanded', 'false');
  siteMenu?.classList.remove('is-open');
}));

const updateProgress = () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  if (progressBar) progressBar.style.width = `${progress}%`;
};
window.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealItems.forEach((item) => observer.observe(item));

const sections = [...document.querySelectorAll('main section[id]')];
const activeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((link) => link.classList.toggle('is-active', link.getAttribute('href') === `#${entry.target.id}`));
  });
}, { rootMargin: '-35% 0px -55% 0px' });
sections.forEach((section) => activeObserver.observe(section));

contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (formSuccess) formSuccess.hidden = false;
  contactForm.reset();
  formSuccess?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});
