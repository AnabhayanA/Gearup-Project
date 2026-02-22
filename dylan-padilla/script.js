const images = [
  "https://picsum.photos/seed/gearup1/700/360",
  "https://picsum.photos/seed/gearup2/700/360",
  "https://picsum.photos/seed/gearup3/700/360",
  "https://picsum.photos/seed/gearup4/700/360"
];

let currentIndex = 0;

const imageElement = document.getElementById("gallery-image");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");

const updateImage = () => {
  imageElement.src = images[currentIndex];
};

prevButton?.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
});

nextButton?.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
});
