---
title: "Research"
permalink: /research/
layout: single
author_profile: true
description: "Hosein Fooladi's research: out-of-distribution generalization in chemical space, task hardness for transfer learning, ternary complex prediction, virtual cells and perturbation-response modelling, and mechanistic models of stem-cell self-organization."
keywords: "machine learning drug discovery, out-of-distribution generalization, chemical space, task hardness, transfer learning, PROTAC ternary complex, virtual cell, perturbation prediction"
toc: true
toc_label: "On this page"
---

One question runs through my work: how do you build a model that holds up on data it has never seen? I first met it in mechanistic models of developing cells, then in industry, predicting how cells respond to compounds and how proteins and degraders assemble, and now in my PhD on generalization in chemical space. The answer has less to do with architectures than with how you split the data, what you compare against, and whether you can tell in advance how far the new case is from the old ones.

## The problem: drug discovery is extrapolation

**University of Vienna · Kirchmair lab (Comp3D) · CD-Laboratory for Molecular Informatics in the Biosciences, with Boehringer Ingelheim and BASF**

Drug-like chemical space is vast. Our data is not. ChEMBL holds bioactivities for roughly 2.9 million compounds, while the number of drug-like molecules is estimated at 10<sup>23</sup> to 10<sup>60</sup>. Even against the smallest estimate, the measured fraction is about 10<sup>-17</sup>. Any compound worth predicting, a new chemotype, a new target or a new assay, is therefore almost surely far from everything a model was trained on. A score on a random split only tells you how well the model interpolates among its neighbours; it says little about the leap that matters.

<figure class="research-figure">
  <a href="/assets/images/research/extrapolation-problem.png" title="Open full-size figure"><img src="/assets/images/research/extrapolation-problem.png" alt="Drug-like chemical space drawn as a wide field of faint dots. At the lower left, a small dense teal disc labelled training data (ChEMBL, 2.9 million compounds) sits inside a dashed in-distribution ring with a short arrow labelled interpolation. At the upper right, an amber target labelled the compound you need to predict. A long curved amber arrow from the ring to the target is labelled extrapolation, distribution shift. Below: ChEMBL about 2.9 times 10 to the 6 compounds, drug-like space 10 to the 23 to 10 to the 60, ratio about 10 to the minus 17 at best."></a>
  <figcaption>Where the data is and where the predictions are needed. Models are fit on the small, dense region of measured compounds; the compounds that matter lie far outside it. ML in drug discovery is, by definition, an extrapolation problem.</figcaption>
</figure>

## What the PhD does about it

### Measure out-of-distribution honestly

The first step is to define what "out of distribution" means for molecules and to measure how models actually behave there. We evaluated a broad set of models, from random forests to message-passing and pretrained graph neural networks, on bioactivity and ADMET datasets under many different splitting strategies. The result depends on the split far more than on the model. Scaffold splits, the community standard, are nearly as easy as random splits, and performance in distribution predicts performance out of distribution almost perfectly. Splits by chemical similarity clusters are the hard case: performance drops and the correlation collapses, so the model that looks best on in-distribution data is no longer a safe choice. Model selection is only trustworthy when the split mirrors the intended application.

<figure class="research-figure">
  <a href="/assets/images/research/alinemol-id-vs-ood.png" title="Open full-size figure"><img src="/assets/images/research/alinemol-id-vs-ood.png" alt="Two scatter plots of out-of-distribution ROC-AUC against in-distribution ROC-AUC for classical ML models. Left, scaffold split: points lie tightly along the diagonal. Right, UMAP-cluster split: points spread in a wide cloud below the diagonal."></a>
  <figcaption>In-distribution versus out-of-distribution performance for the same models and datasets under two splits. On scaffold splits (left) the two move together; on similarity-cluster splits (right) they barely do. From <a href="/publications/2025-09-15-ood-evaluation/">Fooladi et al., JCIM 2025</a>; code and splitters in <a href="https://github.com/HFooladi/ALineMol">ALineMol</a>.</figcaption>
</figure>

### Know how far a new task is from what you have

Most assays of interest have little data, so models borrow from related assays through transfer, multi-task or meta-learning. Whether that helps depends on how related the assays really are. We represent each bioactivity task by its chemistry and its protein target, measure its distance to every available training task with an optimal-transport dataset distance, and turn that into a hardness score. The score is computed before any training and it predicts the outcome: the harder a task by this measure, the smaller the gain from meta-learning. The same map tells you which source tasks are worth transferring from.

<figure class="research-figure">
  <a href="/assets/images/research/themap-task-space.png" title="Open full-size figure"><img src="/assets/images/research/themap-task-space.png" alt="UMAP map of FS-Mol bioactivity prediction tasks coloured by protein family, with arrows from highlighted target tasks to their nearest source tasks."></a>
  <figcaption>A map of medicinal-chemistry task space: FS-Mol bioactivity tasks coloured by protein family. Arrows point from three test tasks to their nearest training tasks under the optimal-transport distance. From <a href="/publications/2024-04-24-task-hardness/">Fooladi, Hirte and Kirchmair, JCIM 2024</a>; the method is released as <a href="https://github.com/HFooladi/THEMAP">THEMAP</a>.</figcaption>
