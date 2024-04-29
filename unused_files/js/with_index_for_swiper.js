// <script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script>

    if (screen.width < 1199) {
    console.log('Slider loaded');

    var script = document.createElement('script');
    script.src = './js/slider.js';
    document.head.appendChild(script);
    }
    if (screen.width >= 1200) {
    console.log('Slider Desk loaded');

    var script = document.createElement('script');
    script.src = './js/slider_desk.js';
    document.head.appendChild(script);
    }
