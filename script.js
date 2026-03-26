// navigation logic
document.addEventListener('DOMContentLoaded', () => {
    const primaryNav = document.querySelector('#primary-navigation');
    const navToggle = document.querySelector('.mobile-nav-toggle');

        function updateStates(isVisible) {
            primaryNav.setAttribute('data-visible', String(isVisible));
            navToggle.setAttribute('aria-expanded', String(isVisible));
        }

        function toggleNav() {
            const currently = primaryNav.getAttribute('data-visible') === 'true';
            updateStates(!currently);
        }

        navToggle.addEventListener('click', toggleNav);

        const mobileMq = window.matchMedia('(max-width: 55%)');
        function handleViewportChange(e) {
            if (e.matches) {
                updateStates(false);
            }
        }
        if (mobileMq.addEventListener) {
            mobileMq.addEventListener('change', handleViewportChange);
        } else {
            mobileMq.addListener(handleViewportChange);
        }
        handleViewportChange(mobileMq);
    })