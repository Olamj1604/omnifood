document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.main-nav');
    const menuIcon = document.querySelector('ion-icon[name="menu-outline"]');
    const closeIcon = document.querySelector('ion-icon[name="close-outline"]');

    navToggle.addEventListener('click', () => {
        // Toggle the 'active' class on the navigation menu
        navLinks.classList.toggle('active');

        // Toggle visibility of icons
        if (navLinks.classList.contains('active')) {
            menuIcon.style.display = 'none';
            closeIcon.style.display = 'block';
        } else {
            menuIcon.style.display = 'block';
            closeIcon.style.display = 'none'
        }
    })
})

// () -> Parentheses