const options = {
    autoplay: true,
  initialSlide: 1,
  // freeMode: true,
  // noSwipingSelector: 'a',
  // watchSlidesProgress: true,
  // edgeSwipeDetection: true,
  // touchReleaseOnEdges: true,
  // preventClicks :true,
    centeredSlides: true,
    centeredSlidesBounds: true,
    centerInsufficientSlides: true,
    slidesPerView: 1, 
    slidesPerColumn: 1,
    loop: true,
    // spaceBetween: 8,
    breakpoints: {
      1200: {
        slidesPerView: 3,
        spaceBetween: 16,
        initialSlide: 0,
          
      },
    },
    navigation: {
        nextEl: ".team-next",
        prevEl: ".team-prev",
    },
};
const swiper = new Swiper('.js-swiper-team', options);