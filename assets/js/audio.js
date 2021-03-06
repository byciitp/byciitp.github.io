var plays;
var playing;

var RAMAYANA_LOADED = false;

var setListeners = function() {
		plays = document.getElementsByClassName("plays");		
		var player = document.getElementById("audio_player");
		var download_icon = document.getElementById("download_icon");
		
		for(var i = 0; i < plays.length; ++i) {
			plays[i].addEventListener("click", function() {
				if(playing == null || playing.id != this.id)
				{
					player.pause();
					player.src = "https://raw.githubusercontent.com/byciitp/audios/master/" + this.id;
					console.log(player.src);
					this.classList.add("active");
					if (playing)
						playing.classList.remove("active");
					download_icon.href = player.src;
					playing = this;
					player.play();
				}
			});
		};
	};


setListeners();

$("#title-large").css("display", "block");
