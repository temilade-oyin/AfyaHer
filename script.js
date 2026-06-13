document.addEventListener('DOMContentLoaded', function () {

  // Hamburger menu
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function () {
      navMenu.classList.toggle('active');
    });
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => navMenu.classList.remove('active'));
    });
  }

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Email signup
  const notifyBtn = document.getElementById('notifyBtn');
  const emailInput = document.getElementById('emailInput');

  if (notifyBtn && emailInput) {
    notifyBtn.addEventListener('click', function (e) {
      e.preventDefault();
      const email = emailInput.value.trim();
      if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        const original = notifyBtn.textContent;
        notifyBtn.textContent = '✓ You\'re on the list!';
        notifyBtn.style.background = '#F4C5CC';
        notifyBtn.style.color = '#561269';
        setTimeout(() => {
          notifyBtn.textContent = original;
          notifyBtn.style.background = '';
          notifyBtn.style.color = '';
          emailInput.value = '';
        }, 3500);
      } else {
        emailInput.style.borderColor = '#d46a75';
        setTimeout(() => emailInput.style.borderColor = '', 1500);
      }
    });
    emailInput.addEventListener('keypress', e => {
      if (e.key === 'Enter') notifyBtn.click();
    });
  }

  // Scroll reveal
  const reveals = document.querySelectorAll('.section, .blog-card, .connect-card, .transform-col');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });

  // Close nav on resize
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && navMenu) navMenu.classList.remove('active');
  });

});
