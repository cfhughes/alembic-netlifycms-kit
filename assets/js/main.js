$(document).ready(function(){
  $(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
      $('#header').addClass('header-scrolled');
      $('.site-title h2').addClass('title-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
      $('.site-title h2').removeClass('title-scrolled');
    }
  })
});