</figure>

### Adapt at test time

Evaluation and task distance tell you when a model is about to extrapolate. The third part of the thesis, currently in preparation, is what to do at that moment: adapt the model to the region it is being asked about, using the unlabelled test molecules themselves, rather than hoping the training distribution was close enough.

## Structure-based ML in industry

Before the PhD I led the machine learning team at Celeris Therapeutics in Graz, working on targeted protein degradation. The central modelling problem there is the ternary complex: a PROTAC molecule must hold a target protein and an E3 ligase together in a productive pose, and the number of candidate arrangements is enormous. BOTCP treats this as a Bayesian optimisation problem. A Gaussian-process surrogate and an acquisition strategy choose which configurations to evaluate, each is scored by a fitness that combines a protein-protein-interaction estimate with the PROTAC's conformational constraints, and the result retrains the surrogate. On a benchmark of experimentally solved complexes the method recovers near-native poses within a small number of top-ranked clusters, at a cost of hours rather than days per complex. My part was the constrained conformer generation, the combined fitness and the cluster deployment; the method is published in <a href="/publications/2023-12-01-botcp/">Rao et al., AI in the Life Sciences 2023</a>.

<figure class="research-figure">
  <a href="/assets/images/research/botcp-pipeline.png" title="Open full-size figure"><img src="/assets/images/research/botcp-pipeline.png" alt="Flow chart of the BOTCP loop: a Gaussian-process surrogate and acquisition strategy pick configurations from all possible ternary complexes, which are scored by PPI fitness and constraint fitness combined into a single fitness that retrains the surrogate."></a>
  <figcaption>The BOTCP loop: sample ternary-complex configurations, score them with a combined protein-protein and constraint fitness, and let a Bayesian-optimisation surrogate decide what to sample next. Figure from Rao et al., 2023 (CC BY).</figcaption>
</figure>

The same interest in making structure-based predictions trustworthy continued in Vienna. With Lan Vu we asked whether machine-learning pose sampling (DiffDock-L) can replace or complement classical docking in virtual screening, and found that the poses are only as useful as the scoring function that ranks them: rescoring with established physics-based functions is what turns a fast sampler into a usable screening tool (<a href="/publications/2025-05-09-pose-sampling/">Vu, Fooladi and Kirchmair, JCIM 2025</a>).

## The path here

### Mechanism first: stem-cell self-organization

My master's thesis at Sharif University asked how human embryonic stem cells on a micropattern organise themselves into concentric germ-layer territories with no external instruction. The answer that fit the experiments was small: every cell carries the same two-gene circuit, in which BMP4 activates itself and its inhibitor Noggin, both signals diffuse between neighbouring cells, and the pattern emerges from the colony edge inward. Two ODEs with eight parameters reproduce the rings, their response to colony size and culture conditions, and the spotted patterns seen in very large colonies. Published in <a href="/publications/waddington-landscape/">Bioinformatics, 2019</a>.

<figure class="research-figure">
  <a href="/assets/images/research/waddington-self-organization.png" title="Open full-size figure"><img src="/assets/images/research/waddington-self-organization.png" alt="Left: the BMP4/Noggin two-gene circuit inside one cell and its Waddington landscape with a fixed point and a limit cycle. Right: a micropatterned hESC colony with concentric fate territories emerging from the edge inward."></a>
  <figcaption>Inside one cell, a two-gene circuit; across the colony, diffusion between cells. Together they turn the Waddington landscape into a pattern-forming system.</figcaption>
</figure>

### Then the data arrived

Two genes and eight fitted parameters explain a micropattern. They cannot absorb a perturbation screen, an expression atlas or a single-cell dataset, and for most of what those measure the mechanism is unknown. The question stayed the same, how does a cell decide what to become and how does it respond to a perturbation, but the tools had to change: at the Cambridge Systems Biology Centre I built my first models on expression data, autoencoders and cell-type classifiers, and then moved to learning the regularities of perturbation data directly.

<figure class="research-figure">
  <a href="/assets/images/research/equations-to-data.png" title="Open full-size figure"><img src="/assets/images/research/equations-to-data.png" alt="Left, labelled 2017: the BMP4/Noggin circuit and its two differential equations, two genes and eight fitted parameters. A large arrow labelled then the data arrived points right. Right, labelled 2020: a large matrix of about 20,000 genes by thousands of perturbations, cell lines and patients, with a question mark in one cell."></a>
  <figcaption>From writing down the mechanism to learning it from data. The matrix on the right is the same biological question, now asked of about 20,000 genes at once.</figcaption>
</figure>

### Virtual cells: perturbation-response prediction

