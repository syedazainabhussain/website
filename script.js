function highlightBox(clickedBox) {
  document.querySelectorAll('.project-box').forEach(box => {
    box.classList.remove('active');
  });
  clickedBox.classList.add('active');
}
