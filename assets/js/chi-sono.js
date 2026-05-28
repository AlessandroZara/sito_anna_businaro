document.querySelectorAll('[data-toggle-details]').forEach((button) => {
  button.addEventListener('click', () => {
    const target = document.getElementById(button.getAttribute('aria-controls'));
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!expanded));
    if (target) target.hidden = expanded;
    button.textContent = expanded ? 'Mostra dettagli' : 'Nascondi dettagli';
  });
});