jQuery(document).ready(function($){
  for (i = 0; i <100; i++) {
  $('.container').append('<div class="block"></div>');
  }
  var blocks = new Array($('.block').length);
  var time = 20;
  function once(fn, context) {
	var result;
	return function() {
		if(fn) {
			result = fn.apply(context || this, arguments);
			fn = null;
		}
		return result;
	};
}
var $block = $('.block');
//EXECUTES ONLY ONCE

function initTilt(block) {
	TweenMax.set([block], { transformStyle: "preserve-3d" });
  		TweenMax.to(block, 0.1, {
			rotationY: 2000.06,
			rotationX: 200,
			transformPerspective: 600,
			transformOrigin: "center center 400",
			// ease:Expo.easeOut
      ease: CustomEase.create("custom", "M0,0,C0,0.426,0,0.992,0,1.3,0,1.357,0.64,0.89,1,1")
      // ease: SteppedEase.config( 20)
		});
  };
// TweenLite.set(".block", {transformStyle:"preserve-3d"});
  $('.start').on('click', function() {
    TweenMax.staggerTo($(blocks[0]), 1, {rotationY:-180, repeat:10, yoyo:false}, 0);
  $('.block').each(function(i) {
    // TweenMax.staggerTo($('.block'), 1, {rotationY:-180, repeat:10, yoyo:false}, 0);
    // initTilt(this);
    // TweenMax.staggerTo($(this), 1, {rotationY:180,  ease:SteppedEase.config( 20)});
    // TweenLite.to($(this), 2, {rotationY:180, ease: SteppedEase.config( 12)});
    // TweenLite.to($(this), 0.1,
    // {
    //   ease:SteppedEase.config( 12),
    //   // y: -500,
    //   transformStyle: "preserve-3d",
    //   rotationY: 2000
    //
    // });

    // $(this).stop().delay(time*i).animate({left: '+=1500px'})
    // $(this).promise().done(function(){console.log('helo')});
  })
});

  $('.revert').on('click', function() {
  $('.block').each(function(i) {
    $(this).stop().delay(time*i).animate({left: '+=1500px'})
    $(this).promise().done(function(){console.log('helo')});
  })
});


//var splits = new Array($(".split").length);
//$('.split').each(function(i, obj) {
//	$(this).addClass('split' + i);
//	$(this).css({ opacity: 0 });
//	splits[i] = once(function() {
//		fadeInText(".split"+i);
//	})
//});
//$(window).scroll(function() {
//
//	for ( var i = 0; i <= $(".split").length; i++) {
//		//        if (i===0) { continue; }
//		if ($(this).scrollTop() + $(window).height() > $(".split" + i).offset().top - $(".split" + i).height()) {
//			$(".split" + i).css({ opacity: 1 });
//			splits[i]();
//		}
//	}
//
//});
// initTilt();
});
