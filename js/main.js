jQuery(document).ready(function($){
  for (i = 0; i <100; i++) {
  $('.container').append('<div class="block"></div>');
  }
  var blocks = new Array($('.block').length);
  var time = 500;
  $('button').on('click', function() {

  $('.block').each(function(i) {
    $(this).stop().delay(20*i).animate({left: '-=5000px'});
  })
  })

});
