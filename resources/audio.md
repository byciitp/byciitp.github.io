---
layout: header
title: Lectures
permalink: /audio/
---

<div class="container py-5">
		<div class="py-5">
			<div class="row">
				<div class="col-lg-6 mb-5 sm-12">
					<a data-toggle="collapse" href="#collapseable1" role="button" aria-expanded="true" aria-controls="collapseable1" class="btn btn-primary btn-block py-2 shadow-sm">
					<p class="d-flex align-items-center justify-content-between mb-0 px-3 py-2"><strong class="text-uppercase">Ramayana Lectures</strong><i class="fa fa-angle-down"></i></p>
					</a>

				<div id="ramayana">
					<div id="collapseable1" class="collapse shadow-sm hide">
						<div class="card">
							<div class="card-body">
								{% for song in site.data.lectures.ramayana%}
									<p class="plays" id="{{ song.id }}"> {{ song.name }} </p>
								{% endfor %}
							</div>
						</div>
					</div>
				</div>	
			</div>

			<div class="col-lg-6 mb-5">

				<button data-toggle="collapse" data-target="#collapseable2" role="button" aria-expanded="true" aria-controls="collapseable2" class="btn btn-success btn-block py-2 shadow-sm with-chevron">
				<p class="d-flex align-items-center justify-content-between mb-0 px-3 py-2"><strong class="text-uppercase">Vaishnav Songs</strong><i class="fa fa-angle-down"></i></p>
				</button>

				<div id="vaishnav_songs">
				<div id="collapseable2" class="collapse shadow-sm hide">
						<div class="card">
							<div class="card-body">
								{% for song in site.data.lectures.vaishnav_songs%}
									<p class="plays" id="{{ song.id }}"> {{ song.name }} </p>
								{% endfor %}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="row">
				<div class="col-lg-6 mb-5 sm-12">
					<a data-toggle="collapse" href="#collapseable3" role="button" aria-expanded="true" aria-controls="collapseable1" class="btn btn-warning btn-block py-2 shadow-sm">
					<p class="d-flex align-items-center justify-content-between mb-0 px-3 py-2"><strong class="text-uppercase">Kirtan</strong><i class="fa fa-angle-down"></i></p>
					</a>

				<div id="kirtan">
					<div id="collapseable3" class="collapse shadow-sm hide">
						<div class="card">
							<div class="card-body">
								{% for song in site.data.lectures.kirtan%}
									<p class="plays" id="{{ song.id }}"> {{ song.name }} </p>
								{% endfor %}
							</div>
						</div>
					</div>
				</div>	
			</div>
		</div>
	</div>
	</div>

<script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.bundle.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery-migrate/3.3.1/jquery-migrate.min.js"></script>

<script type="text/javascript" src="../assets/js/lecture.js"></script>