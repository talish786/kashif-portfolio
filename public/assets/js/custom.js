(function ($) {
  "use strict";
  var WEA = {};

  /*--------------------
        * Menu Close
    ----------------------*/
  WEA.MenuClose = function () {
    $(".toggler-menu").on("click", function () {
      $(this).toggleClass("open");
      $(".header-left-fixed, .header-top-fixed")
        .stop()
        .toggleClass("menu-open menu-open-desk");
    });
    $(".header-left-fixed a, .header-top-fixed a").on("click", function () {
      var toggle = $(".toggler-menu").is(":visible");
      if (toggle) {
        $(".header-left-fixed, .header-top-fixed").removeClass("menu-open");
        $(".toggler-menu").removeClass("open");
      }
    });

    $(".navbar-nav a").on("click", function () {
      var toggle = $(".navbar-toggler").is(":visible");
      if (toggle) {
        $(".navbar-collapse").collapse("hide");
      }
    });
  };

  /* ---------------------------------------------- /*
     * Header Fixed
    /* ---------------------------------------------- */
  WEA.HeaderFixd = function () {
    var HscrollTop = $(window).scrollTop();
    if (HscrollTop >= 100) {
      $("body").addClass("fixed-header");
    } else {
      $("body").removeClass("fixed-header");
    }
  };

  /*--------------------
          * Progress Bar 
      ----------------------*/
  WEA.ProgressBar = function () {
    $(".skill-bar .skill-bar-in").each(function () {
      var bottom_object = $(this).offset().top + $(this).outerHeight();
      var bottom_window = $(window).scrollTop() + $(window).height();
      var progressWidth = $(this).attr("aria-valuenow") + "%";
      if (bottom_window > bottom_object) {
        $(this).css({
          width: progressWidth,
        });
      }
    });
  };

  WEA.one_page = function () {
    //var HHeight = $('.navbar').outerHeight();
    var $one_page_nav = $(".one-page-nav");
    if ($one_page_nav.length > 0) {
      $one_page_nav.each(function () {
        $.scrollIt({
          upKey: 38, // key code to navigate to the next section
          downKey: 40, // key code to navigate to the previous section
          easing: "linear", // the easing function for animation
          scrollTime: 600, // how long (in ms) the animation takes
          activeClass: "active", // class given to the active nav element
          onPageChange: null, // function(pageIndex) that is called when page is changed
          topOffset: 0, // offste (in px) for fixed top navigation
        });
      });
    }
  };

  /* ---------------------------------------------- /*
     * All Functions
    /* ---------------------------------------------- */
  // loadScript
  var _arr = {};

  function loadScript(scriptName, callback) {
    if (!_arr[scriptName]) {
      _arr[scriptName] = true;
      var body = document.getElementsByTagName("body")[0];
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.src = scriptName;
      // WEAn bind WEA event to WEA callback function
      // WEAre are several events for cross browser compatibility
      // script.onreadystatechange = callback;
      script.onload = callback;
      // fire WEA loading
      body.appendChild(script);
    } else if (callback) {
      callback();
    }
  }
  // Document on Ready
  $(document).ready(function () {
    WEA.HeaderFixd(), WEA.MenuClose(), WEA.ProgressBar(), WEA.one_page();
  });

  // Document on Scrool
  $(window).on("scroll", function () {
    WEA.ProgressBar(), WEA.HeaderFixd();
  });

  // Window on Resize
  $(window).on("resize", function () {});
})(jQuery);
