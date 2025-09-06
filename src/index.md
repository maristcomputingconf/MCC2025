---
layout: layouts/base.njk
title: Marist Computing Conference
permalink: /index.html
---

<section class="hero">
  <h2>Friday, November 7, 2025 · Murray Student Center · Poughkeepsie, NY</h2>
  {% if site.is_preview %}<p><strong>Preview:</strong> This is a practice build for review.</p>{% endif %}
  <p>Be inspired to do more at the Marist Computing Conference. Talks, keynote lunch, networking—and a co-located student poster session (TechMeet).</p>
  <div class="cta-row">
    <a class="btn btn-primary" href="{{ links.hometown_url }}">Register (HomeTown)</a>
    <a class="btn btn-outline" href="{{ links.techmeet_url }}">MHV TechMeet</a>
    <a class="btn btn-outline" href="{{ links.map_url }}">Campus Map</a>
  </div>
</section>

<section class="schedule">
  <h3>At a glance</h3>
  {% for b in schedule.blocks %}
    <div class="schedule-item">
      <div class="time">{{ b.time }}</div>
      <div class="title">{{ b.title }}</div>
      <div class="location">{{ b.location }}</div>
    </div>
  {% endfor %}
</section>
