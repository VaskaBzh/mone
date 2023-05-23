import Swiper from 'swiper';
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
}