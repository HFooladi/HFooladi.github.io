---
title: "Evaluating Machine Learning Models for Molecular Property Prediction: Performance and Robustness on Out-of-Distribution Data"
description: "Poster evaluating 14 ML models across 8 datasets and 10 splitting strategies, examining how OOD generation procedures shape performance and ID-OOD correlation."
collection: talks
type: "Conference poster"
permalink: /talks/2025-06-02-iccs-ood-evaluation/
venue: "13th International Conference on Chemical Structures (ICCS)"
date: 2025-06-02
location: "Noordwijkerhout, The Netherlands"
header:
  teaser: /assets/images/research/alinemol-banner.png
---

Poster presentation at the 13th International Conference on Chemical Structures (ICCS) summarizing our systematic evaluation of 14 machine learning models across eight datasets and ten splitting strategies, examining how the choice of OOD generation procedure shapes both absolute performance and the strength of the ID–OOD correlation. See the [associated publication](/publications/2025-09-15-ood-evaluation/).

<figure class="research-figure">
  <a href="/assets/images/research/alinemol-banner.png" title="Open full-size figure"><img src="/assets/images/research/alinemol-banner.png" alt="ALineMol overview: a training set with in-distribution and out-of-distribution test molecules; bar charts showing the performance drop from ID to OOD for two models; a scatter of OOD against ID performance; and the experimental setup of datasets, splitters and models."></a>
  <figcaption>ALineMol in one picture: molecules are split into in-distribution (ID) and out-of-distribution (OOD) test sets, models are compared on their ID-to-OOD performance drop, and we ask how well ID performance predicts OOD performance. Evaluated on eight datasets (CYP isoforms, hERG, HIV, AMES), ten splitters (scaffold-, property- and cluster-based, Lo-Hi, DataSAIL) and classical ML, GNN and pretrained-GNN models.</figcaption>
</figure>

Headline result: both classical models and GNNs handle scaffold splits almost as well as random splits, while UMAP-cluster splits are the hardest. The correlation between ID and OOD performance is strong for scaffold splits (Pearson r ≈ 0.94) but drops to r ≈ 0.42 for cluster-based splits, so model selection on ID data is only safe when the split mirrors the intended application.

Authors: **Hosein Fooladi**, Thi Ngoc Lan Vu, and Johannes Kirchmair.
