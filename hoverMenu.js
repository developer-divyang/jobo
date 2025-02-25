document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navbarContent = document.querySelector('.navbar-content');
    
    mobileMenuBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        navbarContent.classList.toggle('active');
    });
    
    // For mobile: make dropdown work with click instead of hover
    if (window.innerWidth <= 900) {
        const dropdowns = document.querySelectorAll('.dropdown');
        
        dropdowns.forEach(dropdown => {
            dropdown.querySelector('a').addEventListener('click', function(e) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            });
        });
    }
});