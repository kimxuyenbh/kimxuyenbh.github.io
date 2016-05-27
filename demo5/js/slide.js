//load
$(document).ready(function() {
	var stt = 0;
	startImg = $(".slide-img:first").attr("stt");
	endImg = $(".slide-img:last").attr("stt");
	$(".slide-img").each(function() {
		if ($(this).is(':visible')) {
			 //attr: get value property
			stt = $(this).attr("stt");
		}
	})
	//next
	setInterval(function() { $("#img-next").click(function() {
		if (stt < endImg) {
			++stt;
		} else {
			stt = startImg;
			$(".slide-img").fadeIn(3000);
			$(".slide-img").eq(stt).fadeOut(3000);
		}
		$(".slide-img").fadeIn(3000);
		//eq: index element
		$(".slide-img").eq(stt).fadeOut(3000);
	})},4000);

	//previous
	$("#img-prev").click(function() {
		prev = --stt;
		if (prev < startImg) {
			stt = endImg;
		}
		$(".slide-img").fadeIn(3000);
		$(".slide-img").eq(prev).fadeOut(3000);
	});
});
