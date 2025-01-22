// Custom cursor functionality
const cursor = document.createElement('div');
cursor.style.width = '60px';
cursor.style.height = '60px';
cursor.style.backgroundColor = '#DF5700';
cursor.style.opacity= '0.6';
cursor.style.outlineWidth = '10px';
cursor.style.borderRadius = '100%';
cursor.style.position = 'absolute';
cursor.style.pointerEvents = 'none';
cursor.style.zIndex = '1000';
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.pageX - 20}px`;
    cursor.style.top = `${e.pageY - 20}px`;
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

// Text enlargement on hover
const words = document.querySelectorAll('p, h1, h2, h3 h4, h5, h6, span'); // Target all text elements
words.forEach(word => {
    word.style.transition = 'transform 0.2s ease'; // Smooth transition for scaling

    word.addEventListener('mouseover', () => {
        word.style.transform = 'scale(1.1)'; // Enlarge the text
    });

    word.addEventListener('mouseout', () => {
        word.style.transform = 'scale(1)'; // Reset to original size
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach(carousel => {
        const imagesContainer = carousel.querySelector('.images');
        const images = carousel.querySelectorAll('.image');
        const prevButton = carousel.querySelector('.prev');
        const nextButton = carousel.querySelector('.next');

        let currentIndex = 0;

        const updateCarousel = () => {
            const imageWidth = images[0].clientWidth;
            imagesContainer.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
        };

        const showNextImage = () => {
            currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
            updateCarousel();
        };

        const showPrevImage = () => {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
            updateCarousel();
        };

        nextButton.addEventListener('click', showNextImage);
        prevButton.addEventListener('click', showPrevImage);

        // Aggiorna il carosello quando la finestra viene ridimensionata
        window.addEventListener('resize', updateCarousel);

        // Imposta inizialmente il carosello
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
