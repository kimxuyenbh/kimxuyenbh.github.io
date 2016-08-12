//load
$(document).ready(function() {
	$(".menu_reveal").click(function() {
		$("ul.subMenu").show();
		$(".menu_close").show();
	});
	$(".menu_close").click(function() {
		$("ul.subMenu").hide();
		$(".menu_reveal").show();
		$(".menu_close").hide();
	});
	ondragstart="return false;"
   	ondrop="return false;"
   	oncontextmenu="return false;"
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
		$("input").removeClass("active-index");
		$("input").eq(alt).addClass("active-index");
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
	//index 
	$("input").click(function() {
		var index = 0;
		index = $("input").index(this);
		alt = index;
		$(".slide-img").fadeOut();
		$(".slide-img").eq(alt).fadeIn();
		$("input").removeClass("active-index");
		$(this).addClass("active-index");
	});
	setInterval(function() {$("#img-next").click()},4000); 
});
