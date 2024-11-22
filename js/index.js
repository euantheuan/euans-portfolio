gsap.registerPlugin(ScrollTrigger);

// Create main timeline
const timeline = gsap.timeline({
    scrollTrigger: {
        trigger: "main",
        pin: true,
        scrub: 1,
        end: "+=400%",
        snap: {
            snapTo: [0, 0.25, 0.5, 0,6, 0.7],
            duration: 0.2
        }
    }
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

const verticalSections = gsap.utils.toArray('div.vertical-contents div.webdev')
timeline.to(verticalSections, {
    yPercent: -100 * (verticalSections.length - 1),
    ease: "none",
    duration: 1
});


// Handle window resizing
window.addEventListener("resize", () => {
    ScrollTrigger.refresh();
});