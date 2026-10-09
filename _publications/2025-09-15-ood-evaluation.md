---
title: "Evaluating Machine Learning Models for Molecular Property Prediction: Performance and Robustness on Out-of-Distribution Data"
collection: publications
permalink: /publications/2025-09-15-ood-evaluation/
excerpt: 'Today, machine learning models are employed extensively to predict the physicochemical and biological properties of molecules. Their performance is typically evaluated on in-distribution (ID) data, i.e., data originating from the same distribution as the training data. However, the real-world applications of such models often involve molecules that are more distant from the training data, necessitating the assessment of their performance on out-of-distribution (OOD) data. '
date: 2025-09-15
venue: 'Journal of Chemical Information and Modeling'
paperurl: 'https://doi.org/10.1021/acs.jcim.5c00475'
codeurl: 'https://github.com/HFooladi/ALineMol'
citation: 'Fooladi, Hosein, et al. "Evaluating Machine Learning Models for Molecular Property Prediction: Performance and Robustness on Out-of-Distribution Data." Journal of Chemical Information and Modeling 65.19 (2025): 9871-9891.'
authors: '**Hosein Fooladi**, Thi Ngoc Lan Vu, Miriam Mathea, and Johannes Kirchmair'
bibtex: |
  @article{fooladi2025evaluating,
    title={Evaluating Machine Learning Models for Molecular Property Prediction: Performance and Robustness on Out-of-Distribution Data},
    author={Fooladi, Hosein and Vu, Thi Ngoc Lan and Mathea, Miriam and Kirchmair, Johannes},
    journal={Journal of Chemical Information and Modeling},
    volume={65},
    number={19},
    pages={9871--9891},
    year={2025},
    publisher={ACS Publications}
  }
---
**Abstract**: Today, machine learning models are employed extensively to predict the physicochemical and biological properties of molecules. Their performance is typically evaluated on in-distribution (ID) data, i.e., data originating from the same distribution as the training data. However, the real-world applications of such models often involve molecules that are more distant from the training data, necessitating the assessment of their performance on out-of-distribution (OOD) data. In this work, we investigate and evaluate the performance of 14 machine learning models, including classical approaches like random forests, as well as graph neural network (GNN) methods, such as message-passing graph neural networks, across eight data sets using ten splitting strategies for OOD data generation. First, we investigate what constitutes OOD data in the molecular domain for bioactivity and ADMET prediction tasks. In contrast to the common point of view, we show that both classical machine learning and GNN models work well (not substantially different from random splitting) on data split based on Bemis-Murcko scaffolds. Splitting based on chemical similarity clustering (UMAP-based clustering using ECFP4 fingerprints) poses the most challenging task for both types of models. Second, we investigate the extent to which ID and OOD performance have a positive linear relationship. If a positive correlation holds, models with the best performance on the ID data can be selected with the promise of having the best performance on OOD data. We show that the strength of this linear relationship is strongly related to how the OOD data is generated, i.e., which splitting strategies are used for generating OOD data. While the correlation between ID and OOD performance for scaffold splitting is strong (Pearson’s r ∼ 0.9), this correlation decreases significantly for all the cluster-based splitting (Pearson’s r ∼ 0.4). Therefore, the relationship can be more nuanced, and a strong positive correlation is not guaranteed for all OOD scenarios. These findings suggest that OOD performance evaluation and model selection should be carefully aligned with the intended application domain.

<figure class="research-figure">
  <a href="/assets/images/research/alinemol-banner.png" title="Open full-size figure"><img src="/assets/images/research/alinemol-banner.png" alt="ALineMol overview: a training set with in-distribution and out-of-distribution test molecules; bar charts showing the performance drop from ID to OOD for two models; a scatter of OOD against ID performance; and the experimental setup of datasets, splitters and models."></a>
  <figcaption>ALineMol in one picture: molecules are split into in-distribution (ID) and out-of-distribution (OOD) test sets, models are compared on their ID-to-OOD performance drop, and we ask how well ID performance predicts OOD performance. Evaluated on eight datasets (CYP isoforms, hERG, HIV, AMES), ten splitters (scaffold-, property- and cluster-based, Lo-Hi, DataSAIL) and classical ML, GNN and pretrained-GNN models.</figcaption>
</figure>
