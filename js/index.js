const content = document.querySelector('.horizontal_wrapper > .horizontal_content');
const progressBar = document.querySelector('.progress-bar');

// Calculate the maximum scroll distance
const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

window.addEventListener('load', () => {
    setInterval(() => {
        document.querySelector('section.intro > div.top').style.opacity = '0'; 
    }, 2000);
})

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


// 모달 클릭 이벤트
const modals = document.querySelectorAll('section.webdesg div.modal');
const figures = document.querySelectorAll('section.webdesg div.webdesg');

figures.forEach((figure, i) => {
    figure.addEventListener('mouseenter', () => {
        modals[i].style.opacity = '1';
    });
});
figures.forEach((figure, i) => {
    figure.addEventListener('mouseleave', () => {
        modals[i].style.opacity = '0';
    });
});