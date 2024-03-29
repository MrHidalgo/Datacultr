

/**
 * @name initSmoothScroll
 *
 * @description Smooth transition to anchors to the block.
 */
const initSmoothScroll = (
  btnName = "[anchor-js]",
  animateSpeed = 850
) => {

  $(btnName).on("click", (e) => {
		if(!$($(e.currentTarget).attr('href')).length) {
  		return;
		}

    let linkHref = $(e.currentTarget).attr('href'),
      headerHeight = $(".header").outerHeight() || 0,
      topHeightOffset = $(linkHref).offset().top - headerHeight;

    $('body, html').animate({
      scrollTop: topHeightOffset
    }, animateSpeed);

  });

};
