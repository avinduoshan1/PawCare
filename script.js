// Get all slide elements
const slides = document.querySelectorAll('.slide');

// Set the first slide as active
if (slides.length > 0) {
    slides[0].classList.add('active');
}

// Function to change slides
let currentSlide = 0;
const changeSlide = () => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
};

// Change slide every 5 seconds
setInterval(changeSlide, 5500);


// Auto advance slides


// Service card hover effect
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseover', function() {
        this.style.transform = 'translateY(-10px)';
    });
    card.addEventListener('mouseout', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Function to type text letter by letter
function typeText(element, text, speed) {
    let index = 0;
    function type() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, speed);
        } else {
            // Remove the cursor after typing is complete
            element.style.borderRight = 'none';
        }
    }
    type();
}

// Get the <p> element inside .welcome class
const paragraph = document.querySelector('.welcome p.type-js');

// Start typing animation
typeText(paragraph, paragraph.getAttribute('data-text'), 100);


// Function to set active class based on URL hash
function setActiveLink() {
    // Get current page from URL (e.g., #home, #services)
    const currentPage = window.location.hash.replace('#', '') || 'home';

    // Get all nav links
    const navLinks = document.querySelectorAll('.nav-links li');

    // Loop through each link and add active class to the matching one
    navLinks.forEach(link => {
        if (link.getAttribute('data-page') === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Run on page load
setActiveLink();

// When page loads, home should be highlighted with #ff6600
document.addEventListener('DOMContentLoaded', function() {
    // Get all nav items
    const navItems = document.querySelectorAll('.nav-item');
    
    // Set home as active initially
    const homeItem = document.querySelector('[data-page="home"]');
    if (homeItem) {
        homeItem.style.color = '#ff6600';
    }
});

// Listen for scroll events to change colors based on section
window.addEventListener('scroll', function() {
    // Get all sections
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-item');
    
    // Check which section is in viewport
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const scrollPosition = window.scrollY;
        
        // If this section is in view
        if (scrollPosition >= sectionTop - 100 && 
            scrollPosition < sectionTop + sectionHeight - 100) {
            
            // Reset all nav items to white
            navItems.forEach(item => {
                item.style.color = 'white';
            });
            
            // Get corresponding nav item and set its color
            const correspondingNav = document.querySelector(
                `[data-page="${section.id}"]`
            );
            if (correspondingNav) {
                correspondingNav.style.color = '#ff6600';
            }
        }
    });
});

document.querySelector('[data-page="service"]').addEventListener('click', function() {
    document.getElementById('service').scrollIntoView({ 
        behavior: 'smooth'
    });
});

document.querySelector('[data-page="gallery"]').addEventListener('click', function() {
    document.getElementById('gallery').scrollIntoView({ 
        behavior: 'smooth'
    });
});

document.querySelector('[data-page="about"]').addEventListener('click', function() {
    document.getElementById('about').scrollIntoView({ 
        behavior: 'smooth'
    });
});

document.querySelector('[data-page="contact"]').addEventListener('click', function() {
    document.getElementById('contact').scrollIntoView({ 
        behavior: 'smooth'
    });
});



document.querySelector('[data-page="home"]').addEventListener('click', function(e) {
    e.preventDefault();  // Prevent default behavior if it's a link
    
    // If we're clicking home, scroll to top instead of the home section
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    
    // Update the active state of navigation items
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.style.color = 'white';
    });
    
    // Set home nav item to orange
    this.style.color = '#ff6600';
});

// Gallery Filter Functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-items');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            galleryItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

function submitForm() {
    // Get input values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    
    // Check if all fields are filled
    if (name === "" || email === "" || message === "") {
        alert("Please fill all details.");
    } else {
        // Show confirmation alert
        alert("your submit is sucsuessful");
        const userChoice = confirm("Choose our services?");
        if (userChoice) {
            // If 'OK' is clicked, log details in console
            console.log("Name: " + name);
            console.log("Email: " + email);
            console.log("Message: " + message);
            alert("Thank you for choosing our services!");
            document.getElementById("contactForm").reset(); // Clear form
            
            // Redirect to price.html
            window.location.href = "price.html";
        } else {
            alert("You cancelled the service selection.");
        }
    }
}


function toggleMenu() {
    var sidebar = document.getElementById("rightSidebar");
    sidebar.classList.toggle("active");
}

function closeSidebar() {
    var sidebar = document.getElementById("rightSidebar");
    if (window.innerWidth <= 768) {
        sidebar.classList.remove("active");
    }
}

document.querySelectorAll('.checkout-btn').forEach(button => {
    button.addEventListener('click', () => {
        window.location.href = "payment.html";
    });
});

window.addEventListener('resize', closeSidebar);

// Close the sidebar automatically on page load if the screen width is 768px or less
document.addEventListener('DOMContentLoaded', closeSidebar);

function closeSidebar() {
    var sidebar = document.getElementById("rightSidebar");
    sidebar.classList.remove("active");
}


