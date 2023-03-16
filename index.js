const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.nav-links');

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('active');
  navLinks.classList.toggle('active');
});


// Get the number section element
const numberSection = document.getElementById('number-section');

// Get the number elements
const numbers = document.querySelectorAll('.number');

// Listen for the scroll event
window.addEventListener('scroll', () => {
  // Get the section's position and height
  const sectionTop = numberSection.offsetTop;
  const sectionHeight = numberSection.offsetHeight;

  // Calculate the scroll position
  const scrollPosition = window.pageYOffset + window.innerHeight;

  // Check if the user has scrolled to the section
  if (scrollPosition > sectionTop + sectionHeight * 0.5) {
    // Update the numbers
    numbers.forEach((number, index) => {
      // Calculate the new value for this number
      const value = Math.pow(50, index);

      // Update the number's text
      number.innerText = value;

      // Animate the number's appearance
      setTimeout(() => {
        number.style.opacity = 1;
        number.style.transform = 'translateY(0)';
      }, 100 + index * 500);
    });
  }
});





var faq = document.getElementsByClassName("faq-page");
var i;
for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");
        /* Toggle between hiding and showing the active panel */
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}
