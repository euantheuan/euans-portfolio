gsap.registerPlugin(ScrollTrigger);

// Create main timeline
const timeline = gsap.timeline({
    scrollTrigger: {
        trigger: "main",
        pin: true,
        scrub: 1,
        end: "+=300%",
        snap: {
            snapTo: [0, 0.3, 1],
            duration: 0.2
        }
    }
});

// Initial position setup
gsap.set(".webdev", {
    position: "fixed",
    top: 0,
    left: "2600px"
});

// Animation sequence
const horizontalSections = gsap.utils.toArray(".horizontal section");
timeline
    // First horizontal scroll (intro and skills)
    .to(horizontalSections, {
        xPercent: -100 * (horizontalSections.length - 1),
        ease: "none",
        duration: 1
    })
    // Slide in webdev from right
    .to(".webdev", {
        left: "1000px",
        ease: "none",
        duration: 0.5
    })
    // Scroll webdev vertically
    .to(".webdev", {
        yPercent: 0,
        ease: "none",
        duration: 1
    });

// Handle window resizing
window.addEventListener("resize", () => {
    ScrollTrigger.refresh();
});