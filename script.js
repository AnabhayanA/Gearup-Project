const menuButton = document.getElementById("menu-btn");
const nav = document.getElementById("site-nav");
const themeButton = document.getElementById("theme-btn");
const toTopButton = document.getElementById("to-top");
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");
const messageInput = document.getElementById("message-input");
const charCount = document.getElementById("char-count");
const navLinks = document.querySelectorAll('.site-nav a[href^="#"]');
const sections = document.querySelectorAll("section[id]");
const revealItems = document.querySelectorAll(".reveal");

const storedTheme = localStorage.getItem("theme");
if (storedTheme === "dark") {
  document.documentElement.setAttribute("data-theme", "dark");
  if (themeButton) themeButton.textContent = "☀️";
}

themeButton?.addEventListener("click", () => {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  if (isDark) {
    document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
    themeButton.textContent = "🌙";
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    themeButton.textContent = "☀️";
  }
});

menuButton?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
        });
      }
    });
  },
  { threshold: 0.55 }
);

sections.forEach((section) => sectionObserver.observe(section));

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealItems.forEach((item) => revealObserver.observe(item));

const updateCharCount = () => {
  if (!messageInput || !charCount) return;
  charCount.textContent = `${messageInput.value.length} / 300`;
};

messageInput?.addEventListener("input", updateCharCount);
updateCharCount();

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const submitButton = contactForm.querySelector("button[type='submit']");
  if (submitButton) submitButton.textContent = "Sending...";
  formMessage.textContent = "";

setTimeout(() => {
    if (submitButton) submitButton.textContent = "Send Message";
    formMessage.textContent = "Thanks! Your message has been sent.";
    contactForm.reset();
    updateCharCount();
  }, 650);
});

const handleScroll = () => {
  if (!toTopButton) return;
  const showButton = window.scrollY > 280;
  toTopButton.classList.toggle("show", showButton);
};

window.addEventListener("scroll", handleScroll);
handleScroll();

toTopButton?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
