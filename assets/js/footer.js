var links = document.querySelectorAll(".icon");

for (var i = 0; i < links.length; i++) {
	links[i].addEventListener("mouseover",function(event){
		this.style.fontSize = "3em";
	});
	links[i].addEventListener("mouseout", function( event ){
		this.style.fontSize = "2.5em";
	});
}
