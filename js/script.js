document.addEventListener('DOMContentLoaded', () => {
    // Select all links with hashes
    const scrollLinks = document.querySelectorAll('a[href^="#"]');

    scrollLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // 1. Get navbar height dynamically
                const navHeight = document.querySelector('nav').offsetHeight;
                
                // 2. Calculate position (Element top - Navbar height)
                const targetPosition = targetElement.offsetTop - navHeight;

                // 3. Smooth scroll
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // 4. Close mobile dropdown if it's open
                const activeElement = document.activeElement;
                if (activeElement) {
                    activeElement.blur();
                }
            }
        });
    });
});