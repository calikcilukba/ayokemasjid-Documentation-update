/** @format */

(function ($) {
  "use strict";

  /* ==============================================
    ANIMATION -->
    =============================================== */

  new WOW({
    boxClass: "wow", // default
    animateClass: "animated", // default
    offset: 0, // default
    mobile: true, // default
    live: true, // default
  }).init();

  $("#WebDocs").click(function () {
    $("#Aplikasi").css("animation", "fadeout 0.5s");
    setTimeout(function () {
      $("#Aplikasi").hide();
    }, 500);
    $("#Website").hide();
    $("#Website").css("animation", "fadein 0.5s");
    $("#Website").show();
    $("#Aplikasi").css("animation", "fadeout 0.5s");
    setTimeout(function () {
      $("#Aplikasi").hide();
    }, 500);
  });
  $("#AppDocs").click(function () {
    $("#Website").css("animation", "fadeout 0.5s");
    setTimeout(function () {
      $("#Website").hide();
    }, 500);
    $("#Aplikasi").hide();
    $("#Aplikasi").css("animation", "fadein 0.5s");
    $("#Aplikasi").show();
    $("#Website").css("animation", "fadeout 0.5s");
    setTimeout(function () {
      $("#Website").hide();
    }, 500);
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#buttonGoesTop").css("animation", "fadein 0.5s");
      $("#buttonGoesTop").show();
    } else {
      $("#buttonGoesTop").css("animation", "fadeout 0.5s");
      $("#buttonGoesTop").hide();
    }
  });

  //Click event to scroll to top
  $("#buttonGoesTop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
    return false;
  });

  /* ==============================================
    LIGHTBOX -->
    =============================================== */

  jQuery("a[data-gal]").each(function () {
    jQuery(this).attr("rel", jQuery(this).data("gal"));
  });
  jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({
    animationSpeed: "slow",
    theme: "light_square",
    slideshow: true,
    overlay_gallery: true,
    social_tools: false,
    deeplinking: false,
  });

  /* ==============================================
    SCROLL -->
    =============================================== */

  $(function () {
    $("a[href*=#]:not([href=#])").click(function () {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html,body").animate(
            {
              scrollTop: target.offset().top,
            },
            1000
          );
          return false;
        }
      }
    });
  });

  /* ==============================================
    SCROLLSPY -->
    =============================================== */

  $("body").scrollspy({
    target: ".docs-sidebar",
  });

  $('[data-spy="scroll"]').each(function () {
    var $spy = $(this).scrollspy("refresh");
  });

  /* ==============================================
    VIDEO FIX -->
    =============================================== */

  $(document).ready(function () {
    // Target your .container, .wrapper, .post, etc.
    $(".media").fitVids();
  });

  /* ==============================================
    VIDEO FIX -->
    =============================================== */

  $(".row>.docs-sidebar>nav>li>a").click(function () {
    $(".row>.docs-sidebar>nav>li").removeClass("active");
    $(this).parent().addClass("active");
  });
})(jQuery);
