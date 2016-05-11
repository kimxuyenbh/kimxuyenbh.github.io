var d = new Date();
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var show = false;
var trmenu = document.createElement("tr");
var tdmenu = document.createElement("td");
//load
function load() {
	createControl();	
	createDayName();
	createYear();
	createMonthName();
	var addRow, i, j = 0, tbCld = document.getElementById("calendar");
	//create cell day
	for (var i = 1;i <= 42;i++) {
		if (j == 0) {
			addRow = document.createElement("tr");
		}
		var themo = document.createElement("td");
		themo.innerHTML = "&nbsp;";
		addRow.appendChild(themo);
		if (j == 0)
			tbCld.appendChild(addRow);	
		j++;
		if (j == 7)
			j = 0;
	}
	change();
}
//create control
function createControl() {
	// previous year
	tdmenu = document.createElement("td");
		tdmenu.innerHTML = '<button id="preYear" onclick="prevYear()"> << </button>';
		trmenu.appendChild(tdmenu);
	// previous month
	tdmenu = document.createElement("td");
		tdmenu.innerHTML = '<button id="preMonth" onclick="prevMonth()"> < </button>';
		trmenu.appendChild(tdmenu);
	// select month
	tdmenu = document.createElement("td");
		tdmenu.innerHTML = '<select name="slMonth" id="slMonth" onchange="change()"></select>';
		trmenu.appendChild(tdmenu);
	// select year
	tdmenu = document.createElement("td");
		tdmenu.innerHTML = '<select name="slYear" id="slYear" onchange="change()"></select>';
		trmenu.appendChild(tdmenu);
	// next month
	tdmenu = document.createElement("td");
		tdmenu.innerHTML = '<button id="next-Month" onclick="nextMonth()"> > </button>';
		trmenu.appendChild(tdmenu);
	// next year
	tdmenu = document.createElement("td");
		tdmenu.innerHTML = '<button id="next-Year" onclick="nextYear()"> >> </button>';
		trmenu.appendChild(tdmenu);
	document.getElementById("calendar").appendChild(trmenu);
	document.getElementById("calendar").rows[0].cells[2].colSpan = 2;	
}
//create day name (SUN, MON, TUE, WED, THU, FRI, SAT)
function createDayName() {
	trmenu = document.createElement("tr");
	tdmenu = document.createElement("td");
		tdmenu.innerHTML = 'SUN';
		trmenu.appendChild(tdmenu);
	tdmenu = document.createElement("td");
		tdmenu.innerHTML = 'MON';
		trmenu.appendChild(tdmenu);
	tdmenu = document.createElement("td");
		tdmenu.innerHTML = 'TUE';
		trmenu.appendChild(tdmenu);
	tdmenu = document.createElement("td");
		tdmenu.innerHTML = 'WED';
		trmenu.appendChild(tdmenu);
	tdmenu = document.createElement("td");
		tdmenu.innerHTML = 'THU';
		trmenu.appendChild(tdmenu);
	tdmenu = document.createElement("td");
		tdmenu.innerHTML = 'FRI';
		trmenu.appendChild(tdmenu);
	tdmenu = document.createElement("td");
		tdmenu.innerHTML = 'SAT';
		trmenu.appendChild(tdmenu);
	document.getElementById("calendar").appendChild(trmenu);
}
//create year
function createYear() {
	var slYear = document.getElementById("slYear");
	for (var i = 0; i < 150; i++) {
		var opt = document.createElement("option");
		opt.value = 1900 + i;
		opt.innerHTML = 1900 + i;
		if (1900 + i == d.getFullYear()) {
			opt.selected = true;
		}
		slYear.appendChild(opt);
	}
}
//create month name
function createMonthName() {
	var slMonth = document.getElementById("slMonth");
	for (var i = 1; i <= 12; i++) {
		var opt = document.createElement("option");
		opt.value = i;
		opt.innerHTML = month[i-1];
		if (i == d.getMonth() + 1) {
			opt.selected=true;
		}
		slMonth.appendChild(opt);	
	}
}
//previous month
function prevMonth() {
	var slMonth = document.getElementById("slMonth");
	var slYear = document.getElementById("slYear");
	if (slMonth.selectedIndex > 0) {
		slMonth.selectedIndex--;
		change();	
	} else {
		slMonth.selectedIndex = slMonth.length - 1;
		slYear.selectedIndex--;
		change();
	}
}
//next month
function nextMonth() {
	var slMonthr = document.getElementById("slMonth");
	var slYear = document.getElementById("slYear");
	if (slMonth.selectedIndex < slMonth.length - 1) {
		slMonth.selectedIndex++;
		change();	
	}  else {
		slMonth.selectedIndex = 0;
		slYear.selectedIndex++;
		change();
	}
}
//previous year
function prevYear() {
	var slYear = document.getElementById("slYear");
	if (slYear.selectedIndex > 0) {
		slYear.selectedIndex--;
		change();	
	}
}
//next year
function nextYear() {
	var slYear = document.getElementById("slYear");
	if (slYear.selectedIndex < slYear.length - 1) {
		slYear.selectedIndex++;
		change();	
	}
}
// change calendar when change year, month
function change() {
	// delete old row
	document.getElementById("calendar").deleteRow(-1);
	document.getElementById("calendar").deleteRow(-1);
	document.getElementById("calendar").deleteRow(-1);
	document.getElementById("calendar").deleteRow(-1);
	document.getElementById("calendar").deleteRow(-1);
	document.getElementById("calendar").deleteRow(-1);
	var slYear = document.getElementById("slYear");
	var yearNow = slYear.options[slYear.selectedIndex].value;
		
	var slMonth = document.getElementById("slMonth");
	var monthNow = slMonth.options[slMonth.selectedIndex].value;
	var dayInMonth = new Date(yearNow, monthNow, 0).getDate();
	document.title = dayInMonth + "/" + monthNow + "/" + yearNow;
	var addRow, tbCld = document.getElementById("calendar");
		
	var j = 0,dayNow = 1, dayCount = false;
	var iDay;
	var toDay = new Date();
	// 42 cell = 6 row x 7 col, add day
	for (var i = 1; i <= 42; i++) {
		iDay = new Date(yearNow, monthNow - 1, dayNow).getDay();
		if (j == 0) {
			addRow = document.createElement("tr");
		}
		if (j == iDay) {
			dayCount = true;
		}
		if (dayNow > dayInMonth) {
			dayCount = false;
		}
		if (dayCount == true) 
		{	
			var themo = document.createElement("td");
			if (yearNow == toDay.getFullYear() && monthNow - 1 == toDay.getMonth() && toDay.getDate() == dayNow) {
					themo.style.backgroundColor = "yellow";
			}
			themo.innerHTML = dayNow;
			themo.addEventListener("click", function() {getDate(this)});
			addRow.appendChild(themo);
			dayNow++;
		}else {
			var themo = document.createElement("td");
			themo.innerHTML = "&nbsp;";
			addRow.appendChild(themo);
		}
		if (j == 0) {
			tbCld.appendChild(addRow);
		}	
		j++;
		if (j == 7) {
			j=0;
		}
	}
}
//get date
function getDate(date) {
	var slYear = document.getElementById("slYear");
	var yearNow = slYear.options[slYear.selectedIndex].value;
		
	var slMonth = document.getElementById("slMonth");
	var monthNow = slMonth.options[slMonth.selectedIndex].value;
		
	document.getElementById("inputDate").value = date.innerHTML + "-" + monthNow.toString() + "-" + yearNow.toString();
	ShowHidden();
}
//show hidden
function ShowHidden() {
	if (show == true) {
		document.getElementById("cld").style.display = "none";
		show = false;
		document.getElementById("show").innerHTML = "SHOW";
		document.getElementById("show").style.fontWeight = "bold";
	}else {
		document.getElementById("cld").style.display = "block";
		show = true;
		document.getElementById("show").innerHTML = "HIDDEN";
		document.getElementById("show").style.fontWeight = "bold";
	}
}