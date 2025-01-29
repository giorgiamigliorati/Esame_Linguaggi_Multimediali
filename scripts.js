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
    const targetX = e.pageX - 20;
    const targetY = e.pageY - 20;
    const distance = Math.sqrt(Math.pow(targetX - cursor.offsetLeft, 2) + Math.pow(targetY - cursor.offsetTop, 2));
    const scale = Math.min(2, 1 + distance / 100); // Scale factor based on distance, capped at 2x
    cursor.style.transition = 'left 0.1s ease-out, top 0.1s ease-out, transform 0.1s ease-out';
    cursor.style.left = `${targetX}px`;
    cursor.style.top = `${targetY}px`;
    cursor.style.transform = `scale(${scale})`;
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


const setupCarousel = (containerId, items) => {
    const container = document.getElementById(containerId);
    
    const viewport = document.createElement("div");
    viewport.classList.add("viewport");
    container.appendChild(viewport);

    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    viewport.appendChild(wrapper);
    
    items.forEach(image => {
        const imgElement = document.createElement("img");
        imgElement.src = `img/${image}`; // Percorso immagine
        imgElement.alt = image; // Testo alternativo
        imgElement.classList.add("image");
        wrapper.appendChild(imgElement);
    });

    const images = container.querySelectorAll('.image');
    const prevButton = container.querySelector('.prev');
    const nextButton = container.querySelector('.next');

    let currentIndex = 0;

    const updateCarousel = () => {
        const imageWidth = images[0].clientWidth;
        wrapper.style.transition = 'transform 0.2s ease'; // Add easing
        wrapper.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
    };

    const showNextImage = () => {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    };

    const showPrevImage = () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        updateCarousel();
    };

    console.log(container);
    nextButton.addEventListener('click', showNextImage);
    prevButton.addEventListener('click', showPrevImage);

    // Aggiorna il carosello quando la finestra viene ridimensionata
    window.addEventListener('resize', updateCarousel);

    // Imposta inizialmente il carosello
    updateCarousel();
}



document.addEventListener('DOMContentLoaded', () => {

    // Definizione delle immagini
    const photographyImages = [
        "IMG1.jpg", "IMG2.jpg", "IMG3.jpg", "IMG4.jpg", "IMG5.jpg",
        "IMG6.jpg", "IMG7.jpg", "IMG8.jpg", "IMG9.jpg", "IMG10.jpg", "IMG11.jpg"
    ];
    const drawingsImages = [
        "IMG12.jpg", "IMG13.jpg", "IMG14.jpg", "IMG15.jpg", "IMG16.jpg",
        "IMG17.jpg", "IMG18.jpg", "IMG19.jpg", "IMG20.jpg", "IMG21.jpg"
    ];


    // Carica le immagini nelle rispettive sezioni
    setupCarousel("photography-images", photographyImages);
    setupCarousel("drawings-images", drawingsImages);

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
