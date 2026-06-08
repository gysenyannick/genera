// Announce bar height for nav offset
const announceBar = document.querySelector('.announce-bar');
const nav = document.getElementById('nav');

function updateNavTop() {
  const barH = announceBar ? announceBar.offsetHeight : 0;
  if (window.scrollY > barH) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', updateNavTop, { passive: true });
updateNavTop();

// Mobile menu
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  document.body.style.overflow = open ? 'hidden' : '';
  const [s1, s2, s3] = burger.querySelectorAll('span');
  s1.style.transform = open ? 'translateY(7px) rotate(45deg)' : '';
  s2.style.opacity = open ? '0' : '1';
  s3.style.transform = open ? 'translateY(-7px) rotate(-45deg)' : '';
});

navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    document.body.style.overflow = '';
    const [s1, s2, s3] = burger.querySelectorAll('span');
    s1.style.transform = '';
    s2.style.opacity = '1';
    s3.style.transform = '';
  });
});

// Reveal on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.sov-card, .why-card, .pkg-card, .testi-card, .preview-card, .stat-item').forEach((el, i) => {
  el.classList.add('reveal');
  el.classList.add(`reveal-delay-${(i % 4) + 1}`);
  observer.observe(el);
});

// Count-up animation for stats
const statNums = document.querySelectorAll('.stat-num[data-target]');

const countObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.dataset.target, 10);
      let current = 0;
      const step = Math.ceil(target / 40);
      const timer = setInterval(() => {
        current = Math.min(current + step, target);
        el.textContent = current;
        if (current >= target) clearInterval(timer);
      }, 40);
      countObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

statNums.forEach(el => countObserver.observe(el));

// Contact form
const form = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = form.querySelector('button[type=submit]');
  const span = btn.querySelector('span');
  btn.disabled = true;
  span.textContent = 'Verzenden…';
  setTimeout(() => {
    form.reset();
    btn.disabled = false;
    span.textContent = 'Verzenden';
    formSuccess.classList.add('visible');
    setTimeout(() => formSuccess.classList.remove('visible'), 5000);
  }, 900);
});
