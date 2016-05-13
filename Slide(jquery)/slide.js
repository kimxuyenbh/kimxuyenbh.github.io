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
		if (stt < endImg) {
			++stt;
		} else {
			stt = startImg;
			$(".slide-img").hide();
			$(".slide-img").eq(stt).show();
		}
		$(".slide-img").hide();
		//eq: index element
		$(".slide-img").eq(stt).show();
		$("input").removeClass("active-index");
		$("input").eq(stt).addClass("active-index");
	});

	//previous
	$("#img-prev").click(function() {
		prev = --stt;
		if (prev < startImg) {
			stt = endImg;
		}
		$(".slide-img").hide();
		$(".slide-img").eq(prev).show();
		$("input").removeClass("active-index");
		$("input").eq(prev).addClass("active-index");
	});
	
	//index 
	$("input").click(function() {
		var index = 0;
		index = $("input").index(this);
		stt = index;
		$(".slide-img").hide();
		$(".slide-img").eq(stt).show();
		$("input").removeClass("active-index");
		$(this).addClass("active-index");
	});
});