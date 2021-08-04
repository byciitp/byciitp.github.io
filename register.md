---
layout: header
title: Online Lecture Registration 
permalink: /register/
---


<div style="margin: 5%" class="row">
  <div class="col-lg-1 col-sm-12 col-xs-12"></div>
  <div class="col-lg-4 col-sm-12 col-xs-12">
    <div class="card" style="">
  <div id="card-img-top carouselExampleControls" class="carousel slide" data-ride="carousel" data-interval="3000">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="event-carousel-image d-block w-100 mx-auto img-fluid" style="height: 50% !important;" src="https://i.imgur.com/ktr72r7.jpg" alt="First slide">
        <div class="carousel-caption d-none d-md-block">
          <h5>...</h5>
          <p>...</p>
        </div>
      </div>
      {% for image in site.data.images.register %}
      <div class="carousel-item" >
        <img class="event-carousel-image d-block  mx-auto img-fluid" style="height: 50% !important;" src="{{ image.link }}" alt="First slide">
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
      <!-- <img class="card-img-top" src="https://i.imgur.com/uTgglDL.jpg" alt="Sravanam Image"> -->
      <div class="card-body">
        <h5 class="card-title text-warning h2" style="font-family: 'Pacifico', cursive;">How to be Productive at IIT Patna</h5>
        <a href="#register" class="btn btn-primary">Register</a>
        <br>
        <br>
        <div id="event-desc" class="card-text" style="color: #263238; font-family: 'Dancing Script', cursive; font-size: 1.2rem;">
          <p>With greater obligations, we strive to strike a balance between many elements of our lives and our desire to be productive at all times, and our efficiency is defined by our regular habits. The first principle of habit is to bring our ideas, words, and actions into alignment with our goals. The Bhaktivedanta Club IIT Patna kindly welcomes you to an exciting life-changing online lecture titled "How to be Productive at IIT Patna with these Simple Habits."</p>
          <br>
          <p>"Habit leads to character and character determines our destiny."</p>
           <p>"Success is the product of regular habits."</p>
           <br>
          <p>Very often wrong habits repeat themselves again and again, not because we don't want to change, but because we don't know how to change. In this session, we will give you a deep insight into how habits are formed and introduce you to the right system for the transformation of habits. We will talk about some simple habits with practical examples which can lead to our overall development and make our life sublime.</p>
        </div>
      </div>
      </div>
    </div>

  <div id="register" class="col-lg-7 col-sm-12 col-xs-12">
     <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdw5-jpnqJMOMUOwmwOjFyKyDzvS59c23k4EqVlh9geceIl8Q/viewform?embedded=true" scrolling="no" width="100%" height="1500vh" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
  </div>
</div>   

<script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.bundle.min.js"></script>
