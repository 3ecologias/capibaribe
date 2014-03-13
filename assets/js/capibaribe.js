$(document).ready(function() {

	// $( "#blog, .close-blog" ).click(function() {
	//  	$( "#blog-content" ).slideToggle( "slow" );

	// 	if($("#blog-content").is(":hidden")) {

	// 	}
	// });

	// $( "#instagram, .close-insta" ).click(function() {
	//  	$( "#instagram-content" ).slideToggle( "slow" );

	// 	if($("#instafeed").is(":hidden")) {
			
	// 	}
	// });

	// $( "#twitter, .close-twitter" ).click(function() {
	//  	$( "#twitter-content" ).slideToggle( "slow" );

	// 	if($("#instafeed").is(":hidden")) {
			
	// 	}
	// });

	$( ".close-sobre" ).click(function() {
	 	$( "#sobre-content" ).slideToggle( "slow" );
	 	$( ".close-sobre" ).fadeToggle( "slow", "linear");
	 	$('.nav').find('li.active').removeClass('active');

	});

	$( ".close-blog" ).click(function() {
	 	$( "#blog-content" ).slideToggle( "slow" );
	 	$('.nav').find('li.active').removeClass('active');

	});

	$( ".close-insta" ).click(function() {
	 	$( "#instagram-content" ).slideToggle( "slow" );
	 	$('.nav').find('li.active').removeClass('active');

	});

	$( ".close-twitter" ).click(function() {
	 	$( "#twitter-content" ).slideToggle( "slow" );
	 	$('.nav').find('li.active').removeClass('active');
	});

	// map Project

	$( ".close-t1" ).click(function() {
	 	$( "#t1-content" ).slideToggle( "slow" );
	 	// $('.nav').find('li.active').removeClass('active');
	});

	$( ".close-t2" ).click(function() {
	 	$( "#t2-content" ).slideToggle( "slow" );
	 	// $('.nav').find('li.active').removeClass('active');
	});
	$( ".close-t3" ).click(function() {
	 	$( "#t3-content" ).slideToggle( "slow" );
	 	// $('.nav').find('li.active').removeClass('active');
	});
	$( ".close-t4" ).click(function() {
	 	$( "#t4-content" ).slideToggle( "slow" );
	 	// $('.nav').find('li.active').removeClass('active');
	});


	// nav handlers
    $('.nav li a').on('click', function(e){

        e.preventDefault(); // prevent link click if necessary?

        var $thisLi = $(this).parent('li');
        var $ul = $thisLi.parent('ul');
        var $id = $thisLi.find('a').attr('id');

        if (!$thisLi.hasClass('active'));
        {
            $ul.find('li.active').removeClass('active');
                $thisLi.addClass('active');
        }

        if ($id == 'blog') {
        	$( "#blog-content" ).slideToggle( "slow" );
        	if($("#instagram-content").is(":hidden")) {
	 		} else {
	 			$( "#instagram-content" ).slideToggle( "fast" );
	 		}
	 		if($("#twitter-content").is(":hidden")) {
	 		} else {
	 			$( "#twitter-content" ).slideToggle( "fast" );
	 		}
	 		if($("#sobre-content").is(":hidden")) {
	 		} else {
	 			$( "#sobre-content" ).slideToggle( "fast" );
	 		}
        } else if ($id == 'instagram') {
        	$( "#instagram-content" ).slideToggle( "slow" );
        	if($("#twitter-content").is(":hidden")) {
	 		} else {
	 			$( "#twitter-content" ).slideToggle( "fast" );
	 		}
	 		if($("#blog-content").is(":hidden")) {
	 		} else {
	 			$( "#blog-content" ).slideToggle( "fast" );
	 		}
	 		if($("#sobre-content").is(":hidden")) {
	 		} else {
	 			$( "#sobre-content" ).slideToggle( "fast" );
	 		}
        } else if ($id == 'twitter') {
        	$( "#twitter-content" ).slideToggle( "slow" );
        	if($("#instagram-content").is(":hidden")) {
	 		} else {
	 			$( "#instagram-content" ).slideToggle( "fast" );
	 		}
	 		if($("#blog-content").is(":hidden")) {
	 		} else {
	 			$( "#blog-content" ).slideToggle( "fast" );
	 		}
	 		if($("#sobre-content").is(":hidden")) {
	 		} else {
	 			$( "#sobre-content" ).slideToggle( "fast" );
	 		}
        } else if ($id == 'sobre') {
        	$( "#sobre-content" ).slideToggle( "slow" );
        	$( ".close-sobre" ).fadeToggle( "slow", "linear");
        	if($("#twitter-content").is(":hidden")) {
	 		} else {
	 			$( "#twitter-content" ).slideToggle( "fast" );
	 		}
	 		if($("#blog-content").is(":hidden")) {
	 		} else {
	 			$( "#blog-content" ).slideToggle( "fast" );
	 		}
	 		if($("#instagram-content").is(":hidden")) {
	 		} else {
	 			$( "#instagram-content" ).slideToggle( "fast" );
	 		}
	 	}

        // if ($thisLi.hasClass('active')) {
        // 	$thisLi.click(function() {
        // 		$ul.find('li.active').removeClass('active');
        // 	});
        // }

    });

    $(".fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none'
	});

});