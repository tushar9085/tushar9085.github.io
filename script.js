// Select the menu button and navbar
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileNavbar = document.getElementById("mobile-navbar");
const mobileNavLinks = mobileNavbar.querySelectorAll("a");

// Toggle the navbar when the menu button is clicked
mobileMenuButton.addEventListener("click", () => {
    mobileNavbar.classList.toggle("active"); // Add/remove the "active" class
});

// Close the navbar when a link is clicked
mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
        mobileNavbar.classList.remove("active"); // Remove "active" class to hide the navbar
    });
});



























// Scroll-to-Top Button Logic
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
const isMobile = window.matchMedia("(max-width: 768px)").matches; // Check screen size

// Show the button when the user scrolls down 100px (only if not on mobile)
window.onscroll = function () {
    if (!isMobile && (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100)) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// Scroll back to the top when the button is clicked
scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth", // Smooth scrolling
    });
});






// Highlight the active section in the navbar
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll", () => {
    let currentSectionId = null;

    // Loop through all sections to find the one in the viewport
    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 80; // Adjust for some offset (e.g., navbar height)
        const sectionBottom = sectionTop + section.offsetHeight;

        // Check if the current scroll position is within this section
        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
            currentSectionId = section.getAttribute("id");
        }
    });

    // Update active class for navbar links
    navLinks.forEach((link) => {
        const linkTarget = link.getAttribute("href").substring(1); // Get the section ID
        if (linkTarget === currentSectionId) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});








