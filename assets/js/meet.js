document.getElementById("title-large").style.display = "block";

var xhr = new XMLHttpRequest();
var link = "#";
xhr.open("GET", "https://worldtimeapi.org/api/timezone/Asia/Kolkata", true);
xhr.onload = function(){
	var response = JSON.parse(this.response);
	console.log(response);

	var dow = parseInt(response.day_of_week);
	var hh = parseFloat(response.datetime.substring(11, 13)); 
	var mm = parseFloat(response.datetime.substring(14, 16));

	var choose = function() {
		console.log("No Meeting");
		document.getElementById("redirect").style.visibility = "hidden";
		
		document.getElementById("message").innerText = "Please Choose your meeting...";
	}

	var time = hh + mm/60;
	console.log(time);
	if (time >= 5 && time <= 10) {
		console.log("Morning");
		link = "https://us02web.zoom.us/j/83058286607?pwd=c2dDbTdWLzlvb3ZVdFlxcXBHdThZdz09";
	}
	else if (time >= 18.5 && time <= 21) {
		console.log("Evening");
		link = "https://us02web.zoom.us/j/83989746707?pwd=MHJibFhXZEpDTVNSZlJPOWlhOHJZUT09";
	}
	else
		choose();


	window.location.replace(link);
};

xhr.send();
