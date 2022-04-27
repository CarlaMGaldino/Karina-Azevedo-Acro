$(document).ready(function () {
  $(window).scroll(function () {
    var scrollFooter = $(window).scrollTop();

    if (scrollFooter <= 700) {
      $("#footer-back-to-top").addClass("footer-to-visible");
    } else {
      $("#footer-back-to-top").removeClass("footer-to-visible");
    }
  });
});
