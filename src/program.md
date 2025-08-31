---
layout: layouts/base.njk
title: Program
permalink: /program/index.html
---

<h2>Program</h2>
<p><strong>Keynote (12–1 PM):</strong> Scott Tunmer, Principal Consultant at New Era Technologies — <em>AI & Cybersecurity for the Enterprise</em>.</p>

<h3>Schedule</h3>
<div class="schedule">
  {% for b in schedule.blocks %}
    <div class="schedule-item">
      <div class="time">{{ b.time }}</div>
      <div class="title">{{ b.title }}</div>
      <div class="location">{{ b.location }}</div>
    </div>
  {% endfor %}
</div>

<div class="cta-row">
  <a class="btn btn-primary" href="{{ links.hometown_url }}">Register (HomeTown)</a>
  <a class="btn btn-outline" href="{{ links.ibm_poster_site_url }}">Student Posters (IBM site)</a>
</div>
