document.addEventListener('DOMContentLoaded', function() {
  
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            if (!name || !email || !subject || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            const mailtoLink = `mailto:sambangokaiwala@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`)}`;
            
            window.location.href = mailtoLink;
            
            setTimeout(() => {
                alert('Thank you for your message! I will get back to you soon.');
                contactForm.reset();
            }, 500);
        });
    }
    
    const whatsappButtons = document.querySelectorAll('.whatsapp-btn, .btn-whatsapp');
    whatsappButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (this.href.includes('whatsapp.com')) return;
            
            e.preventDefault();
            const phoneNumber = '260770875111';
            const message = 'Hello Kaiwala, I visited your portfolio and would like to connect';
            window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
        });
    });
    
    const emailButtons = document.querySelectorAll('.email-btn');
    emailButtons.forEach(button => {
        button.addEventListener('click', function(e) {
        
            if (this.href.includes('mailto:')) return;
            
            e.preventDefault();
            const email = 'sambangokaiwala@gmail.com';
            window.location.href = `mailto:${email}`;
        });
    });
});