document.getElementById("title-large").style.display = "block";

setTimeout(function() {}, 1);

let urlString = String(window.location)
let paramString = urlString.split('?')[1];
let urlParams = new URLSearchParams(paramString);
  
 if (urlParams.get('m') != null) {
 	console.log(urlParams.get('m'))

 	// load the required meeting
 	load(urlParams.get('m'))
 }
 else {
 	// time dependent loading
	autoLoad(); 	
 }

 function autoLoad() {
 	var d = new Date();

 	var hh = d.getHours();
 	if (hh <= 12) {
 		// morning
 		load("morning")
 	}
 	else {
 		// evening
 		load("evening")
 	}
 }

function load(meeting) {

	var xhr = new XMLHttpRequest();
	xhr.open("GET", "https://api.github.com/gists/a0b70dc932973d4114596f7bcf701542", true);
	xhr.onload = function(){
		// console.log(this.response)
		var response = JSON.parse(this.response);
		// console.log(response);

		var content = JSON.parse(response["files"]["content.json"]["content"]);
		var link = content["meetings"][meeting]["link"]

		console.log(link)
		window.location.replace(link);
	}

	xhr.send();
}