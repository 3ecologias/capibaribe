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

	$( ".close-se" ).click(function() {
	 	$( "#se-content" ).slideToggle( "slow" );
	 	// $('.nav').find('li.active').removeClass('active');
	});

	$( ".close-ff" ).click(function() {
	 	$( "#ff-content" ).slideToggle( "slow" );
	 	// $('.nav').find('li.active').removeClass('active');
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

	$( ".explore" ).click(function() {
		var clicks = $(this).data('clicks');
	 	if (clicks) {
	    	$('#capa').animate({top:'0%'}, 500)
	  	} else {
	     	$('#capa').animate({top:'-100%'}, 1000)
	  	}
		$(this).data("clicks", !clicks);
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

    $('.carousel').carousel({
    	interval: 1000
    });
	$('a[data-slide="prev"]').click(function() {
	  $('.carousel').carousel('prev');
	});

	$('a[data-slide="next"]').click(function() {
	  $('.carousel').carousel('next');
	});

	// Menu Handlers
    // http://stackoverflow.com/questions/17059515/jquery-hover-with-animate-then-animate-left-in-second-handler-issue
    // http://stackoverflow.com/questions/14914372/registering-jquery-click-first-and-second-click
	$('#map-ui-ap a.menu').click(function() { 

		var clicks = $(this).data('clicks');
	 	if (clicks) {
	    	$('#map-ui-ap').animate({bottom:'-8em'},'slow')
	  	} else {
	     	$('#map-ui-ap').animate({bottom:'0em'},'slow')
	  	}
		$(this).data("clicks", !clicks);
    });

    $('#map-ui-tu a.menu').click(function() { 

		var clicks = $(this).data('clicks');
	 	if (clicks) {
	    	$('#map-ui-tu').animate({bottom:'-14.11em'},'slow')
	  	} else {
	     	$('#map-ui-tu').animate({bottom:'0em'},'slow')
	  	}
		$(this).data("clicks", !clicks);
    });

    $('#map-ui-se a.menu').click(function() { 

		var clicks = $(this).data('clicks');
	 	if (clicks) {
	    	$('#map-ui-se').animate({bottom:'-12.4em'},'slow')
	  	} else {
	     	$('#map-ui-se').animate({bottom:'0em'},'slow')
	  	}
		$(this).data("clicks", !clicks);
    });

    $('#map-ui-vi a.menu').click(function() { 

		var clicks = $(this).data('clicks');
	 	if (clicks) {
	    	$('#map-ui-vi').animate({bottom:'-11.3em'},'slow')
	  	} else {
	     	$('#map-ui-vi').animate({bottom:'0em'},'slow')
	  	}
		$(this).data("clicks", !clicks);
    });

    $('#map-ui-project a.menu').click(function() { 

		var clicks = $(this).data('clicks');
	 	if (clicks) {
	    	$('#map-ui-project').animate({bottom:'-12.4em'},'slow')
	  	} else {
	     	$('#map-ui-project').animate({bottom:'0em'},'slow')
	  	}
		$(this).data("clicks", !clicks);
    });

    $('#map-ui-inst a.menu').click(function() { 

		var clicks = $(this).data('clicks');
	 	if (clicks) {
	    	$('#map-ui-inst').animate({bottom:'-8em'},'slow')
	  	} else {
	     	$('#map-ui-inst').animate({bottom:'0em'},'slow')
	  	}
		$(this).data("clicks", !clicks);
    });
});