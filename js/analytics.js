// Google Analytics Enhanced Event Tracking

document.addEventListener('DOMContentLoaded', function () {

    // Track social media icon clicks
    const socialIcons = document.querySelectorAll('.social-icons a');
    socialIcons.forEach(icon => {
        icon.addEventListener('click', function () {
            const platform = this.getAttribute('aria-label');
            gtag('event', 'click', {
                'event_category': 'Social Media',
                'event_label': platform,
                'transport_type': 'beacon'
            });
        });
    });

    // Track navigation link clicks
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            const section = this.getAttribute('href').substring(1);
            gtag('event', 'click', {
                'event_category': 'Navigation',
                'event_label': section,
                'transport_type': 'beacon'
            });
        });
    });

    // Track publication link clicks (delegated for dynamic content)
    const pubList = document.getElementById('pub-list');
    if (pubList) {
        pubList.addEventListener('click', function (e) {
            if (e.target.tagName === 'A' && e.target.href.includes('.pdf')) {
                gtag('event', 'click', {
                    'event_category': 'Publication',
                    'event_label': e.target.href,
                    'transport_type': 'beacon'
                });
            }
        });
    }

    // Track award link clicks (delegated for dynamic content)
    const awardsList = document.getElementById('awards-list');
    if (awardsList) {
        awardsList.addEventListener('click', function (e) {
            if (e.target.tagName === 'A') {
                gtag('event', 'click', {
                    'event_category': 'Award',
                    'event_label': e.target.textContent,
                    'transport_type': 'beacon'
                });
            }
        });
    }

    // Track CV download
    // This requires the CV link to have an id="cv-link"
    const cvLink = document.querySelector('a[href*="nakulgarg_cv.pdf"]');
    if (cvLink) {
        cvLink.addEventListener('click', function() {
            gtag('event', 'click', {
                'event_category': 'Download',
                'event_label': 'CV',
                'transport_type': 'beacon'
            });
        });
    }
});
