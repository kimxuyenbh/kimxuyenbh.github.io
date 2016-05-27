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
	$("#img-next").click(function() {
		next = ++stt;
		if (next > endImg) {
			stt = startImg;
		}
		$(".slide-img").fadeOut(3000);
		//eq: index element
		$(".slide-img").eq(stt).fadeIn(3000);
	});

	//previous
	$("#img-prev").click(function() {
		prev = --stt;
		if (prev < startImg) {
			stt = endImg;
		}
		$(".slide-img").fadeOut(3000);
		$(".slide-img").eq(prev).fadeIn(3000);
	});
	setInterval(function() {$('#img-next').click()},4000); 
});
