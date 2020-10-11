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
 * @name initSmoothScroll
 *
 * @description Smooth transition to anchors to the block.
 */
var initSmoothScroll = function initSmoothScroll() {
	var btnName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "[anchor-js]";
	var animateSpeed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 850;


	$(btnName).on("click", function (e) {
		if (!$($(e.currentTarget).attr('href')).length) {
			return;
		}

		var linkHref = $(e.currentTarget).attr('href'),
		    headerHeight = $(".header").outerHeight() || 0,
		    topHeightOffset = $(linkHref).offset().top - headerHeight;

		$('body, html').animate({
			scrollTop: topHeightOffset
		}, animateSpeed);
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
 * @name initValidation
 *
 * @description
 */
var initValidation = function initValidation() {
	(function ($) {
		$.fn.inputFilter = function (inputFilter) {
			return this.on("input keydown keyup mousedown mouseup select contextmenu drop", function () {
				if (inputFilter(this.value)) {
					this.oldValue = this.value;
					this.oldSelectionStart = this.selectionStart;
					this.oldSelectionEnd = this.selectionEnd;
				} else if (this.hasOwnProperty("oldValue")) {
					this.value = this.oldValue;
					this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
				} else {
					this.value = "";
				}
			});
		};
	})(jQuery);

	/**
  * Integer >= 0 (use + and - separator)
  */
	var uintTextPhoneBox = function uintTextPhoneBox() {
		$("[uintTextPhoneBox-js]").inputFilter(function (value) {
			return (/^\+?[0-9\s\-]*$/.test(value)
			);
		});
	};

	uintTextPhoneBox();

	/**
  *
  * @param form
  */
	var validationSubmitHandler = function validationSubmitHandler(form) {
		$('.contacts__form-loader').addClass('is-show');

		$.ajax({
			type: "POST",
			url: $(form).attr('action'),
			data: $(form).serialize(),
			success: function success(response) {
				var data = $.parseJSON(response);

				if (data.success) {
					$('.contacts__form-loader').removeClass('is-show');

					$('.contacts__form-message').addClass('is-show');
					setTimeout(function (ev) {
						$('.contacts__form-message').removeClass('is-show');
					}, 3000);

					$(form).find('input, textarea').val('');
				} else {
					// do something
				}
			},
			error: function error(jqXHR, textStatus, errorThrown) {
				console.log(textStatus + ' : ' + errorThrown);
			}
		});
	};

	/**
  *
  * @param error
  * @param element
  */
	var validationErrorPlacement = function validationErrorPlacement(error, element) {
		error.appendTo(element.closest('.contacts__form-field'));
	};

	/**
  *
  * @param element
  */
	var validationHighlight = function validationHighlight(element) {
		$(element).closest('.contacts__form-field').addClass('is-error');
	};

	/**
  *
  * @param element
  */
	var validationUnhighlight = function validationUnhighlight(element) {
		$(element).closest('.contacts__form-field').removeClass('is-error');
	};

	/**
  * @description
  */
	$("#contactForm").validate({
		submitHandler: validationSubmitHandler,
		errorPlacement: validationErrorPlacement,
		highlight: validationHighlight,
		unhighlight: validationUnhighlight,
		onkeyup: function onkeyup(element) {
			$(element).valid();
		},
		rules: {
			name: 'required',
			email: {
				required: true,
				email: true
			},
			phone: 'required',
			message: 'required'
		},
		messages: {
			name: {
				required: "Please specify the Name"
			},
			email: {
				required: "Please specify the Email",
				email: "Must format - name@domain.com"
			},
			phone: {
				required: "Please specify the Phone"
			},
			message: {
				required: "Please specify the Message"
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
		initValidation();
		initSmoothScroll();
		// ==========================================

		// callback
		// ==========================================
	};

	window.addEventListener('load', function () {
		initNative();
	});
})();