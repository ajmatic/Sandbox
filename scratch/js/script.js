
$(document).ready(function() {
	$('.blog h1 a').mouseenter(function(){
		$('.blog h1 a').fadeTo('slow', .4);
	});
	$('.blog h1 a').mouseleave(function(){
		$('.blog h1 a').fadeTo('slow', 1);
	});
});