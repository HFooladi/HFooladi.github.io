---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
toc: true
toc_label: "CV Navigation"
toc_sticky: true
redirect_from:
  - /resume
---

{% include base_path %}

<div class="cv-download-section" style="text-align: center; margin: 2em 0; padding: 2em; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px; color: white;">
  <h2 style="margin-top: 0; color: white;"><i class="fas fa-file-download"></i> Download Complete CV</h2>
  <p style="margin: 1em 0; opacity: 0.9;">Get the full PDF version with detailed experience and achievements</p>
  <a href="/files/CV_Hosein_Fooladi.pdf" class="btn btn--inverse btn--large" target="_blank" style="background: white; color: #667eea; font-weight: bold; text-decoration: none; padding: 12px 30px; border-radius: 25px; display: inline-block; margin: 10px;">
    <i class="fas fa-download"></i> Download Full CV (PDF)
  </a>
  <p style="margin-top: 1em; font-size: 0.9em; opacity: 0.8;">
    Last updated: {{ site.time | date: "%B %Y" }}
  </p>
</div>

## Profile

Machine learning researcher focused on models that hold up on data they have never seen. One thread runs through eleven years of work: from mechanical engineering and robotics, through mathematical models of stem-cell self-organization, to leading industrial ML teams in drug discovery, and now a PhD on domain generalization in chemical space. I care about evaluation that mirrors the intended application, reproducible pipelines, and tools other people can rerun and trust.

- **5 papers** since 2023 (three in *JCIM*, one in *AI in the Life Sciences*, one on ChemRxiv)
- **12+ open-source packages**, including Rust tooling for structural biology and cheminformatics and the GNNs-for-Chemists course (180+ GitHub stars)
- **Led teams of 5+** ML engineers and computational chemists in two biotech companies

## Education

### Ph.D. in Pharmaceutical Sciences (Cheminformatics)
**University of Vienna** | Vienna, Austria | *2022 - Present*  
Kirchmair lab (Comp3D), Christian Doppler Laboratory for Molecular Informatics in the Biosciences (CD-Lab MIB), with industry partners Boehringer Ingelheim and BASF  
Thesis: Machine learning models for domain generalization in chemical space

### M.Sc. in Biomedical Engineering  
**Sharif University of Technology** | Tehran, Iran | *2015 - 2017*  
Thesis: A multicellular model of stem-cell self-organization, extending the Waddington landscape with cell-cell communication (published in [*Bioinformatics*, 2019](/publications/waddington-landscape/))  
🏆 *Best Master's Student Award*

### B.Sc. in Mechanical Engineering
**Amirkabir University of Technology (Tehran Polytechnic)** | Tehran, Iran | *2009 - 2014*  
Focus on dynamics and robotics; design and experimental study of a [passive walking biped](/publications/passive-walking-biped/)

## Work Experience

