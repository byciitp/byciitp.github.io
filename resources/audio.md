---
layout: header
title: Lectures
permalink: /audio/
---

<div class="container py-5">
		<div class="py-5">
			<div class="row">
				<div class="btn-group col-lg-6 md-5">
				  <button type="button" class="m-3 btn btn-warning dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				    Ramayana Lectures
				  </button>
				  <div class="dropdown-menu" style="overflow-y:auto; max-height:80vh"	>
					{% for song in site.data.lectures.ramayana%}
						<p class="plays dropdown-item" id="{{ song.id }}"> {{ song.name }} </p>
					{% endfor %}
				  </div>
				</div>

				<div class="btn-group col-lg-6 md-5">
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
		<br>
		<div class="row">
			<div class="btn-group col-lg-6 md-5">
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