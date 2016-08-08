$(function() {
  var $wrapper = $('#wrapper')
      $header = $('#header'),
      $headerWidth = $('#header').width(),
      $top = $('.cont_top'),
      $btn = $top.find('.btn_nav'),
      $footer = $('#footer'),
      duration = 500;

  var sideBtn = function(){
    $btn.on('click', function(){
      $header.toggleClass('open');
      if(!$header.hasClass('open')) {
        $header.stop(true).animate({
          right:-$headerWidth
        }, duration, 'easeInExpo');
        $wrapper.stop(true).animate({
          marginLeft:0
        }, duration, 'easeInExpo');
        $top.stop(true).animate({
          marginLeft:0
        }, duration, 'easeInExpo');
        $footer.stop(true).animate({
          marginLeft:0
        }, duration, 'easeInExpo');
        $('.dimmed').fadeOut();
      } else {
        $header.stop(true).animate({
          right:0
        }, duration, 'easeInExpo');
        $wrapper.stop(true).animate({
          marginLeft:-$headerWidth
        }, duration, 'easeInExpo');
        $top.stop(true).animate({
          marginLeft:-$headerWidth
        }, duration, 'easeInExpo');
        $footer.stop(true).animate({
          marginLeft:-$headerWidth
        }, duration, 'easeInExpo');
        $('.dimmed').fadeIn();
      };

      $('.dimmed').on('click', function(){
        $header.removeClass('open');
        $header.stop(true).animate({
          right:-$headerWidth
        }, duration, 'easeInExpo');
        $wrapper.stop(true).animate({
          marginLeft:0
        }, duration, 'easeInExpo');
        $top.stop(true).animate({
          marginLeft:0
        }, duration, 'easeInExpo');
        $footer.stop(true).animate({
          marginLeft:0
        }, duration, 'easeInExpo');
        $('.dimmed').fadeOut();
      });

      $header.on('click', function(e){
        e.stopPropagation();
      });
    });
  };
  sideBtn();

  $(window).resize(function(){
    if($(window).width() > 800) {
      $('header').removeAttr("style");
    }
  });
});