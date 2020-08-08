"use strict";

/*
*
* ============================
* ============================
*
* Include lib:
*
* - webFontLoader.js;
* - preventBehavior.js;
* - svg4everybody.js;
*
* ============================
* ============================
* */

/**
 * @name initPreventBehavior
 *
 * @description
 */
var initPreventBehavior = function initPreventBehavior() {

	var link = document.querySelectorAll("a");

	link.forEach(function (val, idx) {

		val.addEventListener("click", function (e) {
			if (val.getAttribute("href") === "#") {
				e.preventDefault();
			}
		});
	});
};

/**
 * @name initSwiper
 *
 * @description initialize Swiper
 */
var initSwiper = function initSwiper() {

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
			480: {
				slidesPerView: 3,
				spaceBetween: 98
			},
			// when window width is >= 640px
			640: {
				slidesPerView: 3,
				spaceBetween: 98
			}
		},
		navigation: {
			nextEl: '.media__slider-btn--next',
			prevEl: '.media__slider-btn--prev'
		},
		on: {
			init: function init() {
				$('.media__slider').css({
					opacity: 1
				});
			}
		}
	});
};

/**
 * @description Document DOM ready.
 */
(function () {
	/*
 * CALLBACK :: start
 * ============================================= */

	/*
 * CALLBACK :: end
 * ============================================= */

	/**
  * @name initNative
  *
  * @description Init all method
  */
	var initNative = function initNative() {
		// default
		initPreventBehavior();
		// ==========================================

		// lib
		initSwiper();
		// ==========================================

		// callback
		// ==========================================
	};

	window.addEventListener('load', function () {
		initNative();
	});
})();