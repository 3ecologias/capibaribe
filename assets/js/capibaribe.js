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