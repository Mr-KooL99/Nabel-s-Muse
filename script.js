const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

// Toggle Mobile Menu
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
  });
}

// Close Menu On Link Click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('nav-active');
  });
});
function moveSlide(button, direction) {
  const container = button.parentElement;
  const track = container.querySelector('.slider-track');
  const slideWidth = track.clientWidth;
  
  track.scrollBy({
    left: direction * slideWidth,
    behavior: 'smooth'
  });
}
