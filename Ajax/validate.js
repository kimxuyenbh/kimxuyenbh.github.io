//check validate username
function checkUser() {
	var user = document.getElementById("userName");
	var errorName = document.getElementById("errorName");
	var regex = /(^[0-9a-zA-Z]+$)/;
	if (user.value.length=="") {
		errorName.innerHTML = "You didn't enter username";
		return false;
	} else {
		if (user.value.length > 0 && user.value.length < 6) {
			errorName.innerHTML = "Username length min 6 letter";
			if (user.value.match(regex)==null) {
				errorName.innerHTML = "Username have special character";
			}
			return false;
		} else {
			errorName.innerHTML = "";
			return true;
		}
		errorName.innerHTML = "";
		return true;
	}
}
//check validate password
function checkPass() {
	var pass = document.getElementById("pass");
	var errorPass = document.getElementById("errorPass");
	if (pass.value.length=="") {
		errorPass.innerHTML = "You didn't enter password";
		return false;
	} else {
		if (pass.value.length > 0 && pass.value.length < 6) {
			errorPass.innerHTML = "Password length min 6 letter";
			return false;
		} else {
			errorPass.innerHTML = "";
			return true;
		}
		errorPass.innerHTML = "";
		return true;
	}
}
//check validate email
function checkEmail() {
	var email = document.getElementById("email");
	var errorMail = document.getElementById("errorMail");
	var regex = /\S+@\S+\.\S+/;
	if (email.value.length=="") {
		errorMail.innerHTML = "You didn't enter email";
		return false;
	} else {
		if (email.value.match(regex)==null) {
			errorMail.innerHTML = "Email wrong format. Email have format abc@abc.abc";
			return false;
		} else {
			errorMail.innerHTML = "";
			return true;
		}
		errorMail.innerHTML = "";
		return true;
	}
}
//check validate birthday
function checkBirthday() {
	var birthday = document.getElementById("inputDate");
	var errorBirth = document.getElementById("errorBirth");
	if (birthday.value.length=="") {
		errorBirth.innerHTML = "You didn't choice birthday";
		return false;
	} else {
		errorBirth.innerHTML = "";
		return true;
	}
}
//button refresh
function refreshForm() {
	document.getElementById("userName").value = "";
	document.getElementById("pass").value = "";
	document.getElementById("email").value = "";
	document.getElementById("inputDate").value = "";
	document.getElementById("errorName").innerHTML = "";
	document.getElementById("errorPass").innerHTML = "";
	document.getElementById("errorMail").innerHTML = "";
	document.getElementById("errorBirth").innerHTML = "";
}
//submit
function submitInfo() {
	var formInfo = document.getElementById("form-info");
	if(checkUser() && checkPass() && checkEmail() && checkBirthday()) {
		formInfo.action = "ajax.php";
	} else {
		alert("please enter the correct validate");
	}
}