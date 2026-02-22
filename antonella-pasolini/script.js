const facts = [
  "JavaScript can update a web page without refreshing it.",
  "GitHub helps teams track changes and collaborate safely.",
  "CSS animations can make websites feel more interactive.",
  "HTML gives structure to everything you see on a web page."
];

const factButton = document.getElementById("fact-btn");
const factOutput = document.getElementById("fact-output");

factButton?.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * facts.length);
  factOutput.textContent = facts[randomIndex];
});
