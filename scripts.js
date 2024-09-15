
/* Swiperjs */

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // Pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
