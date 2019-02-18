---
layout: page
feature_image: "assets/uploads/snake1.jpg"
feature_text: |
  ## Welcome
---

The Rattlesnake Museum is an exciting and educational experience for the entire family. This animal conservation museum reveals the hundreds of ways that rattlesnakes and other “less desirable” animals have influenced our lives. Examples are given through artifacts, memorabilia, and the largest collection of different species of live rattlesnakes in the world. In fact, the Rattlesnake Museum hosts more different species than the Bronx Zoo, the Philadelphia Zoo, the National Zoo, the Denver Zoo, the San Francisco Zoo, and the San Diego Zoo, all combined! Species from North, Central, and South America are presented in beautifully recreated habitats. Myths are explored, phobias cured, and mysteries revealed at this must-see Museum of the Southwest. It’s a wonderful way for your family to share in this fascinating, mysterious, and misunderstood corner of the animal kingdom. See you soon!

<div class="row text-center text-lg-left ">
  {% for animal in site.animals %}
    <div class="col-lg-3 col-md-4 col-6 mb-4">
      <div class="card border-0 shadow">
        <a href="{{ animal.url }}" class="" >
           <img class="card-img-top" src="{{ animal.feature_image }}" alt="{{ animal.title }}">
        </a>
        <div class="card-body text-center">
          <h5 class="card-title mb-0">{{ animal.title }}</h5>
        </div>
      </div>
    </div>
  {% endfor %}
</div>
