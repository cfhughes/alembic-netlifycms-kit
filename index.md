---
title: Welcome
layout: page
feature_image: "assets/uploads/home-header.jpg"
---

The Rattlesnake Museum is an exciting and educational experience for the entire family. This animal conservation museum reveals the hundreds of ways that rattlesnakes and other “less desirable” animals have influenced our lives. Examples are given through artifacts, memorabilia, and the largest collection of different species of live rattlesnakes in the world. In fact, the Rattlesnake Museum hosts more different species than the Bronx Zoo, the Philadelphia Zoo, the National Zoo, the Denver Zoo, the San Francisco Zoo, and the San Diego Zoo, all combined! Species from North, Central, and South America are presented in beautifully recreated habitats. Myths are explored, phobias cured, and mysteries revealed at this must-see Museum of the Southwest. It’s a wonderful way for your family to share in this fascinating, mysterious, and misunderstood corner of the animal kingdom. See you soon!

<div class="card">
  <div class="card-header">
    HOURS
  </div>
  <div class="card-body">
    SEPTEMBER-MAY<br>
    Monday-Friday...11:30am to 5:30pm<br>
    Saturday...10am-6pm<br>
    Sunday...1pm-5pm<br>
    (School Groups...Mon-Fri...10-11:30am)<br>
    <br>
    SUMMER<br>
    Monday-Saturday...10am-6pm<br>
    Sunday...1pm-5pm<br>
    <br>
    (505) 242-6569<br>
    Closed one week in January, February and March. Please call for details.<br>
    Kids $4 • Adults $6 • Seniors, Military, Students and Teachers $5
  </div>
</div>
<p></p>
<div class="row text-center text-lg-left ">
  {% for animal in site.animals %}
    <div class="col-lg-3 col-md-4 col-6 mb-4">
      <div class="card border-0 shadow">
        <a href="{{ animal.url }}" class="" >
           <img class="card-img-top front-page-card" src="{{ animal.feature_image }}" alt="{{ animal.title }}">
        </a>
        <div class="card-body text-center">
          <h6 class="card-title mb-0">{{ animal.title }}</h6>
        </div>
      </div>
    </div>
  {% endfor %}
</div>
