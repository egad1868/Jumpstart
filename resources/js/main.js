$( document ).ready(function() {
  $('.carousel').slick({
       adaptiveHeight: true,
       autoplay: true,
       autoplaySpeed: 4000,
       arrows: false,
       draggable: false,
       fade: true,
       mobileFirst: true,
       pauseOnFocus: false,
       pauseOnHover: false,
   });

   var userScroll = 0;
   $('.navbar').scroll();
   var userScrollUp = $(this).scrollTop() {
     if ('userScrollUp + '-' + userScroll > 50') {
    var navbarHeight = $('.navbar').css('height');
    $('.navbar').animate({top: '-' + navbarHeight}, 150);

  }
   }
});
