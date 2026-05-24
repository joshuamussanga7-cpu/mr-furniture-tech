// Initialize Lucide icons
lucide.createIcons();

// Smooth Scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar background change on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(5, 5, 5, 0.95)';
        navbar.style.padding = '1.2rem 10%';
        navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
    } else {
        navbar.style.background = 'rgba(5, 5, 5, 0.8)';
        navbar.style.padding = '2rem 10%';
        navbar.style.boxShadow = 'none';
    }
});

// Scroll Reveal Animation using Intersection Observer
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
        }
    });
}, observerOptions);

// Apply reveal class to sections and cards
document.querySelectorAll('section, .service-card, .feature-item').forEach(el => {
    el.classList.add('reveal-hidden');
    observer.observe(el);
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Change icon based on state
    const icon = menuToggle.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.setAttribute('data-lucide', 'x');
    } else {
        icon.setAttribute('data-lucide', 'menu');
    }
    lucide.createIcons();
});

// Contact Form Handling (Simulation)
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = contactForm.querySelector('input').value;
    const button = contactForm.querySelector('button');

    button.textContent = 'Joining...';
    button.disabled = true;

    setTimeout(() => {
        button.textContent = 'Success! ✨';
        button.style.background = '#00ff88';
        contactForm.querySelector('input').value = '';

        setTimeout(() => {
            button.textContent = 'Start Project';
            button.style.background = '';
            button.disabled = false;
        }, 3000);
    }, 1500);
});

// Add dynamic floating elements to hero for "Energetic" feel
function createParticles() {
    const hero = document.querySelector('.hero');
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const size = Math.random() * 5 + 2 + 'px';
        particle.style.width = size;
        particle.style.height = size;
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.top = Math.random() * 100 + 'vh';
        particle.style.animationDuration = Math.random() * 10 + 5 + 's';
        particle.style.opacity = Math.random() * 0.5;
        hero.appendChild(particle);
    }
}

createParticles();
