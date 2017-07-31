'use strict';

// document.addEventListener('DOMContentLoaded', function () {
//   // Get all "navbar-burger" elements
//   let $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
//   // Check if there are any nav burgers
//   if ($navbarBurgers.length > 0) {
//     // Add a click event on each of them
//     $navbarBurgers.forEach(function ($el) {
//       $el.addEventListener('click', () => {
//         // Get the target from the "data-target" attribute
//         var target = $el.dataset.target;
//         var $target = document.getElementById(target);
//         // Toggle the class on both the "navbar-burger" and the "navbar-menu"
//         $el.classList.toggle('is-active');
//         $target.classList.toggle('is-active');
//       });
//     });
//   }
// });
$(function() {

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
