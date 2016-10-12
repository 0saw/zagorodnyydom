(function () {
  var browserSupport = (function () {
    yepnope({
      test: Modernizr.requestanimationframe,
      nope: 'scripts/vendor/requestAnimationFrame.js'
    });
    yepnope({
      test: Modernizr.flexbox && Modernizr.flexwrap,
      nope: 'scripts/vendor/flexibility.min.js'
    });
    yepnope({
      test: Modernizr.cssremunit,
      nope: 'scripts/vendor/rempoly.js'
    });
    yepnope({
      test: (Modernizr.cssvhunit && Modernizr.cssvwunit &&
             Modernizr.cssvmaxunit && Modernizr.cssvminunit),
      nope: 'scripts/vendor/vminpoly.js'
    });
  })();

  $tinyNav = $('#tinyNav');

  $tinyNav
    .html($('.nav_header > ul').clone())
    .append('<span aria-haspopup="true" />')
    .on('click', '> span', function (e) {
      e.preventDefault();
      e.stopPropagation();
      $tinyNav.toggleClass('open');
    });

  $(document.body).on('click', function (e) {
    $tinyNav.removeClass('open');
  });

})();
