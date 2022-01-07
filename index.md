---
layout: header
title: Bhaktivedanta Club IIT Patna
location: home
---
<!-- loader  -->
<div class="loader_bg">
    <div class="loader1"><img src="assets/images/loading.gif" alt="#" /></div>
</div>

<div class="">
  <div id="carouselExampleControls" class="carousel1 carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item carousel-item1 active">
      <img class="carousel-img" src="https://i.imgur.com/ktr72r7.jpg" alt="First slide">
      <div class="carousel-caption d-none d-md-block">
        <p id="down-button" style="font-size: 5rem; padding-top: 10px;"><i class="fas fa-chevron-down"></i></p>
      </div>
    </div>
    {% for image in site.data.images.home %}
    <div class="carousel-item carousel-item1" >
      <img class="carousel-img" src="{{ image.link }}" alt="slide">
      <div class="caption carousel-caption d-md-block">
        <div style="color: #FFFFFF; font-style: italic; font-size: 2em;"> {{ image.title }} </div>
        <div style="color: #FFFFFF; font-family: Libre Baskerville; font-size: 1em;"> {{ image.subtitle }}</div>
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
  <div class="card-img-overlay" style="text-align: center;" id="title-overlay">
      <div style="background: radial-gradient(white, rgb(200, 200, 200, 0));">
        <p id="main-title" style="font-family: 'Lora', Arial, serif; font-size: 3em; font-style: bold; margin-bottom: 2px; " class=" " >Bhaktivedanta Club IIT Patna</p>
        <p id="title-caption" style="font-size: 1.2em; background: radial-gradient(white, rgb(10, 10, 10, 0));" class="text-muted font-italic">Service To Humanity, Spirituality and Character</p>
      </div>
  </div>
</div>

<div class="container scroll-animations">
{% assign index = 0 %}
{% for event in site.data.events.events %}
<div class="section-head">
  <p class="theme-content"> {{ event.head }}</p>
</div>

{% assign i = 0 %}
{% for section in event.sections %}
{% if i == 0 %}
  <div class="row animate__animated">
    <div class="col-lg-10 section">
      <div class="card home-card">
        <div class="row ">
          <div class="col-lg-4 col-md-4 col-sm-12">
              <div id="carouselExampleControls{{ forloop.index }}" class="card-img-top carousel slide carousel-fade" data-ride="carousel" data-interval="3000">
                <div class="carousel-inner">
                  {% for image in section.images %}
                  <div class="carousel-item {% if forloop.index == 1 %} active {% endif %}" >
                    <img style="height: 200px;" class="d-block px-auto mx-auto img-fluid card-img-top img-thumbnail" src="{{ image }}" alt="Card image cap">
                    <div class="carousel-caption d-none d-md-block">
                      <h5></h5>
                      <p></p>
                    </div>
                  </div>
                  {% endfor %}
                  <a class="carousel-control-prev danger" href="#carouselExampleControls{{ forloop.index }}" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a class="carousel-control-next danger" href="#carouselExampleControls{{ forloop.index }}" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
              </div>
          </div>
          <div class="col-lg-8 col-md-8 col-sm-12">
              <div class="card-body px-2">
                  <h4 style="font-family: Libre Baskerville; color: #37474F; font-weight: 400;" class="card-title">{{ section.title }}</h4>
                  <p style="font-family: Merriweather, serif; font-size:1.1rem; color: #455A64;" class="card-text">{{ section.description }}</p>
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
      <div class="card home-card">
        <div class="row ">
          <div class="col-lg-4 col-md-4 col-sm-12">
              <div id="carouselExampleControls{{ forloop.index }}" class="card-img-top carousel slide carousel-fade" data-ride="carousel" data-interval="3000">
                <div class="carousel-inner">
                  {% for image in section.images %}
                  <div class="carousel-item {% if forloop.index == 1 %} active {% endif %}" >
                    <img style="height: 200px;" class="d-block px-auto mx-auto img-fluid card-img-top img-thumbnail" src="{{ image }}" alt="Card image cap">
                    <div class="carousel-caption d-none d-md-block">
                      <h5></h5>
                      <p></p>
                    </div>
                  </div>
                  {% endfor %}
                  <a class="carousel-control-prev danger" href="#carouselExampleControls{{ forloop.index }}" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a class="carousel-control-next danger" href="#carouselExampleControls{{ forloop.index }}" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
              </div>
          </div>
          <div class="col-lg-8 col-md-8 col-sm-12">
              <div class="card-body px-2">
                  <h4 style="font-family: Libre Baskerville; color: #37474F; font-weight: 400;" class="card-title">{{ section.title }}</h4>
                  <p style="font-family: Merriweather, serif; font-size:1.1rem; color: #455A64;" class="card-text">{{ section.description }}</p>
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

{% assign index = index | plus:1 %}

{% endfor %}
{% endfor %}
</div>

<section id="content" class="parallax">
  <h1 class="section-head" style="text-align: center;">About</h1>
  <br>
  <p style="font-size: 0.9em; line-height: 1.7em; -webkit-text-stroke-width: 0.2px; -webkit-text-stroke-color: white;">
    By the mercy of Lord Sri Chaitanya Mahaprabhu and by the desire of Srila A.C. Bhaktivedanta Swami Prabhupada, Bhaktivedanta Club came into existence in 2009 to present the higher dimensional science of ancient India for awakening the proactive leadership quality among the students. Nowadays, modern youth do not know anything beyond the prime necessities of life, namely eating, sleeping, fearing, and sense gratification. Animal life is also based on these four principles. Hence there is neither happiness nor peace of mind. The Bhaktivedanta Club IIT Patna caters to a modern youth's needs synergizing the overall growth, both materially and spiritually. Yoga retreat camps, love feast programs, and intellectual lectures provide systematic teaching for personality development and Time Management. We also organize various spiritual trips, cultural programs, festivals, contests like Vedic quizzes, and coloring competitions. We organize food for life program for impoverished and unprivileged students outside the campus. We do Nagar Sankirtan and Book Distribution to create awareness of Hari Naam in the society. We also organize Rath Yatra festivals every year. The Bhaktivedanta Club invites everyone to participate and understand the real purpose of human life by practical engagement in devotional service.
  </p>
</section>


<section id="prabhupada-quote" class="parallax">
  <p style="">
    <h1 class="section-head" style="color: #fff; text-align: center; padding: 50px;">Prabhupada's Daily Quote</h1>
    <div class="">
      <div class="row">
          <div class="col-lg-6">
            <img id="prabhupada-image" class="rounded-circle d-block mx-auto px-auto img-fluid img-thumbnail" src="https://i.pinimg.com/564x/98/99/70/9899706d22e3546d298c68db35a9b280.jpg" alt="Prabhupada's Daily Quote">
          </div>
          <div class="col-lg-6">
            <img id="daily-quote" class="d-block px-auto mx-auto img-fluid img-thumbnail" src="" alt="Prabhupada's Daily Quote">
          </div>
      </div>
    </div>
  </p>
</section>


<script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.bundle.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery-migrate/3.3.1/jquery-migrate.min.js"></script>
<script type="text/javascript" src="/assets/js/index.js"></script>
