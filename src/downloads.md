---
title: Downloads
layout: default
eleventyNavigation:
  key: Downloads
  order: 3
---

<p>Here are some links:</p>
{% for prod in products %}
  {% downloadTable "{{ prod.shortname }}" true %}
{% endfor %}
<p>test</p>
{% downloadTable "TimestampNow" true %}
<p>All done!</p>