// Initialize DOM elements
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const sections = document.querySelectorAll('.section');
const backToTopButton = document.getElementById('back-to-top');
const sendButton = document.getElementById('send-btn');
const chatInput = document.getElementById('chat-input');
const responseMessage = document.getElementById('response-message');

// Show only the Home and Footer sections initially
function initializeSections() {
    sections.forEach(section => {
        if (section.id === 'home' || section.id === 'footer') {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}

// Call the initialize function on page load
initializeSections();

// Toggle the hamburger menu on click
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scroll for Anchor Links, Show Only Relevant Section, and Mark Active Section
document.querySelectorAll('a[data-section]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Hide all sections except Home and Footer
        sections.forEach(section => {
            if (section.id !== 'home' && section.id !== 'footer') {
                section.style.display = 'none';
            }
        });

        // Show only the clicked section
        const sectionId = this.getAttribute('data-section');
        const sectionToShow = document.getElementById(sectionId);
        if (sectionToShow) {
            sectionToShow.style.display = 'block';
        }

        // Mark the active section link with an underline
        document.querySelector('.nav-links a.active')?.classList.remove('active');
        this.classList.add('active');

        // Close the mobile menu if open
        navLinks.classList.remove('active');

        // Smooth scroll to the selected section
        if (sectionToShow) {
            sectionToShow.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Show/hide the Back to Top Button based on scroll position
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Scroll to the top when the Back to Top Button is clicked
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Close the Mobile Menu When a Link is Clicked
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Chatbot Message Handling
sendButton.addEventListener('click', () => {
    const userMessage = chatInput.value.trim();

    if (userMessage === "") {
        responseMessage.textContent = "Please enter a message!"; // Prompt for input if the input is empty
    } else {
        responseMessage.textContent = "Thanks for reaching out! Let's stay connected!"; // Show thank you message
    }

    chatInput.value = ""; // Clear the input field after clicking send
});

// Toggle the active class on navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('.nav-links a.active')?.classList.remove('active');
        this.classList.add('active');
    });
});

// Typed.js initialization
var typed = new Typed('#element', {
    strings: [
        'DevOps Principles!',
        'Fundamentals of Cloud Computing!',
        'Networking Basics!',
        'Version Control with Git!',
        'Explore my creative journey!'
    ],
    typeSpeed: 50,
    showCursor: true, // Ensure the cursor is visible
    cursorChar: '|', // Use the pipe character as the cursor
    loop: true // Keep the animation looping
});
