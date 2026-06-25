const header = document.querySelector('.site-header');
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');
const backToTop = document.querySelector('.back-to-top');
const revealItems = document.querySelectorAll('.reveal');
const counters = document.querySelectorAll('[data-counter]');
const faqItems = document.querySelectorAll('.faq-item');
const form = document.querySelector('.contact-form');
const heroVisual = document.querySelector('.hero-visual');
const tiltItems = document.querySelectorAll('.dashboard-card, .floating-note');

const setHeaderState = () => {
  header.classList.toggle('is-scrolled', window.scrollY > 10);
  backToTop.classList.toggle('is-visible', window.scrollY > 400);
};

if (header && backToTop) {
  setHeaderState();
  window.addEventListener('scroll', setHeaderState, { passive: true });
}

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('is-open');
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

if (backToTop) {
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);

      if (entry.target.matches('.stats-section')) {
        counters.forEach((counter) => animateCounter(counter));
      }
    });
  },
  { threshold: 0.16 }
);

revealItems.forEach((item) => observer.observe(item));

const animateCounter = (node) => {
  if (node.dataset.counted === 'true') return;
  node.dataset.counted = 'true';

  const target = Number(node.dataset.counter || 0);
  const duration = 1200;
  const start = performance.now();

  const step = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const value = Math.floor(target * (0.15 + progress * 0.85));
    node.textContent = progress === 1 ? String(target) : String(value);

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
};

const statsSection = document.querySelector('.stats-section');
if (statsSection) observer.observe(statsSection);

faqItems.forEach((item) => {
  item.addEventListener('click', () => {
    const expanded = item.getAttribute('aria-expanded') === 'true';
    item.setAttribute('aria-expanded', String(!expanded));
    item.querySelector('.faq-icon').textContent = expanded ? '+' : '–';
  });
});

if (heroVisual && tiltItems.length > 0) {
  heroVisual.addEventListener('mousemove', (event) => {
    const rect = heroVisual.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    tiltItems.forEach((item, index) => {
      const depth = (index + 1) * 1.6;
      item.style.transform = `translate3d(${x * depth * 4}px, ${y * depth * 4}px, 0)`;
    });
  });

  heroVisual.addEventListener('mouseleave', () => {
    tiltItems.forEach((item) => {
      item.style.transform = '';
    });
  });
}

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = String(data.get('name') || 'bạn');
    alert(`Cảm ơn ${name}! Mình đã nhận được lời nhắn. Hãy nối form này với backend/email service nhé.`);
    form.reset();
  });
}
