// FORM VALIDATION MINI PROJECT (JS CODE)
function formal() {
	var form = document.getElementById("form");
	var alert = document.getElementById("alert");
	var name = document.getElementById("hero").value;
	if (name == "") {
		alert.style.display = "block";
		alert.innerHTML = "please enter the name";
		return 0;
	}
	var age = document.getElementById("hero1").value;
	if (age == "") {
		alert.style.display = "block";
		alert.innerHTML = "please enter the age";
		return 0;
	}
	if (age >= 18) {
		alert.style.display = "none";
	} else {
		alert.style.display = "block";
		alert.innerHTML = "you are eligible if you are only 18 or above 18";
		return 0;
	}
	var mandatory = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var email = document.getElementById("hero2").value;
	if (email == "") {
		alert.style.display = "block";
		alert.innerHTML = "please enter the email";
		return 0;
	}
	if (email.match(mandatory)) {
		alert.style.display = "none";
	} else {
		alert.style.display = "block";
		alert.innerHTML = "please enter valid email";
		return 0;
	}

	var pno = /^(\91[\-\s]?)?[0]?(91)?[6789]\d{9}$/;
	var phone = document.getElementById("hero3").value;
	if (phone == "") {
		alert.style.display = "block";
		alert.innerHTML = "please enter the phone number";
		return 0;
	}
	if (phone.match(pno)) {
		alert.style.display = "none";
	} else {
		alert.style.display = "block";
		alert.innerHTML = "please enter valid phone number";
		return 0;
	}
	var img = document.getElementById("hero4").value;
	if (img == "") {
		alert.style.display = "block";
		alert.innerHTML = "please upload file";
		return 0;
	}
	img = img.split(".");
	var m = img[1];
	if (m == "jpg" || m == "png") {
		alert.style.display = "none";
		form.submit();
	} else {
		alert.style.display = "block";
		alert.innerHTML = "invalid upload ,insert in jpg or png format";
		return 0;
	}
}
const scriptURL =
	"https://script.google.com/macros/s/AKfycbx4PG7_sbxkCpkyG4bCABuYH5bXUMHw9pumNGF7bUJv1ABSZon5BTxyLZsSu0nY9QD79A/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.querySelector("#form-sub");
form.addEventListener("submit", (e) => {
	e.preventDefault();
	fetch(scriptURL, { method: "POST", body: new FormData(form) })
		.then((response) => {
			msg.innerHTML = "message sent succesfully";
			setTimeout(() => {
				msg.innerHTML = "";
			}, 5000);
			form.reset();
		})
		.catch((error) => console.error("Error!", error.message));
});
