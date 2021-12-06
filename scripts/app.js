
 $(document).ready(function() {
  // Optimalisation: Store the references outside the event handler:
  var $window = $(window);
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
            autoplaySpeed: 2000,
            responsive: [
              {
                breakpoint: 768,
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
          // $(".footer-container").addClass( "d-flex flex-column-reverse ");
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
});
