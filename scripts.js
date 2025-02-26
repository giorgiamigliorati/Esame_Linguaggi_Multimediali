/// Custom cursor functionality
// Creazione di un elemento div per il cursore personalizzato
const cursor = document.createElement('div');
// Impostazione delle proprietà CSS per il cursore
cursor.style.width = '60px';
cursor.style.height = '60px';
cursor.style.backgroundColor = '#DF5700';
cursor.style.opacity= '0.6';
cursor.style.outlineWidth = '10px';
cursor.style.borderRadius = '100%';
cursor.style.position = 'absolute';
cursor.style.pointerEvents = 'none'; // Impedisce l'interazione con il cursore personalizzato
cursor.style.zIndex = '1000'; // Assicura che il cursore sia sopra altri elementi
document.body.appendChild(cursor); // Aggiunge il cursore al body del documento

// Event listener per il movimento del mouse
document.addEventListener('mousemove', (e) => {
    const targetX = e.pageX - 20; // Calcola la posizione X del cursore
    const targetY = e.pageY - 20; // Calcola la posizione Y del cursore
    const distance = Math.sqrt(Math.pow(targetX - cursor.offsetLeft, 2) + Math.pow(targetY - cursor.offsetTop, 2)); // Calcola la distanza tra la posizione attuale e la nuova posizione
    const scale = Math.min(2, 1 + distance / 100); // Scala il cursore in base alla distanza
    
    // Applica le transizioni per un effetto fluido
    cursor.style.transition = 'left 0.1s ease-out, top 0.1s ease-out, transform 0.1s ease-out';
    cursor.style.left = `${targetX}px`;
    cursor.style.top = `${targetY}px`;
    cursor.style.transform = `scale(${scale})`;
});

// Smooth scrolling for navigation
const links = document.querySelectorAll('nav a'); // Seleziona tutti i link della navbar
links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Previene il comportamento predefinito del link
        const targetId = link.getAttribute('href').slice(1); // Ottiene l'ID della sezione target
        const targetElement = document.getElementById(targetId); // Seleziona la sezione corrispondente
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Scorrimento fluido
    });
});

// Text enlargement on hover
const words = document.querySelectorAll('p, h1, h2, h3 h4, h5, h6, span'); // Seleziona tutti gli elementi di testo
words.forEach(word => {
    word.style.transition = 'transform 0.2s ease'; // Aggiunge una transizione fluida

    word.addEventListener('mouseover', () => {
        word.style.transform = 'scale(1.1)'; // Ingrandisce il testo al passaggio del mouse
    });

    word.addEventListener('mouseout', () => {
        word.style.transform = 'scale(1)'; // Ripristina la dimensione originale
    });
});

// Funzione per configurare il carosello di immagini
const setupCarousel = (containerId, items) => {
    const container = document.getElementById(containerId);

    // Creazione dei pulsanti di navigazione
    const prevButton = document.createElement("button");
    prevButton.classList.add("prev");
    prevButton.innerHTML = "&#10094;";
    container.appendChild(prevButton);

    const viewport = document.createElement("div");
    viewport.classList.add("viewport");
    container.appendChild(viewport);

    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    viewport.appendChild(wrapper);

    const nextButton = document.createElement("button");
    nextButton.classList.add("next");
    nextButton.innerHTML = "&#10095;";
    container.appendChild(nextButton);
    
    // Creazione delle immagini nel carosello
    items.forEach(image => {
        const imgElement = document.createElement("img");
        imgElement.src = `img/${image}`; // Imposta il percorso dell'immagine
        imgElement.alt = image; // Testo alternativo
        imgElement.classList.add("image");
        wrapper.appendChild(imgElement);
    });

    const images = container.querySelectorAll('.image'); // Seleziona tutte le immagini
    let currentIndex = 0;

    // Funzione per aggiornare la posizione del carosello
    const updateCarousel = () => {
        const imageWidth = images[0].clientWidth;
        wrapper.style.transition = 'transform 0.2s ease'; // Aggiunge una transizione
        wrapper.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
    };

    // Funzioni per scorrere le immagini avanti e indietro
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

    window.addEventListener('resize', updateCarousel); // Aggiorna il carosello al ridimensionamento della finestra
    updateCarousel(); // Imposta il carosello inizialmente
}

// Esecuzione dello script al caricamento della pagina
document.addEventListener('DOMContentLoaded', () => {
    const photographyImages = [
        "IMG1.jpg", "IMG2.jpg", "IMG3.jpg", "IMG4.jpg", "IMG5.jpg",
        "IMG6.jpg", "IMG7.jpg", "IMG8.jpg", "IMG9.jpg", "IMG10.jpg", "IMG11.jpg"
    ];
    const drawingsImages = [
        "IMG12.jpg", "IMG13.jpg", "IMG14.jpg", "IMG15.jpg", "IMG16.jpg",
        "IMG17.jpg", "IMG18.jpg", "IMG19.jpg", "IMG20.jpg", "IMG21.jpg"
    ];

    setupCarousel("photography-images", photographyImages);
    setupCarousel("drawings-images", drawingsImages);
});

// Gestione dell'invio del modulo di contatto
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Previene il comportamento predefinito di invio del form
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (email && message) {
        alert(`Thank you for your message!\n\nEmail: ${email}\nMessage: ${message}`);
        form.reset(); // Resetta il form dopo l'invio
    } else {
        alert('Please fill out all fields before submitting.'); // Mostra un avviso se i campi non sono compilati
    }
});
