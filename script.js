// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
// JavaScript for toggling the collapsible content
document.querySelectorAll('.collapsible').forEach(button => {
    button.addEventListener('click', function () {
        const content = this.nextElementSibling;
        const arrow = this.querySelector('.arrow');
        
        // Toggle the content visibility
        content.style.display = content.style.display === 'block' ? 'none' : 'block';

        // Toggle the arrow direction
        if (content.style.display === 'block') {
            arrow.innerHTML = '&#9650;'; // Up arrow when expanded
        } else {
            arrow.innerHTML = '&#9660;'; // Down arrow when collapsed
        }
    });
});

let currentSlide = 1;
showSlide(currentSlide);

function changeSlide(n) {
  showSlide(currentSlide += n);
}

function goToSlide(n) {
  showSlide(currentSlide = n);
}

function showSlide(n) {
  const slides = document.getElementsByClassName("project-slide");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) currentSlide = 1;
  if (n < 1) currentSlide = slides.length;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-dot", "");
  }

  slides[currentSlide - 1].style.display = "block";
  dots[currentSlide - 1].className += " active-dot";
}
