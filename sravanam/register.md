---
layout: header
title: Registration
permalink: /sravanam/register/
---


<div style="margin: 5%" class="row">
  <div class="col-lg-1 col-sm-12 col-xs-12"></div>
  <div class="col-lg-4 col-sm-12 col-xs-12">
    <div class="card" style="">
  <div id="card-img-top carouselExampleControls" class="carousel slide" data-ride="carousel" data-interval="3000">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="d-block w-100 mx-auto img-fluid" style="height: 50% !important;" src="https://i.imgur.com/ktr72r7.jpg" alt="First slide">
        <div class="carousel-caption d-none d-md-block">
          <h5>...</h5>
          <p>...</p>
        </div>
      </div>
      {% for image in site.data.images.sravanam %}
      <div class="carousel-item" >
        <img class="d-block  mx-auto img-fluid" style="height: 50% !important;" src="{{ image.link }}" alt="First slide">
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
        <h5 class="card-title text-warning h2" style="font-family: 'Pacifico', cursive;">Sravanam</h5>
        <p class="card-text" style="color: #263238; font-family: 'Dancing Script', cursive; font-size: 1.5rem;">Do you love to listen stories, real and rare stories which were the source of inspiration for many great personalities since time immemorial. Bhaktivedanta club IIT Patna has brought a unique weekly story telling event "Sravanam -- rejuvenate the mind with enlivened stories"  for you. We have picked the incredible stories from many rare writings and scriptures. These stories are not only inspiring to mind but also soothing to heart. Every week we'll have a new story filled with new mellow, so don't miss the chance.</p>
        <a href="#register" class="btn btn-primary">Register</a>
      </div>
    </div>
  </div>
  

  <div id="register" class="col-lg-7 col-sm-12 col-xs-12">
     <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdzZFVDsN8WqhR0CI4Tf0LchxLQS_IX2Bhr4RkpcmCgzCthiA/viewform?embedded=true" scrolling="no" width="100%" height="1500vh" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
  </div>
</div>   

<script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.bundle.min.js"></script>
