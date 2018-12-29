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
<img src="/assets/Review_DL_Drug/AI_Drug.JPG" height="300">
</div>

In the following, I am trying to elaborate more on each category and discuss some relevant papers.

## Drug properties prediction

Machine learning problems broadly are classified into three subgroups: supervised learning, unsupervised learning, and reinforcement learning. Drug properties prediction can be considered as a supervised learning problem. The input to the algorithms is a drug (compound) and the output is drug property (e.g., drug toxicity or solubility). 

<div class="imgcap">
<img src="/assets/Review_DL_Drug/Representation.JPG" height="300">
</div>
