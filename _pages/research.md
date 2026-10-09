---
title: "Research Overview"
permalink: /research/
layout: single
author_profile: true
description: "Research overview of Hosein Fooladi's work in machine learning, drug discovery, and computational chemistry"
keywords: "research overview, machine learning drug discovery, cheminformatics research, out-of-distribution generalization"
toc: true
toc_label: "Research Areas"
---

## Research Focus

My research centers on developing **robust machine learning models** that can generalize across different domains in the chemical space, with applications in **drug discovery** and **computational chemistry**.

### Core Research Areas

#### 🧬 Machine Learning for Drug Discovery
- Development of ML models for bioactivity prediction
- PROTAC design and ternary complex prediction
- Molecular property prediction and ADMET modeling

#### 🎯 Out-of-Distribution Generalization
- Evaluation of ML model robustness on OOD data (the PhD project, see below)
- Domain adaptation in chemical space
- Transfer learning for molecular properties

#### ⚗️ Computational Chemistry & Cheminformatics
- Molecular modeling and simulation
- Chemical space analysis and visualization
- Structure-activity relationship modeling

#### 🔄 Causal Learning & Systems Biology
- Causal inference in biological systems
- Dynamical systems analysis
- Computational neuroscience applications

#### 🧫 Virtual Cells & Perturbation-Response Prediction
- Predicting how a cell line's transcriptome responds to a compound
- Latent-space models trained on LINCS L1000 (see below)
- Evaluation under cold-compound and cold-cell-line splits

---

## Virtual Cells: Perturbation-Response Prediction

