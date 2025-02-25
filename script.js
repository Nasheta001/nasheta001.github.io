document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');

    for (const link of navLinks) {
        link.addEventListener('click', smoothScroll);
    }

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute("href") === "#" ? "header" : event.currentTarget.getAttribute("href").substring(1);
        const targetPosition = document.getElementById(targetId).offsetTop;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 800;
        let start = null;

        window.requestAnimationFrame(step);

        function step(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            window.scrollTo(0, easeInOutQuad(progress, startPosition, distance, duration));
            if (progress < duration) window.requestAnimationFrame(step);
        }
    }

    // EaseInOutQuad function for smooth scrolling
    function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    // Dynamic content loading for sample articles
    const samples = [
        {
            title: "Casino Reviews",
            content: "Details of the sample will be included later.",
            icon: "fas fa-dice"
        },
        {
            title: "Sports Betting Reviews",
            content: "Details of the sample will be included later.",
            icon: "fas fa-football-ball"
        },
        {
            title: "Slots",
            content: "Details of the sample will be included later.",
            icon: "fas fa-gamepad"
        },
        {
            title: "Sweepstakes",
            content: "Details of the sample will be included later.",
            icon: "fas fa-ticket-alt"
        },
        {
            title: "Guides",
            content: "Details of the sample will be included later.",
            icon: "fas fa-book"
        }
    ];

    const samplesContainer = document.getElementById('samples');

    samples.forEach(sample => {
        const sampleDiv = document.createElement('div');
        sampleDiv.classList.add('sample');

        const sampleTitle = document.createElement('h3');
        sampleTitle.textContent = sample.title;

        const sampleContent = document.createElement('p');
        sampleContent.textContent = sample.content;

        const sampleIcon = document.createElement('i');
        sampleIcon.className = sample.icon;

        sampleDiv.appendChild(sampleTitle);
        sampleDiv.appendChild(sampleContent);
        sampleDiv.appendChild(sampleIcon);

        samplesContainer.appendChild(sampleDiv);
    });
});