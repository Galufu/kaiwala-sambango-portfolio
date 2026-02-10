document.addEventListener('DOMContentLoaded', function() {
 
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                
                if (entry.target.classList.contains('timeline-item')) {
                    entry.target.style.animation = 'fadeInUp 0.5s forwards';
                    
                    const index = Array.from(entry.target.parentNode.children).indexOf(entry.target);
                    entry.target.style.animationDelay = `${index * 0.3}s`;
                }
                
                if (entry.target.classList.contains('skill-category')) {
                    entry.target.style.animation = 'fadeInUp 0.5s forwards';
                    
                    const index = Array.from(entry.target.parentNode.children).indexOf(entry.target);
                    entry.target.style.animationDelay = `${index * 0.2 + 0.2}s`;
                }
                
                if (entry.target.classList.contains('education-item')) {
                    entry.target.style.animation = 'fadeInUp 0.5s forwards';
                    
                    const index = Array.from(entry.target.parentNode.children).indexOf(entry.target);
                    entry.target.style.animationDelay = `${index * 0.2 + 0.2}s`;
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.timeline-item, .skill-category, .education-item').forEach(el => {
        observer.observe(el);
    });
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.backgroundColor = 'white';
            header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        }
    });
});