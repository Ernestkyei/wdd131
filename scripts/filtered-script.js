document.addEventListener("DOMContentLoaded", () => {
    const templeContainer = document.getElementById("temple-container");

    // Function to display temples
    function displayTemples(filteredTemples) {
        templeContainer.innerHTML = ""; // Clear old content

        filteredTemples.forEach(temple => {
            const templeCard = document.createElement("div");
            templeCard.classList.add("temple-card");

            templeCard.innerHTML = `
                <h2>${temple.templeName}</h2>
                <p><strong>Location:</strong> ${temple.location}</p>
                <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq. ft.</p>
                <img src="${temple.urlOriginal}" alt="${temple.templeName} Image" class="temple-image" onerror="this.src='fallback.jpg';">
            `;

            templeContainer.appendChild(templeCard);
        });
    }

    // Display all temples by default
    displayTemples(temples);

    // Filter functions for different buttons
    document.getElementById("home").addEventListener("click", () => displayTemples(temples));

    document.getElementById("old").addEventListener("click", () => {
        const oldTemples = temples.filter(temple => {
            const year = parseInt(temple.dedicated.split(",")[0]); // Extract year
            return year < 1900;
        });
        displayTemples(oldTemples);
    });

    document.getElementById("new").addEventListener("click", () => {
        const newTemples = temples.filter(temple => {
            const year = parseInt(temple.dedicated.split(",")[0]);
            return year >= 2000;
        });
        displayTemples(newTemples);
    });

    document.getElementById("large").addEventListener("click", () => {
        const largeTemples = temples.filter(temple => temple.area > 90000);
        displayTemples(largeTemples);
    });

    document.getElementById("small").addEventListener("click", () => {
        const smallTemples = temples.filter(temple => temple.area < 10000);
        displayTemples(smallTemples);
    });

    // Hamburger menu toggle logic
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        // Toggle the menu visibility
        navLinks.classList.toggle("open");

        // Rotate the hamburger and toggle its icon between '☰' and '×'
        hamburger.classList.toggle("open"); // This will rotate the hamburger and change to "X"
    });

    // Update the current year in the footer
    document.getElementById("currentyear").textContent = new Date().getFullYear();

    // Update the last modified date in the footer
    document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;
});
