---
title: Program at a Glance
layout: layouts/base.njk
---

<h2>Program At-A-Glance</h2>
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