Between 2019 and 2020, at [AI VIVO](http://www.aivivo.co/) in Cambridge, I worked on "virtual cell" models: given a cell line and a small molecule, predict the change in the cell's expression profile. The training data were LINCS L1000 signatures (978 landmark genes, roughly 1.3M profiles across ~20k compounds and ~77 cell lines). The core difficulty is sparsity: most compound and cell-line combinations were never measured, so a useful model has to extrapolate to new compounds, new cell lines, or both.

<figure class="research-figure">
  <a href="/assets/images/research/perturbation-matrix.png" title="Open full-size figure"><img src="/assets/images/research/perturbation-matrix.png" alt="A matrix of cell lines (rows) against perturbations such as compounds and shRNAs (columns). Measured cells show a small expression signature; most cells are empty. Three highlighted question marks mark the prediction settings: new compound in a known cell line, known compound in a new cell line, and both new."></a>
  <figcaption>The perturbation matrix. Rows are cellular contexts, columns are perturbations, and a filled cell is a measured 978-gene signature. In LINCS L1000 only about 10% of the 151,230 drug and cell-line pairs were ever measured (Hodos et al., 2018), which leaves three prediction settings of increasing difficulty: a new compound in a known cell line, a known compound in a new cell line, and both new.</figcaption>
</figure>

The approach was a conditional variational autoencoder in the Dr.VAE family (Rampášek et al., 2019): encode the control expression profile into a smooth low-dimensional cell state, apply the perturbation as a learned displacement in that latent space conditioned on the compound and the cell line, and decode the predicted post-treatment profile. Training uses the measured post-treatment profile as the latent target, alongside the usual reconstruction and KL terms. Unlike the original Dr.VAE, which fits one model per drug, a single model is shared across compounds and cell lines.

<figure class="research-figure">
  <a href="/assets/images/research/drvae-workflow.png" title="Open full-size figure"><img src="/assets/images/research/drvae-workflow.png" alt="Workflow diagram: a control expression profile is encoded to a latent state, a perturbation conditioned on compound and cell line moves it in latent space, and a decoder produces the predicted post-treatment profile. A second row shows training, where the measured post-treatment profile is encoded with shared weights to give the latent target."></a>
  <figcaption>A perturbation as a move in latent space. Top row, inference: encode the control profile, apply the learned perturbation in latent space, decode. Bottom row, training: the measured post-treatment profile, encoded with shared weights, provides the latent target for the transition loss.</figcaption>
</figure>

What mattered most was evaluation. Dr.VAE's own sanity check asks whether predicting the perturbation beats simply reconstructing the control profile; the effect is real but small and data-hungry, holding for well-covered drugs and not for thinly covered ones. The pipeline therefore shipped as a reproducible Nextflow workflow with explicit cold-compound and cold-cell-line splits and a training-mean baseline, and the data processing was released as [lincs_processing](https://github.com/HFooladi/lincs_processing). The same theme, that the split and the baseline decide what a model's number means, runs through my later work on [out-of-distribution evaluation](/publications/2025-09-15-ood-evaluation/) in chemical space.

---

## Current Projects

### PhD Thesis: Domain Generalization in Chemical Space
**University of Vienna | Kirchmair lab (Comp3D) | CD-Laboratory for Molecular Informatics in the Biosciences, with Boehringer Ingelheim and BASF**

Drug-like chemical space is vast. Our data is not. ChEMBL holds bioactivities for roughly 2.9 million compounds, while the number of drug-like molecules is estimated at 10<sup>23</sup> to 10<sup>60</sup>. Even against the smallest estimate, the measured fraction is about 10<sup>-17</sup>. Any compound worth predicting, a new chemotype, a new target or a new assay, is therefore almost surely far from everything a model was trained on. A score on a random split only tells you how well the model interpolates among its neighbours; it says little about the leap that matters.

<figure class="research-figure">
  <a href="/assets/images/research/extrapolation-problem.png" title="Open full-size figure"><img src="/assets/images/research/extrapolation-problem.png" alt="Drug-like chemical space drawn as a wide field of faint dots. At the lower left, a small dense teal disc labelled training data (ChEMBL, 2.9 million compounds) sits inside a dashed in-distribution ring with a short arrow labelled interpolation. At the upper right, an amber target labelled the compound you need to predict. A long curved amber arrow from the ring to the target is labelled extrapolation, distribution shift. Below: ChEMBL about 2.9 times 10 to the 6 compounds, drug-like space 10 to the 23 to 10 to the 60, ratio about 10 to the minus 17 at best."></a>
  <figcaption>Where the data is and where the predictions are needed. Models are fit on the small, dense region of measured compounds; the compounds that matter lie far outside it. ML in drug discovery is, by definition, an extrapolation problem.</figcaption>
</figure>

The thesis takes that gap as its subject. First, define and measure what "out of distribution" means for molecules, and test how models actually behave there: our [systematic OOD evaluation](/publications/2025-09-15-ood-evaluation/) (14 models, 8 datasets, 10 splitting strategies; code in [ALineMol](https://github.com/HFooladi/ALineMol)) shows that the choice of split decides both how hard the task is and whether in-distribution performance predicts out-of-distribution performance at all. Second, when a new assay has little data, quantify how far it is from the assays we already have, so that transfer and meta-learning can borrow from the right sources: the [task-hardness framework](/publications/2024-04-24-task-hardness/) ([THEMAP](https://github.com/HFooladi/THEMAP)). Third, adapt models at test time to the region they are asked about, which is the work currently in preparation.

### Key Collaborations
- **University of Vienna**: Comp3D laboratory research
- **International Partners**: Cross-institutional research projects
- **Industry Connections**: Applied research in pharmaceutical contexts

---

## Research Impact

### Recent Publications
- **2025**: [Evaluating ML Models for Molecular Property Prediction on Out-of-Distribution Data](/publications/2025-09-15-ood-evaluation/) (J. Chem. Inf. Model.)
- **2025**: [ML-Based Pose Sampling with Established Scoring Functions for Virtual Screening](/publications/2025-05-09-pose-sampling/) (J. Chem. Inf. Model.)
- **2024**: [Quantifying Task Hardness for Transfer Learning](/publications/2024-04-24-task-hardness/) (J. Chem. Inf. Model.)
- **2023**: [Bayesian Optimization for Ternary Complex Prediction](/publications/2023-12-01-botcp/) (AI in the Life Sciences)

### Research Tools & Software
- Development of computational tools for drug discovery
- Open-source contributions to cheminformatics community
- Machine learning pipelines for molecular analysis

---

## Future Directions

### Emerging Research Areas
- **Multimodal Learning**: Combining molecular and biological data
- **Explainable AI**: Interpretable models for drug discovery
- **Federated Learning**: Collaborative learning across institutions
- **Quantum-Classical Hybrid Methods**: Next-generation computational approaches

### Long-term Vision
Bridging the gap between computational predictions and experimental validation in drug discovery through robust, generalizable machine learning approaches.

---

*For detailed publications, see [Publications](/publications/) | For talks and presentations, see [Talks](/talks/)*