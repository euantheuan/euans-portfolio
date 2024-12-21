const content = document.querySelector('.horizontal_wrapper > .horizontal_content');
const progressBar = document.querySelector('.progress-bar');

// Calculate the maximum scroll distance
const maxScroll = document.documentElement.scrollHeight - window.innerHeight;


// Update horizontal position on scroll
window.addEventListener('scroll', () => {
    // Get current scroll position
    const scrolled = window.pageYOffset;

    // Calculate horizontal translation based on scroll position
    const percentageScrolled = scrolled / maxScroll;
    const horizontalTranslation = percentageScrolled * (content.scrollWidth - window.innerWidth);

    // Apply smooth transform
    content.style.transform = `translateX(-${horizontalTranslation}px)`;

    // Update progress bar
    progressBar.style.width = `${percentageScrolled * 100}%`; 
});

// Prevent horizontal scrolling
document.addEventListener('wheel', (e) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault();
    }
}, { passive: false });