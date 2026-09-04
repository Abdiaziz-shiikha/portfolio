document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = menuBtn ? menuBtn.querySelector('svg') : null;

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      mobileMenu.classList.toggle('flex');
    });

    // Close mobile menu when clicking a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('flex');
      });
    });
  }

  // Active Navbar Highlight on Scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav ul a');

  function highlightNavOnScroll() {
    const scrollY = window.scrollY;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 100;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('text-blue-400', 'font-semibold');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('text-blue-400', 'font-semibold');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightNavOnScroll);

  // Contact Form Handler via WhatsApp & Mailto
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('form-name').value.trim();
      const email = document.getElementById('form-email').value.trim();
      const subject = document.getElementById('form-subject').value.trim();
      const message = document.getElementById('form-message').value.trim();

      if (!name || !message) {
        alert('Tfadlan buuxi magacaaga iyo farriintaada.');
        return;
      }

      const formattedText = `*Waad helay Farriin Cusub (Portfolio)*\n\n*Magaca:* ${name}\n*Email:* ${email || 'Aan la bixin'}\n*Mawduuca:* ${subject || 'General Inquiry'}\n\n*Farriinta:* ${message}`;
      
      const encodedText = encodeURIComponent(formattedText);
      const whatsappUrl = `https://wa.me/252907843611?text=${encodedText}`;
      
      window.open(whatsappUrl, '_blank');
      contactForm.reset();
    });
  }
});
