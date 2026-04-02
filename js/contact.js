// Modal Contact Form
const formToggle = document.getElementById('form-toggle');
const contactFormModal = document.getElementById('contact-form-modal');
const closeBtn = document.querySelector('.close-btn');
const contactForm = document.getElementById('contact-form');

// Abrir modal
if (formToggle) {
    formToggle.addEventListener('click', () => {
        contactFormModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
}

// Cerrar modal
if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        contactFormModal.classList.remove('active');
        document.body.style.overflow = '';
    });
}

// Cerrar al hacer clic fuera
if (contactFormModal) {
    contactFormModal.addEventListener('click', (e) => {
        if (e.target === contactFormModal) {
            contactFormModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// Manejar envío de formulario
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Aquí iría la lógica para enviar el formulario
        // Por ahora, mostrar un mensaje de éxito
        alert('¡Gracias por tu mensaje! Me pondré en contacto pronto.');
        
        contactForm.reset();
        contactFormModal.classList.remove('active');
        document.body.style.overflow = '';
    });
}
