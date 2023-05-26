export function SwiperInit() {
  new Swiper('.presentation .swiper', {
    direction: 'horizontal',
    loop: true,
    speed: 400,
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  new Swiper('.infrastructure .swiper', {
    direction: 'horizontal',
    loop: true,
    speed: 400,
    slidesPerView: 1,
    pagination: {
      el: '.infrastructure .swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return `<span class="swiper-pagination-bullet">${index}</span>`;
      },
    },
  });
}