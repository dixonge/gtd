---
eleventyNavigation:
  parent: Misc
  key: mf-blogstarter Eleventy Starter Flowchart
author: Glenn Dixon
layout: layouts/home.njk
date: 2020-04-25T06:10:35+00:00
categories:
  - Misc
tags:
  - posts
---
<script async src="https://unpkg.com/mermaid@8.5.0/dist/mermaid.min.js"></script>
<script>mermaid.initialize({startOnLoad:true});</script>

Flowchart for RV solar system:

<div class="overflow-visible mermaid">
graph TD 
solar[solar panels]-->controller[charge controller]-->batt
gen[generator] & shore[Shore Power]-->ic[inverter/charger]-->batt[batteries]-->ic[inverter/charger]-->rv[RV Appliances]
</div>