// === SCROLL REVEAL ===
// Gör sektioner synliga när man scrollar ner till dem

const revealElements = document.querySelectorAll('.section, .skill-card, .project-card');

revealElements.forEach(el => {
  el.classList.add('reveal');
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

revealElements.forEach(el => observer.observe(el));


// === AKTIV NAVBAR-LÄNK ===
// Markerar vilken sektion man är i just nu

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === `#${current}`) {
      link.style.color = 'var(--accent)';
    }
  });
});


// === NAVBAR BAKGRUND VID SCROLL ===
// Gör navbaren lite mörkare när man scrollar

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(5, 7, 9, 0.95)';
  } else {
    navbar.style.background = 'rgba(8, 12, 16, 0.85)';
  }
});


// === KONSOLHÄLSNING ===
// En liten easter egg för andra devs som inspekterar sidan :)

console.log('%c Hej, nyfiken person! 👾', 'color: #00e5ff; font-size: 16px; font-weight: bold;');
console.log('%c Den här sidan är byggd med ren HTML, CSS och JavaScript.', 'color: #5a7a8a;');
