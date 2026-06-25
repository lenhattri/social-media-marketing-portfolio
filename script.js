const header = document.querySelector('.site-header');
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');
const backToTop = document.querySelector('.back-to-top');
const revealItems = document.querySelectorAll('.reveal');
const counters = document.querySelectorAll('[data-counter]');
const faqItems = document.querySelectorAll('.faq-item');
const form = document.querySelector('.contact-form');

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

// Enhanced intersection observer with stagger animation support
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      
      // Add stagger delay based on element position within grid/container
      const parent = entry.target.parentElement;
      if (parent && (parent.classList.contains('service-grid') || 
                     parent.classList.contains('about-grid') ||
                     parent.classList.contains('case-grid') ||
                     parent.classList.contains('process-grid') ||
                     parent.classList.contains('testimonial-grid') ||
                     parent.classList.contains('photo-grid') ||
                     parent.classList.contains('foundation-grid') ||
                     parent.classList.contains('stats-section') ||
                     parent.classList.contains('faq-list') ||
                     parent.classList.contains('hero-proof'))) {
        
        const siblings = Array.from(parent.children).filter(el => 
          el.classList.contains('reveal') || 
          el.classList.contains('reveal') ||
          el.tagName === 'LI' ||
          el.classList.contains('stat-card') ||
          el.classList.contains('faq-item')
        );
        
        const index = siblings.indexOf(entry.target);
        if (index >= 0) {
          const delay = index * 0.08;
          entry.target.style.setProperty('--stagger-delay', `${delay}s`);
        }
      }
      
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);

      if (entry.target.matches('.stats-section')) {
        counters.forEach((counter) => animateCounter(counter));
      }
    });
  },
  { threshold: 0.12 }
);

revealItems.forEach((item) => observer.observe(item));

const animateCounter = (node) => {
  if (node.dataset.counted === 'true') return;
  node.dataset.counted = 'true';

  const target = Number(node.dataset.counter || 0);
  const duration = 1800;
  const start = performance.now();

  const step = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const easeOutQuad = 1 - (1 - progress) * (1 - progress);
    const value = Math.floor(target * easeOutQuad);
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

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = String(data.get('name') || 'bạn');
    alert(`Cảm ơn ${name}! Mình đã nhận được lời nhắn. Hãy nối form này với backend/email service nhé.`);
    form.reset();
  });
}

// Add subtle parallax effect to hero section on scroll
window.addEventListener('scroll', () => {
  const heroCopy = document.querySelector('.hero-copy');
  const heroVisual = document.querySelector('.hero-visual');
  
  if (heroCopy && heroVisual && window.scrollY < 600) {
    const scrolled = window.scrollY * 0.5;
    heroCopy.style.transform = `translateY(${scrolled * 0.08}px)`;
    heroVisual.style.transform = `translateY(${scrolled * -0.12}px)`;
  }
}, { passive: true });
