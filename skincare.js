<script>
// Add to Cart Functionality
function addToCart(product) {
  alert(${product} has been added to your cart!);
}

// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for reaching out to us! We will get back to you shortly.');
});

// Scroll Reveal Animation
const sections = document.querySelectorAll("section");

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.8;

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add("reveal");
    } else {
      section.classList.remove("reveal");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

// Smooth Scroll Effect
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth",
    });
  });
});
  </script>
