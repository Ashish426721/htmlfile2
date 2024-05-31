$(document).ready(function () {
    // Navbar scroll change
    $(window).on("scroll", function () {
      if ($(window).scrollTop()) {
        $(".main-navbar").addClass("solid");
      } else {
        $(".main-navbar").removeClass("solid");
      }
    });
  });
  