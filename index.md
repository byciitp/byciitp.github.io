---
layout: header
title: Bhaktivedanta Club IIT Patna
location: home
---

<div id="carouselExampleControls" class="carousel slide carousel-fade" data-ride="carousel" data-interval="3000">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block mx-auto img-fluid img-thumbnail" src="https://i.imgur.com/ktr72r7.jpg" alt="First slide">
      <div class="carousel-caption d-none d-md-block">
        <h5>...</h5>
        <p>...</p>
      </div>
    </div>
    {% for image in site.data.images.home %}
    <div class="carousel-item" >
      <img class="d-block mx-auto img-fluid img-thumbnail" src="{{ image.link }}" alt="slide">
      <div class="caption carousel-caption d-md-block">
  	    <h4 style="color: #FFFFFF; font-style: italic;"> {{ image.title }} </h4>
  	    <p style="color: #FFFFFF; font-family: Libre Baskerville;"> {{ image.subtitle }}</p>
  	  </div>
    </div>
    {% endfor %}
  <a class="carousel-control-prev danger" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next danger" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
  </div>
</div>

<div class="container">
	<p style="padding: 5% 10px;font-family: 'Lora', serif;font-size: 1.5rem;">By the mercy of Lord Sri Chaitanya Mahaprabhu and by the desire of Srila A.C. Bhaktivedanta Swami Prabhupada, Bhaktivedanta Club came into existence in 2009 to present the higher dimensional science of ancient India for awakening the proactive leadership quality among the students. Nowadays, modern youth do not know anything beyond the prime necessities of life, namely eating, sleeping, fearing, and sense gratification. Animal life is also based on these four principles. Hence there is neither happiness nor peace of mind. The Bhaktivedanta Club IIT Patna caters to a modern youth's needs synergizing the overall growth, both materially and spiritually. Yoga retreat camps, love feast programs, and intellectual lectures provide systematic teaching for personality development and Time Management. We also organize various spiritual trips, cultural programs, festivals, contests like Vedic quizzes, and coloring competitions. We organize food for life program for impoverished and unprivileged students outside the campus. We do Nagar Sankirtan and Book Distribution to create awareness of Hari Naam in the society. We also organize Rath Yatra festivals every year. The Bhaktivedanta Club invites everyone to participate and understand the real purpose of human life by practical engagement in devotional service. </p>
</div>


<div class="container scroll-animations">
{% assign i = 0 %}
{% for event in site.data.events.events %}
<div class="section-head">
  <p> {{ event.head }}</p>
</div>

{% for section in event.sections %}
{% if i == 0 %}
  <div class="row animate__animated">
    <div class="col-lg-10 section">
      <div class="card">
        <div class="row ">
          <div class="col-lg-4 col-md-4 col-sm-12">
              <div id="card-img-top carouselExampleControls" class="carousel slide carousel-fade" data-ride="carousel" data-interval="3000">
                <div class="carousel-inner">
                  {% for image in section.images %}
                  <div class="carousel-item {% if forloop.index == 1 %} active {% endif %}" >
                    <img style="height: 200px;" class="d-block px-auto mx-auto img-fluid card-img-top img-thumbnail" src="{{ image }}" alt="Card image cap">
                    <div class="carousel-caption d-none d-md-block">
                      <h5>...</h5>
                      <p>...</p>
                    </div>
                  </div>
                  {% endfor %}
                  <a class="carousel-control-prev danger" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a class="carousel-control-next danger" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
              </div>
          </div>
          <div class="col-lg-8 col-md-8 col-sm-12">
              <div class="card-body px-2">
                  <h4 class="card-title">{{ section.title }}</h4>
                  <p class="card-text">{{ section.description }}</p>
                  <a href="{{ section.button.link }}" class="btn btn-primary">{{ section.button.label }}</a>
              </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-2"></div>
  </div>
{% else %}
  <div class="row animate__animated">
    <div class="col-lg-2"></div>
    <div class="col-lg-10 section">
      <div class="card">
        <div class="row ">
          <div class="col-lg-4 col-md-4 col-sm-12">
              <div id="card-img-top carouselExampleControls" class="carousel slide carousel-fade" data-ride="carousel" data-interval="3000">
                <div class="carousel-inner">
                  {% for image in section.images %}
                  <div class="carousel-item {% if forloop.index == 1 %} active {% endif %}" >
                    <img style="height: 200px;" class="d-block px-auto mx-auto img-fluid card-img-top img-thumbnail" src="{{ image }}" alt="Card image cap">
                    <div class="carousel-caption d-none d-md-block">
                      <h5>...</h5>
                      <p>...</p>
                    </div>
                  </div>
                  {% endfor %}
                  <a class="carousel-control-prev danger" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a class="carousel-control-next danger" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
              </div>
          </div>
          <div class="col-lg-8 col-md-8 col-sm-12">
              <div class="card-body px-2">
                  <h4 class="card-title">{{ section.title }}</h4>
                  <p class="card-text">{{ section.description }}</p>
                  <a href="{{ section.button.link }}" class="btn btn-primary">{{ section.button.label }}</a>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>

{% endif %}
  <br>

{% assign i = i | plus:1 %}
{% assign i = i | modulo:2 %}

{% endfor %}
{% endfor %}
</div>

<script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.bundle.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery-migrate/3.3.1/jquery-migrate.min.js"></script>
<script type="text/javascript" src="/assets/js/index.js"></script>
