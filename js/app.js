(function ($) {
  "use strict"; // Start of use strict

  // Activate scrollspy to add active class to navbar items on scroll
  $("body").scrollspy({
    target: "#mainNav",
    offset: 74,
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled

  // backToTop Button hided by default
  $("#back-to-top").fadeOut();
  //  scroll actions
  $(window).scroll(navbarCollapse);
  $(window).scroll(function () {
    console.log($(this).scrollTop(), $(this).width());
    if ($(this).scrollTop() > 50 && $(this).width() < 1440) {
      $("#back-to-top").fadeIn();
    } else {
      $("#back-to-top").fadeOut();
    }
  });
  // scroll body to 0px on click
  $("#back-to-top").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      400
    );
    return false;
  });

  //close collapsible navbar when a link was click
  $(".navbar-nav>li>a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  // set active link
  $(".navbar-nav .nav-link").click(function () {
    $(".navbar-nav .nav-link").removeClass("current");
    $(".navbar-nav .nav-link").removeClass("active");
    $(this).addClass("active");
  });
  $(".navbar-item .nav-link").click(function () {
    $(".navbar-item .nav-link").removeClass("active");
    $(this).addClass("active");
  });

  // trigger the id bookmarks
  $('a[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          1000
        );
        return false;
      }
    }
  });

  AOS.init({
    offset: 400, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 2000, // values from 0 to 3000, with step 50ms
    disable: function () {
      var maxWidth = 650;
      return window.innerWidth < maxWidth;
    },
  });
})(jQuery); // End of use strict

$(window).load(function () {});
