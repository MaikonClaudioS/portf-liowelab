
  // Hero entrance
  window.addEventListener('load', () => {
    document.getElementById('hero').classList.add('in');
    document.getElementById('eyebrow').style.transition = 'all .8s var(--ease)';
    document.getElementById('eyebrow').style.opacity = 1;
    document.getElementById('eyebrow').style.transform = 'translateY(0)';
  });

  // Scroll progress / heartbeat
  const pulseFill = document.getElementById('pulseFill');
  const nav = document.getElementById('mainNav');
  window.addEventListener('scroll', () => {
    const h = document.documentElement;
    const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
    pulseFill.style.width = scrolled + '%';
    nav.classList.toggle('scrolled', h.scrollTop > 40);
  });

  // Reveal on scroll
  const revealEls = document.querySelectorAll('.reveal, .tl-item');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting){ e.target.classList.add('in'); }
    });
  }, { threshold: 0.18 });
  revealEls.forEach(el => io.observe(el));

  // Nav dots active state + click to scroll
  const sections = ['sobre','skills','objetivo','crescimento','contratar'].map(id => document.getElementById(id));
  const dots = document.querySelectorAll('.navdots button');
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      document.getElementById(dot.dataset.target).scrollIntoView({ behavior: 'smooth' });
    });
  });
  const secObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const idx = sections.indexOf(entry.target);
      if(entry.isIntersecting && idx > -1){
        dots.forEach(d => d.classList.remove('active'));
        dots[idx].classList.add('active');
      }
    });
  }, { threshold: 0.5 });
  sections.forEach(s => secObserver.observe(s));

  // About card cursor-follow glow
  const aboutCard = document.getElementById('aboutCard');
  aboutCard.addEventListener('mousemove', (e) => {
    const rect = aboutCard.getBoundingClientRect();
    aboutCard.style.setProperty('--mx', (e.clientX - rect.left) + 'px');
    aboutCard.style.setProperty('--my', (e.clientY - rect.top) + 'px');
  });
