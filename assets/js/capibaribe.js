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
        } else if ($id == 'instagram') {
        	$( "#instagram-content" ).slideToggle( "slow" );
        } else if ($id == 'twitter') {
        	$( "#twitter-content" ).slideToggle( "slow" );
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