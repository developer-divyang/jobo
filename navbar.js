document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navbarContent = document.querySelector('.navbar-content');
    
    mobileMenuBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        navbarContent.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenuBtn.classList.remove('active');
            navbarContent.classList.remove('active');
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.navbar-content') && 
            !event.target.closest('.mobile-menu-btn') && 
            navbarContent.classList.contains('active')) {
            mobileMenuBtn.classList.remove('active');
            navbarContent.classList.remove('active');
        }
    });
});