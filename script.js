document.addEventListener('DOMContentLoaded', function() {
    // Function to handle form submission
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way
        
        alert('Pesan Anda telah dikirim!');
        contactForm.reset(); // Reset the form fields
    });

    // Function to handle button click (for making appointments)
    const appointmentButton = document.getElementById('appointmentButton');
    appointmentButton.addEventListener('click', function() {
        alert('Fitur pembuatan janji temu akan datang segera!');
    });
});