const heroLinks = document.querySelectorAll('.hero-actions a, .panel-card a');

heroLinks.forEach((link) => {
  link.addEventListener('mouseenter', () => {
    link.style.transform = 'translateY(-1px)';
  });

  link.addEventListener('mouseleave', () => {
    link.style.transform = '';
  });
});