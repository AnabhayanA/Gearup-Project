let progress = 0;

const progressButton = document.getElementById("progress-btn");
const progressText = document.getElementById("progress-text");
const progressFill = document.getElementById("progress-fill");

progressButton?.addEventListener("click", () => {
  progress += 20;

  if (progress > 100) {
    progress = 0;
  }

  progressText.textContent = `Project Progress: ${progress}%`;
  progressFill.style.width = `${progress}%`;
});
