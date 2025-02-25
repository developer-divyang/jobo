document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".stat-number");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    const endValue = parseInt(target.getAttribute("data-count"));
                    animateCount(target, endValue);
                    observer.unobserve(target); // Stop observing once counted
                }
            });
        },
        { threshold: 0.5 } // Adjust threshold for when to start counting
    );

    counters.forEach(counter => observer.observe(counter));
});

function animateCount(element, endValue) {
    let startValue = 0;
    let duration = 2000; // Animation duration in milliseconds
    let increment = Math.ceil(endValue / (duration / 16)); // Adjust increment step

    function updateCounter() {
        startValue += increment;
        if (startValue >= endValue) {
            element.textContent = endValue.toLocaleString(); // Format large numbers with commas
        } else {
            element.textContent = startValue.toLocaleString();
            requestAnimationFrame(updateCounter);
        }
    }

    updateCounter();
}

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.testimonial-content');
    const slidesContainer = document.getElementById('testimonialSlides');
    const totalSlides = slides.length;
    
    // Initialize slider with correct slide width
    function initSlider() {
        // Get the actual width of the testimonial wrapper
        const wrapperWidth = document.querySelector('.testimonial-wrapper').offsetWidth;
        
        // Set each slide's width to match the wrapper
        slides.forEach(slide => {
            slide.style.minWidth = `${wrapperWidth}px`;
        });
        
        // Apply initial position
        updateSlidePosition();
    }
    
    // Move to previous or next slide
    window.moveSlide = function(direction) {
        currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
        updateSlidePosition();
    };
    
    // Update slider position based on current slide
    function updateSlidePosition() {
        // Get the current slide width for accurate positioning
        const slideWidth = slides[0].offsetWidth;
        slidesContainer.style.transform = `translateX(${-currentSlide * slideWidth}px)`;
    }
    
    // Initialize the slider
    initSlider();
    
    // Update slider on window resize
    window.addEventListener('resize', function() {
        initSlider();
    });
});



function changeTab(tabIndex) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
      content.classList.remove('active');
    });
    
    // Deactivate all tabs
    const tabItems = document.querySelectorAll('.tab-item');
    tabItems.forEach(tab => {
      tab.classList.remove('active');
    });
    
    // Activate selected tab and content
    document.getElementById('tab-' + tabIndex).classList.add('active');
    tabItems[tabIndex].classList.add('active');
  }


  // This script will make the play button interact with the YouTube iframe
document.addEventListener('DOMContentLoaded', function() {
    const playButton = document.querySelector('.play-button');
    const iframe = document.querySelector('.about-video iframe');
    const aboutVideo = document.querySelector('.about-video');
    
    // Initially hide the iframe
    iframe.style.opacity = '0';
    
    playButton.addEventListener('click', function() {
        // Get the current src
        let src = iframe.src;
        
        // Add autoplay parameter if not already present
        if (src.indexOf('autoplay=1') === -1) {
            src = src.includes('?') ? 
                  src + '&autoplay=1' : 
                  src + '?autoplay=1';
                  
            iframe.src = src;
        }
        
        // Show the iframe and hide the play button
        iframe.style.opacity = '1';
        playButton.style.display = 'none';
        
        // Make iframe clickable (in case it was set to pointer-events: none)
        iframe.style.pointerEvents = 'auto';
    });
    
    // Add these styles to your CSS
    const style = document.createElement('style');
    style.textContent = `
        .about-video iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            transition: opacity 0.3s ease;
        }
        
        .about-video {
            position: relative;
            overflow: hidden;
            border-radius: 10px;
            background-color: #000; /* Changed from red to black for better aesthetics */
        }
    `;
    document.head.appendChild(style);
});