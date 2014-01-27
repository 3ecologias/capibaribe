$(document).ready(function() {

	$( "#blog, .closePopsUp" ).click(function() {
	  $( "#blog-content" ).slideToggle( "slow" );
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

        if($(".closePopsUp").is(":hidden")) {
			$thisLi.removeClass('active');
		} else {
			$thisLi.addClass('active');
		}

    });	
});