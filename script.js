document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 50
    });

    // Smooth scroll for Back to Top button
    const backToTopBtn = document.querySelector('.bottom-links a');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Parallax effect on hero image
    const heroImage = document.querySelector('.hero-image');
    window.addEventListener('scroll', () => {
        if (heroImage) {
            const scrollPosition = window.pageYOffset;
            // Slightly move the image based on scroll
            heroImage.style.transform = `translateY(${scrollPosition * 0.1}px) scale(1.05)`;
        }
    });

    // Simple interaction for feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Optional: add some dynamic color or specific style changes via JS if needed
        });
    });
});
