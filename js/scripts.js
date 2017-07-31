'use strict';

$(function() {
// navbar hamburger menu
  $('.navbar-burger').on('click', function(event) {
    event.preventDefault();
    $(this).toggleClass('is-active');
    $('.navbar-menu').toggleClass('is-active');

    if($('.navbar-burger').hasClass('is-active')) {
      $('.navbar-item').on('click', function(event) {
        event.preventDefault();
        $('.navbar-menu').removeClass('is-active');
        $('.navbar-burger').removeClass('is-active');
      });
    }
  });

  // scroll navigation
  $('a[href^="#"]').on('click', function(event) {
    let target = $(this.getAttribute('href'));
    if(target.length) {
      event.preventDefault();

// set offset for screens smaller than desktop
      if($(window).width() < 1000 ){
        $('html, body').stop().animate({
          scrollTop: target.offset().top - 50
        }, 1100);
      }

      else {
        $('html, body').stop().animate({
          scrollTop: target.offset().top
        }, 1100);
      }
    }
  });
});
