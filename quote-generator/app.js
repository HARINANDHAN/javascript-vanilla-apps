$(window).keypress(function(event) {
	console.log(event.which);
	// when spacebar, keyCode 32 is pressed
	if (event.which === 32) {
		$('.quote').addClass('reset');
		// remove existing quote and author - before state
		$('.quote').removeClass('executed');
		$('.author').toggleClass('fade');
		// request a new quote and author from API
		setTimeout(function() {
			$.ajax({
				crossOrigin: true,
				url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=mycallback',
				dataType: 'jsonp'
			});
		}, 1000);		
	}
});

// display on page when request is successful - after state
function mycallback(json) {
	var quote = json[0];
	$('.quote').html(quote.content);
	$('.author').html(quote.title);
	$('.quote').addClass('executed');
	$('.quote').removeClass('reset');
	$('.author').toggleClass('fade');
}
