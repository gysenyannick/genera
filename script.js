// Nav: scroll effect + announce bar sync
const nav = document.getElementById('nav');
const announceBar = document.querySelector('.announce-bar');

function onScroll() {
  const barH = announceBar ? announceBar.offsetHeight : 0;
  nav.classList.toggle('scrolled', window.scrollY > barH + 10);
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Mobile menu
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  document.body.style.overflow = open ? 'hidden' : '';
  const spans = burger.querySelectorAll('span');
  spans[0].style.transform = open ? 'translateY(7px) rotate(45deg)' : '';
  spans[1].style.opacity = open ? '0' : '1';
  spans[2].style.transform = open ? 'translateY(-7px) rotate(-45deg)' : '';
});

navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    document.body.style.overflow = '';
    burger.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = '1'; });
  });
});

// Count-up stats
const countEls = document.querySelectorAll('.stat-num[data-target]');
const countObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target;
    const target = +el.dataset.target;
    let n = 0;
    const step = Math.max(1, Math.ceil(target / 40));
    const t = setInterval(() => {
      n = Math.min(n + step, target);
      el.textContent = n;
      if (n >= target) clearInterval(t);
    }, 35);
    countObserver.unobserve(el);
  });
}, { threshold: 0.5 });
countEls.forEach(el => countObserver.observe(el));

// Form submit
const form = document.getElementById('contactForm');
const formOk = document.getElementById('formOk');
form.addEventListener('submit', e => {
  e.preventDefault();
  const btn = form.querySelector('button[type=submit]');
  const span = btn.querySelector('span');
  btn.disabled = true;
  span.textContent = 'Verzenden…';
  setTimeout(() => {
    form.reset();
    btn.disabled = false;
    span.textContent = 'Verzenden';
    formOk.classList.add('show');
    setTimeout(() => formOk.classList.remove('show'), 5000);
  }, 900);
});
