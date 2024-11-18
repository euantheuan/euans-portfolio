// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Horizontal scrolling sections
const horizontalScroll = () => {
    let horizontalSections = gsap.utils.toArray(".horizontal section");

    gsap.to(horizontalSections, {
        xPercent: -100 * (horizontalSections.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: ".horizontal",
            pin: true,
            scrub: 1,
            snap: {
                snapTo: 1 / (horizontalSections.length - 1),
                duration: 0.5,
                ease: "power1.inOut"
            },
            end: () => `+=${document.querySelector(".horizontal").offsetWidth}`,
            markers: true
        }
    });
};

// Vertical scrolling sections
const verticalScroll = () => {
    let verticalSections = gsap.utils.toArray(".vertical section");

    verticalSections.forEach((section, i) => {
        ScrollTrigger.create({
            trigger: section,
            start: "top top",
            pin: true,
            pinSpacing: false,
            snap: 1, // Snap to sections
            markers: true
        });
    });
};

// Initialize both scroll behaviors
horizontalScroll();
verticalScroll();

// Refresh ScrollTrigger on window resize
window.addEventListener("resize", () => {
    ScrollTrigger.refresh();
});