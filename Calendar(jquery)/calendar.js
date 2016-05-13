$(function() {
	$("#inputDate").datepicker({
		inline: true,
		firstDay: 1,
		showOtherMonths: true,
		dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
		changeMonth: true,
		changeYear: true,
		showOn: 'both',
	});
});