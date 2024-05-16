const options = {
  autoplay: {
    delay: 15000,
  },
  initialSlide: 1,
  effect: "coverflow",
  centeredSlides: true,
  centeredSlidesBounds: true,
  centerInsufficientSlides: true,
  slidesPerView: 1,
  slidesPerColumn: 1,
  initialSlide: 1,
  loop: true,
  spaceBetween: 8,
  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
  navigation: {
    nextEl: ".testimonials-next",
    prevEl: ".testimonials-prev",
  },
};
const swiper = new Swiper(".js-swiper-testimonials", options);
