
 $(document).ready(function() {
  // Optimalisation: Store the references outside the event handler:
  var $window = $(window);
  function checkWidth() {
      var windowsize = $window.width();
      if (windowsize <= 540) {
          //if the window is greater than 540px wide then turn on info slick ...
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
          // add class
          $(".highlight-container").addClass( "d-flex flex-column-reverse ");
          // $(".customer-container").addClass( "d-flex flex-column-reverse ");
          $(".footer-container").addClass( "d-flex flex-column-reverse ");
          $(".customer-order-0").addClass( "order-0");
          $(".customer-order-1").addClass( "order-1");
      }
  }
  // Execute on load
  checkWidth();
  // Bind event listener
  $(window).resize(checkWidth);
});
