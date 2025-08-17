---
layout: page
title: "Color.cee App"
permalink: /app/
---
<nav class="local-nav" aria-label="App sections">
  <ul>
    <li><a href="#overview" aria-current="true">Overview</a></li>
    <li><a href="#video">Video</a></li>
    <li><a href="#features">Features</a></li>
    <li><a href="#screens">Screens</a></li>
    <li><a href="#reviews">Reviews</a></li>
    <li><a href="#faq">FAQ</a></li>
  </ul>
</nav>

<section id="overview" class="container">
  <h1>Color.cee</h1>
  <p class="lead">Color-first communication. Faster decisions, fewer words.</p>
  {% include store-badges.html %}
</section>

<section id="video" class="container">
  <h2>See Color.cee in Action</h2>
  <div class="video-wrapper">
    <iframe 
      width="560" 
      height="315" 
      src="https://www.youtube.com/embed/Su8vIQI_ez8" 
      title="Color.cee App Demo" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowfullscreen>
    </iframe>
  </div>
</section>

<section id="features" class="container">
  <h2>Features</h2>
  <h3>Everyday</h3>
  {% include cards.html items=site.data.features.everyday %}
  <h3>Business</h3>
  {% include cards.html items=site.data.features.business %}
  <aside class="examples">
    <h3>Examples</h3>
    <ul>
      <li><strong>Yellow</strong> = Happiness</li>
      <li><strong>Green</strong> = Yes</li>
    </ul>
  </aside>
</section>

<section id="screens" class="container gallery">
  <h2>Screens</h2>
  <div class="grid screenshots">
    {% assign shots = "1,2,3" | split: "," %}
    {% for n in shots %}
      <a href="{{ '/assets/img/screenshots/' | append: n | append: '.webp' | relative_url }}" data-lightbox="screens" class="shot">
        <img loading="lazy" src="{{ '/assets/img/screenshots/' | append: n | append: '.webp' | relative_url }}" alt="App screen {{ n }}" width="480" height="960">
      </a>
    {% endfor %}
  </div>
</section>

<section id="reviews" class="container">
  <h2>Reviews</h2>
  <div class="grid">
    {% for t in site.data.testimonials %}
      {% include testimonial.html item=t %}
    {% endfor %}
  </div>
</section>

<section id="faq" class="container">
  <h2>FAQ</h2>
  {% include faq.html items=site.data.faqs %}
  <p><a class="btn" href="#overview">Install Color.cee</a></p>
</section>

<!-- TODO: Replace this content with the exact App page copy you provide. -->
