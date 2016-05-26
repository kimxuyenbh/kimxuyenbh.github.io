//load
$(document).ready(function() {
	$('#slide img:gt(0)').hide();
	setInterval(function() {
		$('#slide :first-child').fadeOut("slow")
			.next('img').fadeIn("slow")
			.end().appendTo('#slide');},4000);
});
