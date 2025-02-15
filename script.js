// Animación de la puerta
const doorContainer = document.getElementById('doorContainer');
const startButton = document.getElementById('startButton');
const landingPage = document.getElementById('landingPage');

startButton.addEventListener('click', () => {
    doorContainer.classList.add('open');
    
    setTimeout(() => {
        landingPage.classList.add('active');
        doorContainer.style.display = 'none';
    }, 1000);
});

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Manejo del formulario
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Validación básica
    const nombre = this.elements[0].value;
    const email = this.elements[1].value;
    const mensaje = this.elements[2].value;
    
    if(nombre && email && mensaje) {
        // Aquí iría la lógica de envío
        alert('Mensaje enviado correctamente');
        this.reset();
    } else {
        alert('Por favor completa todos los campos');
    }
});

// Descarga de CV
document.querySelector('.cv-download').addEventListener('click', function(e) {
    e.preventDefault();
    // Lógica para descargar el CV
    alert('Descargando CV...');
});