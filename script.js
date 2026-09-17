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
