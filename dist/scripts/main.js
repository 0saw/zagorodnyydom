(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"C:\\Users\\iamle\\Documents\\Work\\_inprogress\\zagorodnyydom.ru\\zagorodnyydom\\src\\scripts\\main.js":[function(require,module,exports){
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

},{}]},{},["C:\\Users\\iamle\\Documents\\Work\\_inprogress\\zagorodnyydom.ru\\zagorodnyydom\\src\\scripts\\main.js"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIoZnVuY3Rpb24gKCkge1xuICB2YXIgYnJvd3NlclN1cHBvcnQgPSAoZnVuY3Rpb24gKCkge1xuICAgIHllcG5vcGUoe1xuICAgICAgdGVzdDogTW9kZXJuaXpyLnJlcXVlc3RhbmltYXRpb25mcmFtZSxcbiAgICAgIG5vcGU6ICdzY3JpcHRzL3ZlbmRvci9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUuanMnXG4gICAgfSk7XG4gICAgeWVwbm9wZSh7XG4gICAgICB0ZXN0OiBNb2Rlcm5penIuZmxleGJveCAmJiBNb2Rlcm5penIuZmxleHdyYXAsXG4gICAgICBub3BlOiAnc2NyaXB0cy92ZW5kb3IvZmxleGliaWxpdHkubWluLmpzJ1xuICAgIH0pO1xuICAgIHllcG5vcGUoe1xuICAgICAgdGVzdDogTW9kZXJuaXpyLmNzc3JlbXVuaXQsXG4gICAgICBub3BlOiAnc2NyaXB0cy92ZW5kb3IvcmVtcG9seS5qcydcbiAgICB9KTtcbiAgICB5ZXBub3BlKHtcbiAgICAgIHRlc3Q6IChNb2Rlcm5penIuY3Nzdmh1bml0ICYmIE1vZGVybml6ci5jc3N2d3VuaXQgJiZcbiAgICAgICAgICAgICBNb2Rlcm5penIuY3Nzdm1heHVuaXQgJiYgTW9kZXJuaXpyLmNzc3ZtaW51bml0KSxcbiAgICAgIG5vcGU6ICdzY3JpcHRzL3ZlbmRvci92bWlucG9seS5qcydcbiAgICB9KTtcbiAgfSkoKTtcblxuICAkdGlueU5hdiA9ICQoJyN0aW55TmF2Jyk7XG5cbiAgJHRpbnlOYXZcbiAgICAuaHRtbCgkKCcubmF2X2hlYWRlciA+IHVsJykuY2xvbmUoKSlcbiAgICAuYXBwZW5kKCc8c3BhbiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIC8+JylcbiAgICAub24oJ2NsaWNrJywgJz4gc3BhbicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgJHRpbnlOYXYudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcbiAgICB9KTtcblxuICAkKGRvY3VtZW50LmJvZHkpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgJHRpbnlOYXYucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgfSk7XG5cbn0pKCk7XG4iXX0=
