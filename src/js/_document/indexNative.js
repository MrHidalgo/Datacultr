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
	const initNative = () => {
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

	window.addEventListener('load', () => {
		initNative();
	});
})();
