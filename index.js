document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const heroSection = document.getElementById('home'); // Get the hero section

    // Set the background image for the hero section
    // You can replace 'https://example.com/your-image.jpg' with the actual URL of your generated image
    heroSection.style.backgroundImage = 'url("https://image.pollinations.ai/prompt/diverse%20group%20of%20people%20learning%20English%20watching%20movies%20together%20on%20a%20laptop%20with%20subtitles%20and%20headphones,%20cozy%20atmosphere,%20learning%20environment,%20multicultural,%20modern%20style,%20realistic")';

    // Check for saved theme preference
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Smooth scrolling for the "Home" logo
    document.querySelector('.logo a').addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});