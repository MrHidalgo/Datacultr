

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
			// when window width is >= 320px
			320: {
				slidesPerView: 3,
				spaceBetween: 98
			},
			// when window width is >= 480px
			1024: {
				slidesPerView: 3,
				spaceBetween: 50
			},
			// when window width is >= 640px
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
