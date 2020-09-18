var xhr = new XMLHttpRequest();
var link = "#";
xhr.open("GET", "https://worldtimeapi.org/api/timezone/Asia/Kolkata", true);
xhr.onload = function(){
	var response = JSON.parse(this.response);
	console.log(response);

	var dow = parseInt(response.day_of_week);
	var hh = parseFloat(response.datetime.substring(11, 13)); 
	var mm = parseFloat(response.datetime.substring(14, 16));

		var time = hh + mm/60;
	console.log(time);
	if (time >= 5 && time <= 10) {
		console.log("Morning");
		link = "https://us02web.zoom.us/j/83058286607?pwd=c2dDbTdWLzlvb3ZVdFlxcXBHdThZdz09";
	}
	else if (time >= 18.5 && time <= 21 && dow != 0) {
		console.log("Evening");
		link = "https://us02web.zoom.us/j/83989746707?pwd=MHJibFhXZEpDTVNSZlJPOWlhOHJZUT09";
	}
	else if (dow == 0) {
		if (time >= 19 && time < 21) {
			console.log("Sravanam");
			link="https://us02web.zoom.us/j/88130280756?pwd=VlhqMG1qZGp5NTNSNXdGcGlVOW5Ldz09";
		}
		else if (time >= 16.5 && time <= 18.5) {
			console.log("Iskcon Youth Forum");
			link="https://us02web.zoom.us/j/84013662651?pwd=TW1qL0RpbTh2bXBWa2lZM2M4TVVzdz09";
		}
	}
	else {
		console.log("No Meeting");
		document.getElementById("redirect").style.visibility = "hidden";
		
		document.getElementById("message").innerText = "Please Choose your meeting...";
	}

	window.location.replace(link);
};

xhr.send();