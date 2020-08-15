

/**
 * @name initSwiper
 *
 * @description initialize Swiper
 */
const initSwiper = () => {

  new Swiper('.mediaCarousel', {
    loop: true,
    grabCursor: true,
    freeMode: false,
    effect: 'slide',
		speed: 800,
    slidesPerView: 3,
    spaceBetween: 98,
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 15
			},
			767: {
				slidesPerView: 2,
				spaceBetween: 30
			},
			1024: {
				slidesPerView: 3,
				spaceBetween: 30
			},
			1366: {
				slidesPerView: 3,
				spaceBetween: 98
			}
		},
    navigation: {
      nextEl: '.media__slider-btn--next',
      prevEl: '.media__slider-btn--prev',
    },
		on: {
    	init: function() {
				$('.media__slider').css({
					opacity: 1
				});
			}
		}
  });
};
