  
  $(document).ready(function() {

    $(".menu-click").on("click", function() {
      $(this).toggleClass("active");
    
      if ($(this).hasClass("active")) {
        $(".responsive").slideDown();
        $("body").addClass("overflow-hidden");
        $(".menu-app").addClass("d-none");
        $(this).find(".icon-menu").addClass("d-none");
        $(this).find(".icon-close").removeClass("d-none");
      } else {
        $(".responsive").slideUp();
        $("body").removeClass("overflow-hidden");
        $(".menu-app").removeClass("d-none");
        $(this).find(".icon-menu").removeClass("d-none");
        $(this).find(".icon-close").addClass("d-none");
      }
    });

    $(".contactus").on("click", function() {
      $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 500);
      return false;
    });

    $(window).bind('scroll', function () {
      if ($(window).scrollTop() > 85) {
          $('.fixed').addClass('active');
      } else {
          $('.fixed').removeClass('active');
      }
    });

    $(".smodal-click").on("click", function(e) {
      e.preventDefault();
      $(".smodal").fadeIn(300);

      $(document).mouseup(function(e) {
        var container = $(".smodal-content");
    
        if (!container.is(e.target) && container.has(e.target).length === 0)  {
          $(".smodal").hide();
        }
      });
      
    });

    $(".smodal-close").on("click", function() {
      $(".smodal").hide();
    });

  });

