---
title: "Transformers For Chemists"
collection: teaching
type: "graduate course"
permalink: /teaching/2026-transformers-for-chemists/
venue: "University of Vienna"
date: 2026-05-06
location: "Vienna, Austria"
---

## Transformers For Chemists

Implementations of transformer models from scratch for chemists, building toward a small MolFormer-style, encoder-only, MLM-pretrained model that fits on a free Google Colab. You can find the course on my Github: [Transformers-For-Chemists](https://github.com/HFooladi/Transformers-For-Chemists)

## Project Description

This repository is a sister course to [GNNs-For-Chemists](https://github.com/HFooladi/GNNs-For-Chemists). Where the GNN course teaches molecules as graphs, this one teaches molecules as sequences — SMILES strings tokenized and fed through a transformer encoder. Each notebook builds the next layer of the stack from scratch, with chemistry-first intuition and rich visualizations, so that by the end you can pre-train and fine-tune your own tiny chemical foundation model.

The course focuses on encoder-only / bidirectional transformers (BERT-style, MolFormer-style), since these are the workhorses of property prediction and representation learning in chemistry. Causal/decoder transformers (GPT-style) are mentioned for context but not the focus.

## Citation

If you use this repository in your research, please cite it as:

```bibtex
@misc{transformers_for_chemists,
  author = {Fooladi, Hosein},
  title = {Transformers For Chemists: Building a Tiny MolFormer from Scratch},
  year = {2026},
  publisher = {GitHub},
  journal = {GitHub repository},
  howpublished = {\url{https://github.com/HFooladi/Transformers-For-Chemists}},
  note = {Educational resource for chemists, pharmacists, and researchers building encoder-only transformer models for chemical applications}
}
```
