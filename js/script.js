$(document).ready(function(){

/* ~~~~~~~~~~~~~~~~~~start header~~~~~~~~~~~~~~~~~~~ */
  $(".btn_bars").click(function(){
    $(".ul_navbar").toggle(500);
    $(".moboverlay").fadeIn(500);
    $("body").addClass("over");
  });
  $(".close_").click(function(){
    $(".ul_navbar").hide("500");
    $(".moboverlay").fadeOut(500);
    $("body").removeClass("over");
  });
  $(".moboverlay").click(function(){
    $(".close_ ").trigger("click");
  });
  $(".ul_navbar a").click(function(){
    $(".close_ ").trigger("click");
  })
/* ~~~~~~~~~~~~~~~~~~end header~~~~~~~~~~~~~~~~~~~ */

  /*~~~~~~~~~~~~~~~~~~~~start slider~~~~~~~~~~~~~~~~~~~~ */
  $('.slider .owl-carousel').owlCarousel({
    loop:true,
    nav:false,
    center:true,
    rtl:true,
    padding:0,
    margin:15,
    autoplay:true,
    responsive:{
        0:{
            items:1,
            margin:0
        },
        600:{
            items:3
        },
        1200:{
            items:5
        }
    }
})
/*~~~~~~~~~~~~~~~~~~~~start slider~~~~~~~~~~~~~~~~~~~~ */
        /* ****************start wow ******************** */
        new WOW().init();
        document.documentElement.style.setProperty('--animate-duration', '.8s');
        /* ****************end wow ******************** */

        $("#click_main").click(function () {
          $('html, body').animate({
              scrollTop: $("#main_").offset().top -1
          }, 1000);
        });
        
        $("#click_about").click(function () {
          $('html, body').animate({
              scrollTop: $("#about_").offset().top -1
          }, 1000);
        });
        
        $("#click_features").click(function () {
          $('html, body').animate({
              scrollTop: $("#features").offset().top -1
          }, 1000);
        });
        
        $("#click_screens_").click(function () {
          $('html, body').animate({
              scrollTop: $("#screens_").offset().top -1
          }, 1000);
        });
        $("#click_contact").click(function () {
          $('html, body').animate({
              scrollTop: $("#contact_").offset().top -1
          }, 1000);
        });

});