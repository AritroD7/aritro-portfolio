// Portfolio JavaScript - Interactivity & Animations
// ================================================

// Update copyright year
document.addEventListener('DOMContentLoaded', () => {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.3)';
    } else {
      navbar.style.boxShadow = 'none';
    }
  }
});

// Mobile navigation toggle
const mobileToggle = document.getElementById('mobileToggle');
const navLinks = document.getElementById('navLinks');

if (mobileToggle && navLinks) {
  mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileToggle.classList.toggle('active');
    
    // Animate hamburger menu
    const spans = mobileToggle.querySelectorAll('span');
    if (mobileToggle.classList.contains('active')) {
      spans[0].style.transform = 'rotate(45deg) translateY(12px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translateY(-12px)';
    } else {
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    }
  });

  // Close mobile menu when clicking on a link
  const navLinkItems = navLinks.querySelectorAll('a');
  navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      mobileToggle.classList.remove('active');
      
      const spans = mobileToggle.querySelectorAll('span');
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    });
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId !== '#') {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }
  });
});

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
  const animateElements = document.querySelectorAll(`
    .stat-card,
    .about-card,
    .project-card,
    .skill-category,
    .value-card,
    .faq-item,
    .timeline-item,
    .feature-card,
    .step-card,
    .research-card,
    .other-project-card
  `);

  animateElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(el);
  });
});

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      subject: document.getElementById('subject').value,
      message: document.getElementById('message').value
    };

    // For now, just create a mailto link
    const mailtoLink = `mailto:aritrodhar90@gmail.com?subject=${encodeURIComponent(formData.subject + ' - ' + formData.name)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;

    // Show success message (you can customize this)
    alert('Opening your email client... If it doesn\'t open automatically, please email me directly at aritrodhar90@gmail.com');
  });
}

// Add hover effect to project cards
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.zIndex = '10';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.zIndex = '1';
  });
});

// Parallax effect for hero background
window.addEventListener('scroll', () => {
  const heroBg = document.querySelector('.hero-bg');
  if (heroBg) {
    const scrolled = window.pageYOffset;
    heroBg.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

// Add loading animation for images
document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.5s ease';
    
    if (img.complete) {
      img.style.opacity = '1';
    } else {
      img.addEventListener('load', () => {
        img.style.opacity = '1';
      });
    }
  });
});

// Typing effect for hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.textContent = '';
  
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
}

// Uncomment to enable typing effect on homepage
// document.addEventListener('DOMContentLoaded', () => {
//   const heroTitle = document.querySelector('.hero-title .gradient-text');
//   if (heroTitle && window.location.pathname.includes('index')) {
//     const originalText = heroTitle.textContent;
//     typeWriter(heroTitle, originalText, 80);
//   }
// });

// Add active state to navigation based on current page
document.addEventListener('DOMContentLoaded', () => {
  const currentLocation = window.location.pathname;
  const navItems = document.querySelectorAll('.nav-links a');
  
  navItems.forEach(item => {
    const href = item.getAttribute('href');
    if (currentLocation.includes(href) || (currentLocation === '/' && href === 'index.html')) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
});

// Lazy loading for images (modern approach)
if ('loading' in HTMLImageElement.prototype) {
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach(img => {
    img.src = img.dataset.src;
  });
} else {
  // Fallback for browsers that don't support lazy loading
  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
  document.body.appendChild(script);
}

// Add tooltip functionality (if needed in future)
function initTooltips() {
  const tooltipTriggers = document.querySelectorAll('[data-tooltip]');
  
  tooltipTriggers.forEach(trigger => {
    trigger.addEventListener('mouseenter', function() {
      const tooltipText = this.getAttribute('data-tooltip');
      const tooltip = document.createElement('div');
      tooltip.className = 'tooltip';
      tooltip.textContent = tooltipText;
      document.body.appendChild(tooltip);
      
      const rect = this.getBoundingClientRect();
      tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
      tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
      
      this.tooltipElement = tooltip;
    });
    
    trigger.addEventListener('mouseleave', function() {
      if (this.tooltipElement) {
        this.tooltipElement.remove();
        this.tooltipElement = null;
      }
    });
  });
}

// Initialize tooltips if needed
// initTooltips();

// Add scroll progress indicator (optional)
function createScrollProgress() {
  const progressBar = document.createElement('div');
  progressBar.id = 'scroll-progress';
  progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    z-index: 9999;
    transition: width 0.1s ease;
  `;
  document.body.appendChild(progressBar);

  window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.pageYOffset / windowHeight) * 100;
    progressBar.style.width = scrolled + '%';
  });
}

// Uncomment to enable scroll progress bar
// createScrollProgress();

// Console message for developers
console.log('%c👋 Hello, developer!', 'font-size: 20px; font-weight: bold; color: #667eea;');
console.log('%cThis portfolio was crafted with attention to detail and modern web standards.', 'font-size: 14px; color: #a8a8b3;');
console.log('%cInterested in working together? Reach out at aritrodhar90@gmail.com', 'font-size: 14px; color: #4f46e5');
