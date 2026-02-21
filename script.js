const menuButton = document.getElementById("menu-btn");
const nav = document.getElementById("site-nav");
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

menuButton?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  formMessage.textContent = "Thanks! Your message has been sent.";
  contactForm.reset();
});