### Head of Machine Learning, then Chief Data Scientist
**[Celeris Therapeutics](https://celeristx.com/)** | Graz, Austria | *Feb 2021 - Feb 2022*  
Head of Machine Learning from Feb 2021; Chief Data Scientist from Dec 2021
- Led a team of 5+ ML engineers and computational chemists working on targeted protein degradation
- Owned the ML platform end to end: repository standards, CI on Azure Pipelines, Docker CPU/GPU images, AWS compute (EC2 spot fleets, ParallelCluster with Slurm, S3), experiment configuration and tracking
- Workstreams: virtual screening, protein-protein interface prediction, PROTAC linker generation and ternary complex prediction
- Co-developed [BOTCP](/publications/2023-12-01-botcp/), a Bayesian-optimization method for PROTAC ternary complexes: constrained conformer generation, combined fitness scoring and cluster deployment; a near-native cluster ranked in the top 15 for 16 of 22 benchmark complexes, in under two hours per complex on 128 CPU cores

### Freelance Machine Learning Engineer
**Vetevo** | Berlin, Germany (remote) | *2022, four months*
- Built a parasite-egg detection service for veterinary microscopy images end to end, alone
- Labelbox-to-YOLO dataset tooling (1,955 images, 3,132 boxes, 10 classes with 15x class imbalance), YOLOv5m training at 640 px, and a Flask inference endpoint
- Delivered mAP@0.5 of 0.92 and recall of 0.91 within four weeks

### Senior Data Scientist - Cheminformatics/ML Expert
**[AI VIVO](http://www.aivivo.co/)** | Cambridge, UK | *Apr 2019 - Dec 2020*  
Part of a 5+ team of ML, biology and chemistry specialists working on a single on-premise GPU node
- "Virtual cells": predicted small-molecule perturbation responses across cell lines on LINCS L1000 (978 landmark genes, 1.3M profiles, ~20k compounds) with a Dr.VAE-family latent-transition model ([overview with figures](/research/#virtual-cells-perturbation-response-prediction)); open-sourced the data processing as [lincs_processing](https://github.com/HFooladi/lincs_processing)
- Drug repositioning via transfer learning from ChEMBL (2M+ compounds) to rare-disease targets
- VAE-based de novo molecular design with multi-objective optimization
- Drug-combination synergy prediction (O'Neil, NCI-ALMANAC, DrugComb, DrugCombDB)
- Reproducible Nextflow workflows with cold-compound and cold-cell-line splits and explicit baselines; PyTorch, TensorFlow, Weights & Biases, FastAPI and Gradio

### Chief Scientific Officer (CSO)
**Shenakht Pajouh** | Tehran, Iran | *May 2018 - Dec 2019*
- Integrated psychological knowledge with machine learning for automated mental health assistance
- Led scientific strategy and research development

### Machine Learning Researcher
**Cambridge Systems Biology Centre** | Cambridge, UK | *Feb 2017 - Jan 2018*
- Deep learning on single-cell RNA-seq data: autoencoders and cell-type classifiers
- First models on high-dimensional expression data after mechanistic ODE modelling in the master's thesis

### Bioinformatics Researcher
**Royan Institute** | Tehran, Iran | *Jan 2017 - Aug 2017*
- Reconstructed context-specific metabolic networks from gene expression data
- Applied computational methods to systems biology problems

### Teaching Assistant
**Sharif University of Technology** | Tehran, Iran | *Spring 2017*
- Advanced Bioinformatics course
- Systems Biology course
  
## Technical Skills
### Programming Languages
- **Python** (Advanced): daily driver for research and production code (NumPy, Pandas, SciPy, pydantic)
- **Rust** (Intermediate): high-performance parsers and tokenizers with Python bindings (pdbrust, sdfrust, rustmolbpe)
- **R** (Advanced): statistical modelling, Bioconductor
- **C++** (Intermediate): performance-critical implementations

### Machine Learning
- **Deep Learning**: PyTorch, JAX, TensorFlow; graph neural networks, transformers, VAEs and diffusion models
- **Classical ML**: scikit-learn, XGBoost, LightGBM
- **Methods**: out-of-distribution evaluation, transfer and meta-learning, Bayesian optimization and active learning, causal inference

### MLOps & Infrastructure
- **Experimentation**: Hydra configs, MLflow, Weights & Biases
- **Pipelines & compute**: Nextflow, Slurm / AWS ParallelCluster, Docker CPU/GPU images, AWS (EC2, S3)
- **CI/CD & serving**: GitHub Actions, Azure Pipelines, FastAPI, Gradio

### Computational Chemistry & Bioinformatics
- **Cheminformatics**: RDKit, DeepChem, Open Babel, ChEMBL and FS-Mol data pipelines
- **Structure-based modelling**: protein-ligand docking, ML-based pose sampling (DiffDock-L), AlphaFold2-Multimer, molecular dynamics
- **Bioinformatics**: single-cell RNA-seq, perturbation data (LINCS L1000), network and systems biology

## Research Expertise
- **Out-of-Distribution Generalization**: defining and evaluating OOD data in chemical space; 14 models x 8 datasets x 10 splitting strategies ([ALineMol](https://github.com/HFooladi/ALineMol))
- **Transfer and Meta-Learning**: quantifying bioactivity task hardness and task relations to guide source-task selection ([THEMAP](https://github.com/HFooladi/THEMAP))
- **Targeted Protein Degradation**: PROTAC design and ternary complex prediction with Bayesian optimization
- **Perturbation-Response Modelling**: "virtual cell" models of transcriptional responses to small molecules
- **Systems Biology**: mechanistic models of stem-cell self-organization and pattern formation

## Publications

  <ul>{% for post in site.publications %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

## Peer Review Activities

- **[Nature Machine Intelligence](https://www.nature.com/natmachintell/)**
- **[Journal of Chemical Information and Modeling](https://pubs.acs.org/journal/jcisd8)**
- **[Journal of Cheminformatics](https://jcheminf.biomedcentral.com/)**
- **[Artificial Intelligence in the Life Sciences](https://www.sciencedirect.com/journal/artificial-intelligence-in-the-life-sciences)**
  
## Talks

  <ul>{% for post in site.talks %}
    {% include archive-single-talk-cv.html %}
  {% endfor %}</ul>
  
## Teaching

  <ul>{% for post in site.teaching %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
## Open Source Software

### Research Libraries
- **[THEMAP](https://github.com/HFooladi/THEMAP)**: task hardness estimation for molecular activity prediction (on PyPI)
- **[ALineMol](https://github.com/HFooladi/ALineMol)**: evaluating ML models on out-of-distribution data in the chemical domain
- **[lincs_processing](https://github.com/HFooladi/lincs_processing)**: parsing and processing of the LINCS L1000 dataset
- **[molax](https://github.com/HFooladi/molax)**: molecular active learning in JAX
- **[bayesoptimol](https://github.com/HFooladi/bayesoptimol)**: Bayesian optimization and active learning for drug discovery
- **[chembl-pdb-linker](https://github.com/HFooladi/chembl-pdb-linker)**: linking ChEMBL bioactivity data with PDB structures

### Rust Tooling
- **[pdbrust](https://github.com/HFooladi/pdbrust)**: PDB parser, 40-260x faster than pure Python
- **[sdfrust](https://github.com/HFooladi/sdfrust)**: SDF/MOL2 parser at roughly 220k molecules per second
- **[rustmolbpe](https://github.com/HFooladi/rustmolbpe)**: BPE tokenizer for SMILES with Python bindings
- **[rustdock-vina](https://github.com/HFooladi/rustdock-vina)**: AutoDock Vina in Rust (work in progress)

### Course Repositories
- **[GNNs-For-Chemists](https://github.com/HFooladi/GNNs-For-Chemists)**: graph neural networks implemented from scratch for chemists (180+ stars)
- **[Transformers-For-Chemists](https://github.com/HFooladi/Transformers-For-Chemists)**: building a small MolFormer-style encoder from scratch
- **Diffusion Models course**: generative diffusion models in JAX (see [Teaching](/teaching/))
