window.onload = function() {
    // Get the current year and set it in the footer
    const currentYear = new Date().getFullYear();
    document.getElementById("current-year").textContent = currentYear;

    // Get the last modified date of the document and set it in the footer
    const lastModified = document.lastModified;
    document.getElementById("last-modified").textContent = lastModified;
};
