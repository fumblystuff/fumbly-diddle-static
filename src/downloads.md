---
title: Downloads
layout: default
eleventyNavigation:
  key: Downloads
  order: 2
---

<p>Here are some links:</p>
{% for prod in products %}
this
{% downloadTable "{{ prod.shortname }}" true %}
that
{% endfor %}


{% downloadTable "TimestampNow" true %}

<p>All done!</p>