$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 500) {
      $(".nav-desktop").addClass("nav-desktop__color");
    } else {
      $(".nav-desktop").removeClass("nav-desktop__color");
    }
  });
});
