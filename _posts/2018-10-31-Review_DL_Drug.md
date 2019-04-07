---
layout: post
comments: true
title:  "Review: Deep Learning in drug discovery"
excerpt: "A review of recent papers and works on applying deep learning algorithms for the task of drug discovery"
date:   2018-10-31 5:00:00
mathjax: false
---

Deep learning algorithms have achieved state of the art performance in a lot of different tasks. Convolutional Neural Network (CNN) can be used to achieve great performance in image classification, object detection, and semantic segmentation tasks. Recurrent Neural Networks (RNNs) and its descendants like LSTMs and GRUs are the first things that come to mind in order to tackle problems like neural language translation , speech recognition and even they can be used to generate new texts and music.

One of the areas that can benefit a lot from this success of deep learning is drug discovery. Drug discovery is a very time-consuming and expensive task and deep learning can be used to make this process faster and cheaper. Recently, lots of papers have been published around this topic and in this post, I am going to present a detailed review to see how it is possible to use deep learning in this domain. 

I can divide the application of deep learning in drug discovery into three different categories:
- Drug properties prediction
- De Novo drug design
- Drug-target interaction prediction

<div class="imgcap">
<img src="/assets/Review_DL_Drug/AI_Drug.JPG" height="300" class="center">
</div>

In the following, I am trying to elaborate more on each category and discuss some relevant papers.

## Drug properties prediction

Machine learning problems broadly are classified into three subgroups: supervised learning, unsupervised learning, and reinforcement learning. Drug properties prediction can be considered as a supervised learning problem. The input to the algorithms is a drug (compound) and the output is drug property (e.g., drug toxicity or solubility). 

<div class="imgcap">
<img src="/assets/Review_DL_Drug/Representation.JPG" height="300" class="center">
</div>

Therefor, there are three ways to represent a drug (compound):
- Molecular fingerprint
- Text data (like SMILES)
- Graph strcuture

### Molecular fingerprint

One way to represent a drug in input pipeline of machine learning framework is the molecular fingerprint. The most prevalent type of fingerprint is a series of binary digits (bits) that represent the presence or absence of particular substructures in the molecule. Thus, a drug is described as a vector (array) of zeros and ones. 

<div class="imgcap">
<img src="/assets/Review_DL_Drug/Binary_Fingerprint.PNG" height="300" class="center">
</div>

It has been used extensively in the literature [[Eli Fernández-de Gortari et al.]](https://jcheminf.biomedcentral.com/articles/10.1186/s13321-017-0195-1#Sec11). But, it is apparent that encoding a molecule as a vector is not the reversible process; i.e., we can not fully reconstruct molecule from the fingerprint, which indicates that lots of information are lost during this operation.

### SMILES code

Another way to represent a molecule is encoding a structure as a text. It is the way of converting graph structure data to textual content and using the text in the machine learning pipeline. One of the standards and most popular representation is simplified molecular-input line-entry system (SMILES). After conversion, we can use powerful algorithms from natural language processing (NLP) literature to process the drug and for example, predict the properties and side effects [[Sunyoung Kwon]](https://arxiv.org/abs/1704.08432). 

<div class="imgcap">
<img src="/assets/Review_DL_Drug/SMILES.png" height="500" class="center">
</div>

### Graph structure data

Prevalence of deep learning on graph structure data, such as graph convolution network [[Thomas Kipf]](https://tkipf.github.io/graph-convolutional-networks/), has made it possible to use graph data directly as an input to the deep learning pipeline. e.g., the compound can be considered as the graph, where vertices are atoms, and chemical bond between atoms are edges. 
