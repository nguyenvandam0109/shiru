
 $(document).ready(function() {
  // Optimalisation: Store the references outside the event handler:
  var $window = $(window);
  var backToTop = $('.back-to-top');

  function checkWidth() {
      var windowsize = $window.width();
      if (windowsize <= 540) {
          // If the window is greater than 540px wide then turn on info slick ...
          $(".info-list").slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            prevArrow: ``,
            nextArrow: ``,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [
              {
                breakpoint: 540,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  arrows: false,
                },
              },
            ],
          });
          // Add class
          $(".highlight-container").addClass( "d-flex flex-column-reverse ");
          $(".customer-order-0").addClass( "order-0");
          $(".customer-order-1").addClass( "order-1");
          // Add css
          $(".info .slick-track").css({"left": "-10px"});
      }
  }
  // Execute on load
  checkWidth();
  // Bind event listener
  $(window).resize(checkWidth);

  // Change css in slick-track
  $('.info-list').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
      let objCss = {"left": "-10px"};
      switch(nextSlide) {
        case 0:
          objCss
          break;
        case 1:
          objCss = {"left": "-8px"};
          break;
        case 2:
          objCss = {"left": "-5px"};
          break;
        case 3:
          objCss = {"left": "-2px"};
          break;
        case 4:
          objCss = {"left": "0"};
          break;
        default:
          objCss;
      }
      $(".info .slick-track").css(objCss);
    });
  // Back to top
    $(window).scroll(function() {
      if ($(window).scrollTop() > 300) {
        backToTop.addClass('active');
      } else {
        backToTop.removeClass('active');
      }
    });

    backToTop.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, '300');
    });
});
