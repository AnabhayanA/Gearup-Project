let progress = 0;

const progressButton = document.getElementById("progress-btn");
const progressText = document.getElementById("progress-text");
const progressFill = document.getElementById("progress-fill");
const badgeText = document.getElementById("badge-text");
const hintButton = document.getElementById("hint-btn");
const hintOutput = document.getElementById("hint-output");
const pokeballBadge = document.getElementById("pokeball-badge");
const secretPanel = document.getElementById("secret-panel");
const encounterButton = document.getElementById("encounter-btn");
const encounterOutput = document.getElementById("encounter-output");
const secretMessage = document.getElementById("secret-message");
const widgetHintButton = document.getElementById("widget-hint");
const widgetUnlockButton = document.getElementById("widget-unlock");
const widgetEncounterButton = document.getElementById("widget-encounter");
const widgetLegendButton = document.getElementById("widget-legend");

let badgeClicks = 0;

const hints = [
  "Hint: One secret is hidden at the bottom-right corner.",
  "Hint: Try clicking a hidden symbol more than once.",
  "Hint: Keyboard trainers can unlock a legendary mode.",
  "Hint: Type POKE to activate another surprise."
];

const encounters = ["Pikachu", "Charmander", "Squirtle", "Bulbasaur", "Eevee", "Lucario"];

let hintIndex = 0;
let keyBuffer = "";

const showSecretPanel = (message) => {
  secretPanel?.classList.add("show");
  secretPanel?.setAttribute("aria-hidden", "false");
  if (secretMessage && message) {
    secretMessage.textContent = message;
  }
};

const showNextHint = () => {
  hintOutput.textContent = hints[hintIndex];
  hintIndex = (hintIndex + 1) % hints.length;
};

const triggerEncounter = () => {
  const randomIndex = Math.floor(Math.random() * encounters.length);
  encounterOutput.textContent = `A wild ${encounters[randomIndex]} appeared!`;
};

const toggleLegendaryMode = () => {
  document.body.classList.toggle("legendary-mode");
  showSecretPanel("Legendary mode toggled!");
};

progressButton?.addEventListener("click", () => {
  progress += 20;

  if (progress > 100) {
    progress = 0;
  }

  progressText.textContent = `Project Progress: ${progress}%`;
  progressFill.style.width = `${progress}%`;

  if (progress === 100 && badgeText) {
    badgeText.textContent = "🏅 Badge unlocked: Project Champion!";
  } else if (badgeText) {
    badgeText.textContent = "";
  }
});

hintButton?.addEventListener("click", () => {
  showNextHint();
});

pokeballBadge?.addEventListener("click", () => {
  badgeClicks += 1;

  if (badgeClicks >= 4) {
    showSecretPanel("Secret Pokédex Unlocked!");
  }
});

encounterButton?.addEventListener("click", () => {
  triggerEncounter();
});

widgetHintButton?.addEventListener("click", () => {
  showNextHint();
});

widgetUnlockButton?.addEventListener("click", () => {
  showSecretPanel("Trainer Widget used: Secret unlocked.");
});

widgetEncounterButton?.addEventListener("click", () => {
  showSecretPanel("Wild encounter ready.");
  triggerEncounter();
});

widgetLegendButton?.addEventListener("click", () => {
  toggleLegendaryMode();
});

window.addEventListener("keydown", (event) => {
  keyBuffer = (keyBuffer + event.key.toLowerCase()).slice(-12);

  if (keyBuffer.includes("poke")) {
    showSecretPanel("Code accepted: Pokédex online.");
  }

  if (keyBuffer.includes("legend")) {
    toggleLegendaryMode();
  }
});
