document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  if (!form || !status) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.querySelector("#contact-name");
    const email = form.querySelector("#contact-email");
    const type = form.querySelector("#contact-type");
    const message = form.querySelector("#contact-message");
    const privacy = form.querySelector("#contact-privacy");

    const requiredFields = [name, email, type, message];
    const missing = requiredFields.some((field) => !field.value.trim()) || !privacy.checked;

    if (missing) {
      status.textContent = "Compila tutti i campi obbligatori e accetta la privacy policy.";
      status.style.color = "crimson";
      return;
    }

    status.textContent = "Grazie, la tua richiesta è stata preparata correttamente.";
    status.style.color = "var(--color-primary)";

    form.reset();
  });
});