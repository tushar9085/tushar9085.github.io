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






// Modal Template
const modalTemplate = document.getElementById("modalTemplate");

// Function to open the modal and update content
function openModal(title, imageSrc) {
    // Set the title and image source dynamically
    document.getElementById("modalTitle").textContent = title;
    document.getElementById("modalImage").src = imageSrc;

    // Show the modal
    modalTemplate.style.display = "flex";
    setTimeout(function() {
        modalTemplate.style.opacity = "1"; // Fade-in effect
    }, 50);
}

// Close the modal
document.querySelector(".close").addEventListener("click", function() {
    modalTemplate.style.opacity = "0"; // Fade-out effect
    setTimeout(function() {
        modalTemplate.style.display = "none"; // Hide the modal
    }, 500);
});

// Trigger modal when clicking on any element with class 'triggerModal'
const triggerLinks = document.querySelectorAll(".triggerModal");
triggerLinks.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        // Get data from the clicked link
        const title = link.getAttribute("data-title");
        const imageSrc = link.getAttribute("data-image");
        
        // Open the modal with the dynamic content
        openModal(title, imageSrc);
    });
});

// Close the modal if the user clicks anywhere outside of the modal content
window.addEventListener("click", function(event) {
    if (event.target === modalTemplate) {
        modalTemplate.style.opacity = "0"; // Fade-out effect
        setTimeout(function() {
            modalTemplate.style.display = "none"; // Hide the modal
        }, 500);
    }
});







document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".carousel-slide");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    let currentSlide = 0;

    // Function to initialize the carousel
    function initializeCarousel() {
        slides.forEach((slide, index) => {
            if (index === currentSlide) {
                slide.classList.add("active");
                slide.style.transform = "translateX(0)";
            } else {
                slide.classList.remove("active");
                slide.style.transform = index < currentSlide ? "translateX(-100%)" : "translateX(100%)";
            }
        });
    }

    // Function to move slides
    function moveSlide(direction) {
        slides[currentSlide].classList.remove("active");

        // Calculate the next slide index
        currentSlide = (currentSlide + direction + slides.length) % slides.length;

        slides.forEach((slide, index) => {
            if (index === currentSlide) {
                slide.classList.add("active");
                slide.style.transform = "translateX(0)";
            } else {
                slide.style.transform = index < currentSlide ? "translateX(-100%)" : "translateX(100%)";
            }
        });
    }

    // Event listeners for navigation
    prevButton.addEventListener("click", () => moveSlide(-1));
    nextButton.addEventListener("click", () => moveSlide(1));

    // Auto-slide every 5 seconds
    setInterval(() => moveSlide(1), 10000);

    // Initialize the carousel
    initializeCarousel();
});


















/*
inspiration
https://dribbble.com/shots/4684682-Aquatic-Animals
*/

var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 3,
      slideShadows: true
    },
    keyboard: {
      enabled: true
    },
    mousewheel: {
      thresholdDelta: 70
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    breakpoints: {
      640: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 1
      },
      1024: {
        slidesPerView: 2
      },
      1560: {
        slidesPerView: 3
      }
    }
  });


















