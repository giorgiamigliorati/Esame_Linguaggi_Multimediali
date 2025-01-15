document.addEventListener('DOMContentLoaded', () => {
    // Create custom cursor
    const cursor = document.createElement('div');
    cursor.classList.add('cursor');
    document.body.appendChild(cursor);
  
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = `${e.pageX}px`;
      cursor.style.top = `${e.pageY}px`;
    });
  
    // Image hover effect
    const images = document.querySelectorAll('.image-wall img');
    images.forEach((img) => {
      img.addEventListener('mouseover', () => {
        img.style.transform = 'scale(1.2)';
      });
      img.addEventListener('mouseout', () => {
        img.style.transform = 'scale(1)';
      });
    });
  
    // Smooth scrolling for menu links
    const links = document.querySelectorAll('nav ul li a');
    links.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
  
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop - 100,
            behavior: 'smooth',
          });
        }
      });
    });
  
    // Contact form validation
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = form.querySelector('input[type="email"]').value;
      const message = form.querySelector('textarea').value;
  
      if (!email || !message) {
        alert('Please fill out both fields.');
        return;
      }
  
      alert('Message sent successfully!');
      form.reset();
    });
  });
  