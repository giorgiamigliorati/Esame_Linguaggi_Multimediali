// Custom cursor functionality
const cursor = document.createElement('div');
cursor.style.width = '20px';
cursor.style.height = '20px';
cursor.style.backgroundColor = '#DF5700';
cursor.style.border = '2px solid #333333';
cursor.style.borderRadius = '50%';
cursor.style.position = 'absolute';
cursor.style.pointerEvents = 'none';
cursor.style.zIndex = '1000';
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.pageX - 10}px`;
    cursor.style.top = `${e.pageY - 10}px`;
});

// Smooth scrolling for navigation
const links = document.querySelectorAll('nav a');
links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Image carousel functionality
const carousels = document.querySelectorAll('.carousel');
carousels.forEach(carousel => {
    const imagesContainer = carousel.querySelector('.images');
    const images = carousel.querySelectorAll('.image');
    const prevButton = carousel.querySelector('.prev');
    const nextButton = carousel.querySelector('.next');

    let currentIndex = 0;
    const imageWidth = images[0].offsetWidth;

    const updateCarousel = () => {
        imagesContainer.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
    };

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });
});

// Form submission handling
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (email && message) {
        alert(`Thank you for your message!\n\nEmail: ${email}\nMessage: ${message}`);
        form.reset();
    } else {
        alert('Please fill out all fields before submitting.');
    }
});
