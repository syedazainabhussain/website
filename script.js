// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Highlight box on click
function highlightBox(box) {
  document.querySelectorAll('.project-box').forEach(b => b.classList.remove('active'));
  box.classList.add('active');
}
