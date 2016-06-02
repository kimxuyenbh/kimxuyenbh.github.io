//load
$(document).ready(function() {
	var alt = 0;
	startImg = $(".slide-img:first").attr("alt");
	endImg = $(".slide-img:last").attr("alt");
	$(".slide-img").each(function() {
		if ($(this).is(':visible')) {
			 //attr: get value property
			stt = $(this).attr("alt");
		}
	})
	//next
	$("#img-next").click(function() {
		next = ++alt;
		if (next > endImg) {
			alt= startImg;
		}
		$(".slide-img").fadeOut();
		//eq: index element
		$(".slide-img").eq(alt).fadeIn();
	});

	//previous
	$("#img-prev").click(function() {
		prev = --alt;
		if (prev < startImg) {
			alt = endImg;
		}
		$(".slide-img").fadeOut();
		$(".slide-img").eq(prev).fadeIn();
	});
	setInterval(function() {$('#img-next').click()},4000); 
});
