document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".product-card");

  function revealCards() {
    const windowHeight = window.innerHeight;

    cards.forEach((card) => {
      const cardTop = card.getBoundingClientRect().top;

      if (cardTop < windowHeight - 100) {
        card.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", revealCards);

  revealCards();
});
