$(document).ready(function() {
	
// Support for AJAX loaded modal window.
// Focuses on first input textbox after it loads the window.
// $('[data-toggle="modal"]').click(function(e) {
// 	e.preventDefault();
// 	var url = $(this).attr('href');
// 	if (url.indexOf('#') == 0) {
// 		$(url).modal('open');
// 	} else {
// 		$.get(url, function(data) {
// 			$('<div class="modal hide fade">' + data + '</div>').modal();
// 		}).success(function() { $('input:text:visible:first').focus(); });
// 	}
// });

 $('[data-toggle="modal"]').click(function(e){
                    e.preventDefault();
                    console.log('select_link clicked');
 
					var data = {};
					data.title = "title";
					data.message = "message";
					var url = $(this).attr('href');
					if (url.indexOf('#') == 0) {
						$(url).modal('open');
					} else {	
						$.ajax({
							type: 'POST',
							data: JSON.stringify(data),
					        contentType: 'application/json',
	                        url: 'http://localhost/tumblr',						
	                        success: function(data) {
	                            console.log('success');
	                            console.log(JSON.stringify(data));
	                            $('<div class="modal hide fade">' + JSON.stringify(data) + '</div>').modal();
	                        }
	                    });
                    }
 
                });				
	
});