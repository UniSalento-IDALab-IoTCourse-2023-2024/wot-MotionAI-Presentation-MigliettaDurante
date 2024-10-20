document.querySelectorAll(".carousel").forEach((carouselContainer) => {
  const carousel = carouselContainer.querySelector(".carousel-inner");
  const items = carouselContainer.querySelectorAll(".carousel-item");
  const prevButton = carouselContainer.querySelector(".prev");
  const nextButton = carouselContainer.querySelector(".next");
  let currentIndex = 0;

  function updateCarousel() {
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
  }

  prevButton.addEventListener("click", () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
    updateCarousel();
  });

  nextButton.addEventListener("click", () => {
    currentIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
    updateCarousel();
  });
});
