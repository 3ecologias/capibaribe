$(document).ready(function() {

	$( "#blog, .closePopsUp" ).click(function() {
	 	$( "#blog-content" ).slideToggle( "slow" );

		if($("#blog-content").is(":hidden")) {

		}
	});

	$( "#instagram, .closePopsUp" ).click(function() {
	 	$( "#insta-content" ).slideToggle( "slow" );

		if($("#instafeed").is(":hidden")) {
			
		}
	});

    $('.nav li a').on('click', function(e){

        e.preventDefault(); // prevent link click if necessary?

        var $thisLi = $(this).parent('li');
        var $ul = $thisLi.parent('ul');

        if (!$thisLi.hasClass('active'));
        {
            $ul.find('li.active').removeClass('active');
                $thisLi.addClass('active');
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