Between 2019 and 2020, at [AI VIVO](http://www.aivivo.co/) in Cambridge, I worked on "virtual cell" models: given a cell line and a small molecule, predict the change in the cell's expression profile. The training data were the LINCS L1000 expression signatures. The core difficulty is sparsity: most compound and cell-line combinations were never measured, so a useful model has to extrapolate to new compounds, new cell lines, or both.

<figure class="research-figure">
  <a href="/assets/images/research/perturbation-matrix.png" title="Open full-size figure"><img src="/assets/images/research/perturbation-matrix.png" alt="A matrix of cell lines (rows) against perturbations such as compounds and shRNAs (columns). Measured cells show a small expression signature; most cells are empty. Three highlighted question marks mark the prediction settings: new compound in a known cell line, known compound in a new cell line, and both new."></a>
  <figcaption>The perturbation matrix. Rows are cellular contexts, columns are perturbations, and a filled cell is a measured expression signature. In LINCS L1000 only about a tenth of the possible drug and cell-line pairs were ever measured (Hodos et al., 2018), which leaves three prediction settings of increasing difficulty: a new compound in a known cell line, a known compound in a new cell line, and both new.</figcaption>
</figure>

The approach was a conditional variational autoencoder in the Dr.VAE family (Rampášek et al., 2019): encode the control expression profile into a smooth low-dimensional cell state, apply the perturbation as a learned displacement in that latent space conditioned on the compound and the cell line, and decode the predicted post-treatment profile. Training uses the measured post-treatment profile as the latent target, alongside the usual reconstruction and KL terms. Unlike the original Dr.VAE, which fits one model per drug, a single model is shared across compounds and cell lines.

<figure class="research-figure">
  <a href="/assets/images/research/drvae-workflow.png" title="Open full-size figure"><img src="/assets/images/research/drvae-workflow.png" alt="Workflow diagram: a control expression profile is encoded to a latent state, a perturbation conditioned on compound and cell line moves it in latent space, and a decoder produces the predicted post-treatment profile. A second row shows training, where the measured post-treatment profile is encoded with shared weights to give the latent target."></a>
  <figcaption>A perturbation as a move in latent space. Top row, inference: encode the control profile, apply the learned perturbation in latent space, decode. Bottom row, training: the measured post-treatment profile, encoded with shared weights, provides the latent target for the transition loss.</figcaption>
</figure>

What mattered most was evaluation. Dr.VAE's own sanity check asks whether predicting the perturbation beats simply reconstructing the control profile; the effect is real but small and data-hungry, holding for well-covered drugs and not for thinly covered ones. The pipeline therefore shipped as a reproducible Nextflow workflow with explicit cold-compound and cold-cell-line splits and a training-mean baseline, and the data processing was released as [lincs_processing](https://github.com/HFooladi/lincs_processing). The same theme, that the split and the baseline decide what a model's number means, runs through the [out-of-distribution evaluation](/publications/2025-09-15-ood-evaluation/) above.

## Where this is going

The task-distance idea is not specific to chemistry. Any field that trains on a collection of datasets and is then handed a new one faces the same question: is the new dataset close to something we have, and if not, how badly will the model do? One dataset distance can answer it for all of them. For bioactivity assays this is THEMAP and it is published. For histopathology cohorts, embedded with a pathology foundation model, and for perturbation screens, embedded through their expression signatures, it is a proposal: fine-tune from the closest cohort, borrow from the nearest screened contexts, and flag the distant cases before training rather than after. Together with test-time adaptation, this is where the thesis is heading.

<figure class="research-figure">
  <a href="/assets/images/research/transfer-map.png" title="Open full-size figure"><img src="/assets/images/research/transfer-map.png" alt="Three rows, each with data, an embedding, a distance-to-existing-datasets panel and a decision. Bioactivity assays (THEMAP, published): embed with ECFP, ChemBERTa and ESM-2, transfer from the nearest assays. Histopathology cohorts (proposal): embed with pathology foundation-model tiles, fine-tune from the closest cohort. Perturbation screens (proposal): embed expression signatures, borrow from the nearest contexts. Footer: one distance for all three, the optimal-transport dataset distance."></a>
  <figcaption>One distance, three kinds of data. The first row is published work; the other two are proposals that reuse the same machinery.</figcaption>
</figure>

## Selected publications

- **2025**: [Evaluating ML Models for Molecular Property Prediction on Out-of-Distribution Data](/publications/2025-09-15-ood-evaluation/) (J. Chem. Inf. Model.)
- **2025**: [ML-Based Pose Sampling with Established Scoring Functions for Virtual Screening](/publications/2025-05-09-pose-sampling/) (J. Chem. Inf. Model.)
- **2024**: [Quantifying Task Hardness for Transfer Learning](/publications/2024-04-24-task-hardness/) (J. Chem. Inf. Model.)
- **2023**: [Bayesian Optimization for Ternary Complex Prediction](/publications/2023-12-01-botcp/) (AI in the Life Sciences)
- **2019**: [Enhanced Waddington Landscape Model with Cell-Cell Communication](/publications/waddington-landscape/) (Bioinformatics)

*For the full list, see [Publications](/publications/) · For talks and posters, see [Talks](/talks/)*
