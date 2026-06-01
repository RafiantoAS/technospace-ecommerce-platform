$(document).ready(function () {
  let slides = $(".slide");
  let current = 0;

  slides.hide();
  slides.eq(0).show();

  setInterval(function () {
    slides.eq(current).fadeOut(500);

    current++;

    if (current >= slides.length) {
      current = 0;
    }

    slides.eq(current).fadeIn(500);
  }, 4000);
});
