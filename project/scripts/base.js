document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu');
    const navigation = document.querySelector('.navigation');
    const currentYearSpan = document.getElementById('currentyear');
    const lastUpdatedSpan = document.getElementById('last-updated');

    // Toggle navigation menu
    menuButton.addEventListener('click', function() {
        navigation.classList.toggle('open');
        // Toggle the Font Awesome icon:
        if (navigation.classList.contains('open')) {
            menuButton.innerHTML = '<i class="fas fa-times"></i>'; // Change to "X"
        } else {
            menuButton.innerHTML = '<i class="fas fa-bars"></i>'; // Change back to hamburger
        }
    });

    // Set current year
    currentYearSpan.textContent = new Date().getFullYear();

    // Set last updated date (you might get this from a server or build process)
    lastUpdatedSpan.textContent = document.lastModified;
});