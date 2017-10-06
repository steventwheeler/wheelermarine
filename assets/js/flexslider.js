---
---

// Initialise FlexSlider for Carousels
(function($) {
  $(document).ready(function() {
    $('.flexslider').flexslider({
      animation: "fade",
      controlNav: false,
      directionNav: true,
      slideshowSpeed: 5000,
      animationSpeed: 600,
      // smoothHeight: true,
      touch: true
    });
  });
})(jQuery);
