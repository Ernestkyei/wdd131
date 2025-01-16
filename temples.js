// Set the current year in the footer
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Set the last modified date in the footer
document.getElementById('lastModified').textContent = "Last modified: " + document.lastModified;

// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');

// Toggle the navigation menu visibility
hamburger.addEventListener('click', function() {
    navList.classList.toggle('show');
});

// Change main heading based on menu item clicked
const navItems = document.querySelectorAll('nav ul li a');
navItems.forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        // Update the heading based on the clicked item
        const section = item.getAttribute('href').replace('#', '');
        document.getElementById('main-heading').innerText = section.charAt(0).toUpperCase() + section.slice(1) + " Temple Gallery";
    });
});
