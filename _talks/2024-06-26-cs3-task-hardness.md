---
title: "Quantifying the Hardness of Bioactivity Prediction Tasks for Transfer Learning"
description: "Poster introducing a framework to quantify bioactivity prediction task hardness, guiding source-task selection for transfer learning under data scarcity in drug discovery."
collection: talks
type: "Conference poster"
permalink: /talks/2024-06-26-cs3-task-hardness/
venue: "Chemoinformatics Strasbourg Summer School (CS3-2024)"
date: 2024-06-26
location: "Strasbourg, France"
header:
  teaser: /assets/images/research/themap-hardness.png
---

Poster presentation at the Chemoinformatics Strasbourg Summer School (CS3-2024) introducing a framework to quantify how "hard" a bioactivity prediction task is, with the goal of guiding source-task selection for transfer learning under chronic data scarcity in drug discovery. See the [associated publication](/publications/2024-04-24-task-hardness/).

<figure class="research-figure">
  <a href="/assets/images/research/themap-hardness.png" title="Open full-size figure"><img src="/assets/images/research/themap-hardness.png" alt="Scatter plot of meta-learning performance gain (delta AUPRC) against task hardness, with a fitted regression line and Pearson r of -0.72."></a>
  <figcaption>The gain from meta-learning (ΔAUPRC over a baseline) decreases with the proposed external-plus-internal task hardness (Pearson r = −0.72), so hardness estimated before training predicts how much a new bioactivity task will benefit from knowledge transfer.</figcaption>
</figure>

Authors: **Hosein Fooladi**, Steffen Hirte, and Johannes Kirchmair.
