---
layout: header
title: Lectures
permalink: /audio/
---

<div class="container py-5">
	<div class="row">
		<div class="col-11">
			<audio style="float: right;" class="" id="audio_player" controls>name</audio>
		</div>
		<div class="col-1">
			<a id="download_icon" title="Download" href="#"><i style="font-size:2.3rem; color: #004D40; float: right;" class="fas fa-download"></i></a>
		</div>
	</div>
		<div class="py-5">
			<div class="row">
			    <div class="col-lg-6 md-5 dropright card" style="text-align: center;">
					<img style="height:300px; width:300px;" class="mx-auto" src="https://i.imgur.com/ehVUNNS.jpg" alt="The Life of Lord Ram">
					<button type="button" class="m-3 p-2 btn btn-warning dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					Ramayana Lectures
					</button>
					<div class="dropdown-menu" style="overflow-y:auto; max-height:80vh"	>
						{% for song in site.data.lectures.ramayana%}
							<p class="plays dropdown-item" id="{{ song.id }}"> {{ song.name }} </p>
						{% endfor %}
					</div>
				</div>
				
				<div class="col-lg-6 md-5 dropright card" style="text-align: center;">
					<img style="height:300px; width:300px;" class="mx-auto" src="https://i.imgur.com/G0B2eCJ.jpg" alt="">

				  <button type="button" class="m-3 btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				    Vaishnav Songs
				  </button>
				  <div class="dropdown-menu" style="overflow-y:auto; max-height:80vh"	>
					{% for song in site.data.lectures.vaishnav_songs%}
						<p class="plays dropdown-item" id="{{ song.id }}"> {{ song.name }} </p>
					{% endfor %}
				  </div>
				</div>
		</div>
		
		<div class="row mt-5" >
			<div class="col-lg-6 md-5 dropright card" style="text-align: center;">
				<img style="height:300px; width:300px;" class="mx-auto" src="https://i.imgur.com/fUfx8dh.jpg" alt="KIRTAN">

			  <button type="button" class="m-3 btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			    Kirtan
			  </button>
			  <div class="dropdown-menu" style="overflow-y:auto; max-height:80vh"	>
				{% for song in site.data.lectures.kirtan%}
					<p class="plays dropdown-item" id="{{ song.id }}"> {{ song.name }} </p>
				{% endfor %}
			  </div>
			</div>
		</div>
	</div>
</div>

<script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.bundle.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery-migrate/3.3.1/jquery-migrate.min.js"></script>

<script type="text/javascript" src="../assets/js/audio.js"></script>