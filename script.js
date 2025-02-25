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

let currentSlide = 0;
const slides = document.querySelectorAll('.testimonial-content');
const slidesContainer = document.getElementById('testimonialSlides');
const totalSlides = slides.length;

function moveSlide(direction) {
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    updateSlidePosition();
}

function updateSlidePosition() {
    slidesContainer.style.transform = `translateX(${-currentSlide * 400}px)`;
}



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