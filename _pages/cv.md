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

## Education

### Ph.D. in Pharmaceutical Sciences (Cheminformatics)
**University of Vienna** | Vienna, Austria | *2022 - Present*  
CD-Lab MIB Industry Partnership  
Thesis: Machine learning models for domain generalization in chemical space

### M.Sc. in Biomedical Engineering  
**Sharif University of Technology** | Tehran, Iran | *2017*  
🏆 *Best Master's Student Award*

### B.Sc. in Mechanical Engineering
**Amirkabir University of Technology (Tehran Polytechnic)** | Tehran, Iran | *2014*

## Work Experience

### Chief Data Scientist (CDS)
**[Celeris Therapeutics](https://celeristx.com/)** | Graz, Austria | *Feb 2021 - Feb 2022*
- Developed machine learning models for targeted protein degradation
- Built ML pipelines to identify targets susceptible to degradation  
- Created ternary complex prediction models (protein-protein-degrader complexes)

### Senior Data Scientist - Cheminformatics/ML Expert
**[AI VIVO](http://www.aivivo.co/)** | Cambridge, UK | *Apr 2019 - Dec 2020*
- Led machine learning initiatives for drug repositioning and de novo design
- Predicted small molecule perturbation effects on different cell lines
- Developed ML tools for drug combination synergy prediction

### Chief Scientific Officer (CSO)
**Shenakht Pajouh** | Tehran, Iran | *May 2018 - Dec 2019*
- Integrated psychological knowledge with machine learning for automated mental health assistance
- Led scientific strategy and research development

### Machine Learning Researcher
**Cambridge Systems Biology Centre** | Cambridge, UK | *Feb 2017 - Jan 2018*
- Applied deep learning methods to drug discovery challenges
- Developed novel computational approaches for pharmaceutical research

### Bioinformatics Researcher
**Royan Institute** | Tehran, Iran | *Jan 2017 - Aug 2017*
- Reconstructed context-specific metabolic networks from gene expression data
- Applied computational methods to systems biology problems

### Teaching Assistant
**Sharif University of Technology** | Tehran, Iran | *Spring 2017*
- Advanced Bioinformatics course
- Systems Biology course
  
## Technical Skills
### Programming & Development
- **Python** (Advanced): NumPy, Pandas, SciPy, Matplotlib, Seaborn
- **R** (Advanced): Statistical modeling, data visualization, Bioconductor
- **C++** (Intermediate): Performance optimization, algorithm implementation
- **Rust** (Intermediate): Systems programming

### Machine Learning & AI
- **Deep Learning**: PyTorch, TensorFlow, JAX
- **Classical ML**: scikit-learn, XGBoost, LightGBM
- **Specialized Methods**: Bayesian inference, causal inference, reinforcement learning
- **Model Development**: Feature engineering, hyperparameter optimization, cross-validation

### Computational Chemistry & Bioinformatics
- **Cheminformatics**: RDKit, Open Babel, DeepChem, Schrödinger Suite
- **Molecular Modeling**: Protein-ligand docking, molecular dynamics simulations
- **Bioinformatics**: Sequence analysis, pathway analysis, network biology
- **Data Integration**: Multi-omics analysis, systems biology approaches

## Research Expertise
- **Drug Discovery Automation**: End-to-end ML pipelines for pharmaceutical research
- **Targeted Protein Degradation**: PROTAC design and ternary complex prediction
- **Out-of-Distribution Generalization**: Robust model development for chemical space
- **Multi-omics Data Integration**: Combining genomics, proteomics, and metabolomics data
- **Network Pharmacology**: Systems-level drug mechanism analysis
- **Causal Inference**: Understanding cause-effect relationships in biological systems

## Publications

  <ul>{% for post in site.publications %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

## Peer Review Activities

### Journal Reviewing
- **[Nature Machine Intelligence](https://www.nature.com/natmachintell/)** - Premier AI/ML journal
- **[Journal of Chemical Information and Modeling](https://pubs.acs.org/journal/jcisd8)** - Leading cheminformatics publication  
- **[Artificial Intelligence in the Life Sciences](https://www.sciencedirect.com/journal/artificial-intelligence-in-the-life-sciences)** - Interdisciplinary AI applications

### Expertise Areas
- Machine learning model evaluation and validation
- Computational chemistry and cheminformatics methods
- Drug discovery and pharmaceutical applications
  
## Talks

  <ul>{% for post in site.talks %}
    {% include archive-single-talk-cv.html %}
  {% endfor %}</ul>
  
## Teaching

  <ul>{% for post in site.teaching %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
## Service and Leadership

### Open Source Contributions
- **Active Developer**: Contributing to open-source cheminformatics and ML tools
- **Community Engagement**: Participating in academic and industry collaborations
- **Knowledge Sharing**: Mentoring students and junior researchers

### Professional Memberships
- International research networks in computational chemistry
- Academic collaborations with European institutions
- Industry partnerships in pharmaceutical research
