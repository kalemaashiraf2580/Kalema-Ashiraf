// JS for Seaside Hotel

// DOMContentLoaded Event
document.addEventListener('DOMContentLoaded', () => {
    // Toggle Menu
    const menuBtn = document.getElementById('menu-btn');
    const menuOverlay = document.getElementById('menu-overlay');
    const closeBtn = document.getElementById('mo-button-close');

    menuBtn.addEventListener('click', () => {
        menuOverlay.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        menuOverlay.style.display = 'none';
    });

    // Back to Top Button
    const backToTopBtn = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Smooth Scroll for Internal Links
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Utility Function for Background Images
function setBackgroundImages() {
    const elements = document.querySelectorAll('[data-bgimage]');
    elements.forEach(el => {
        const bgImage = el.getAttribute('data-bgimage');
        el.style.backgroundImage = bgImage;
        el.style.backgroundSize = 'cover';
        el.style.backgroundPosition = 'center';
    });
}
setBackgroundImages();
