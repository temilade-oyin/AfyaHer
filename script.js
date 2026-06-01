// Navigation toggle and smooth scroll + reveal on scroll
document.addEventListener('DOMContentLoaded', function(){
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  toggle && toggle.addEventListener('click', ()=>{
    const open = navLinks.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  // Close mobile menu when a link is clicked
  document.querySelectorAll('.nav-links a').forEach(a=>{
    a.addEventListener('click', ()=>{
      if(navLinks.classList.contains('open')){
        navLinks.classList.remove('open');
        toggle.setAttribute('aria-expanded','false');
      }
    })
  });

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(link=>{
    link.addEventListener('click', function(e){
      const targetId = this.getAttribute('href');
      if(targetId === '#') return;
      const el = document.querySelector(targetId);
      if(el){
        e.preventDefault();
        el.scrollIntoView({behavior:'smooth',block:'start'});
      }
    })
  });

  // Reveal on scroll
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('in-view');
      }
    });
  },{threshold:0.12});

  document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
});
