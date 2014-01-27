$(document).ready(function() {

	var TUMBLR_API_KEY = "qz5zBeyiO9gTJxUIhlH7bLVZXo88xafsjDxGTElGPBYW2wCRYE";
    var TUMBLR_HOSTNAME = "parquecapibaribe.tumblr.com";

      // On DOM Ready, perform these actions
      $(function() {

        function cyclePhotosets() {
          // Cycle images in photosets
          $(".photoset:not(.processed)").each(function() {
            var me = $(this);
            me.cycle();
            me.imagesLoaded(function() {
              me.height(me.find("img").first().height());
            });
            me.addClass("processed");
          });
        }

        // Example Tumblr Kit usage

        $("#all").getTumblrPosts({
          limit: 10,
          done: cyclePhotosets
        });
      });

	$( "#blog" ).click(function() {
	  $( "#blog-content" ).slideToggle( "slow" );
	});	
});