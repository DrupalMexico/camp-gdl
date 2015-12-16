(function ($) {
  'use strict';

  $.fn.BodyReady = function() {
    $('.fighter-camp img').delay(200).fadeTo(100, 1, function() {
      $('.date-camp img').each(function(i) {
        $(this).delay(100*i).fadeTo(200,1);
      });
    });
  }

  $(document).ready(function() {
    $('body.path-frontpage').BodyReady();
  });
}(jQuery));
