gsap.registerPlugin(ScrollTrigger);

// Horizontal scrolling sections
const horizontalScroll = () => {
    const horizontalSections = gsap.utils.toArray(".horizontal section");
    const horizontalWrapper = document.querySelector(".horizontal");

    const horizontalTween = gsap.to(horizontalSections, {
        xPercent: -100 * (horizontalSections.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: ".horizontal",
            pin: true,
            pinSpacing: true,
            scrub: 1,
            snap: {
                snapTo: 1 / (horizontalSections.length - 1),
                duration: 0.5,
                ease: "power1.inOut"
            },
            end: () => `+=${horizontalWrapper.offsetWidth}`,
            markers: true,
            onLeaveBack: () => {
                gsap.to(horizontalWrapper, {
                    visibility: "visible",
                    duration: 0
                });
            }
        }
    });

    // Create a trigger for hiding horizontal section
    ScrollTrigger.create({
        trigger: ".vertical",
        start: "top bottom",
        end: "top top",
        onEnter: () => {
            gsap.to(horizontalWrapper, {
                visibility: "hidden",
                duration: 0
            });
        },
        onLeaveBack: () => {
            gsap.to(horizontalWrapper, {
                visibility: "visible",
                duration: 0
            });
        },
        markers: true
    });
};

// Vertical scrolling sections
const verticalScroll = () => {
    const verticalSections = gsap.utils.toArray(".vertical section");

    verticalSections.forEach((section, i) => {
        ScrollTrigger.create({
            trigger: section,
            start: "top top",
            pin: true,
            pinSpacing: false,
            snap: 1,
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