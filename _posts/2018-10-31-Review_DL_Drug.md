---
title:  "Review: Deep Learning in drug discovery"
date:   2018-10-31 5:00:00
permalink: /posts/2018/10/Review-Deep-Learning-in-drug-discovery/
tags:
  - chemoinformatics
  - drug-discovery 
---

Deep learning algorithms have achieved state of the art performance in a lot of different tasks. 
Convolutional Neural Network (CNN) can be used to achieve great performance in image classification, object detection, and semantic segmentation tasks. 
Recurrent Neural Networks (RNNs) and its descendants like LSTMs and GRUs are the first things that come to mind in order to tackle problems like 
neural language translation, speech recognition and even they can be used to generate new texts and music.

Drug discovery is one of the areas that can gain benefit a lot from this success of deep learning. 
Drug discovery is a very time-consuming and expensive task and deep learning can be used to make this process faster and cheaper. 
Recently, lots of papers have been published around this topic and in this post, I am going to present a detailed review to see how it is possible to use deep learning in this domain. 

I can divide the application of deep learning in drug discovery mainly into three different categories:

- Drug properties prediction
- De Novo drug design
- Drug-target interaction (DTI) prediction

<div class="imgcap">
<img src="/images/assets/Review_DL_Drug/AI_Drug.JPG" height="300" class="center">
<div class="thecap" style="text-align:center">Figure 1: Three areas that deep learning can help and facilitate drug discovery.</div>
</div>

In the following, I am trying to elaborate more on each category and discuss some relevant papers.

## Drug properties prediction

Machine learning problems broadly are classified into three subgroups: supervised learning, unsupervised learning (self-supervised learning), and reinforcement learning. 
Drug properties prediction can be framed as a supervised learning problem. The input to the algorithms is a drug (compound), and the output is drug property (e.g., drug toxicity or solubility). 

- Input: A drug (small molecule)
- output: 0-1 label to indicate whether a drug has certain properties or not. It can also be framed as a multi-label classification or regression task. 

<div class="imgcap">
<img src="/images/assets/Review_DL_Drug/Representation.JPG" height="300" class="center">
<div class="thecap" style="text-align:center">Figure 2: Different ways that a molecule can be represented.</div>
</div>

Therefore, there are different ways to represent a drug (compound):

- Molecular fingerprint
- Text-based representation (e.g., SMILES, InChIKey, SELFIES)
- Graph structure (2d or 3d graph)

### Molecular fingerprint

One way to represent a drug in the input pipeline of the machine learning framework is molecular fingerprint. 
The most prevalent type of fingerprint is a series of binary digits (bits) that represent the presence or absence of particular substructures in the molecule. 
Thus, a drug (small compound) is described as a vector (array) of zeros and ones. 

<div class="imgcap">
<img src="/images/assets/Review_DL_Drug/Binary_Fingerprint.PNG" height="300" class="center">
<div class="thecap" style="text-align:center">Figure 3: How to represent a molecule in a binary vector.</div>
</div>

It has been used extensively in the literature [1]. 
But, it is apparent that encoding a molecule as a vector is not a reversible process (it is a lossy transformation); 
i.e., we can not fully reconstruct a molecule from the fingerprint, which indicates that lots of information are lost during this operation.

There are lots of different fingerprints for representing a small molecule. 
You can follow this [guide](https://www.rdkit.org/UGM/2012/Landrum_RDKit_UGM.Fingerprints.Final.pptx.pdf) [2] to learn more about them.

### SMILES code

Another way to represent a molecule is encoding a structure as a text. It is the way of converting graph structure data to textual content 
and using the text (encoded string) in the machine learning pipeline. One of the standards and most popular representation
is Simplified Molecular-Input Line-Entry System (SMILES). After conversion, we can use powerful algorithms from natural language processing (NLP) literature
to process the drug and for example, predict the properties, side effects, or even chemical-chemical interaction. [[Sunyoung Kwon]](https://arxiv.org/abs/1704.08432) [3]. 

<div class="imgcap">
<img src="/images/assets/Review_DL_Drug/SMILES.png" height="500" class="center">
<div class="thecap" style="text-align:center">Figure 4: How to represent a molecule in SMILES code.</div>
</div>

If you are interested to learn more about SMILES, you can follow this [link](http://opensmiles.org/opensmiles.html)[4]. Although SMILES is very popular
among chemists and machine learning researchers, it is not the only text-based representation available for representing a drug. InChIKey Is another popular
representation you can find in the literature. [Mario Krenn et.al.](https://arxiv.org/abs/1905.13741) [5] proposed SELFIES (SELF-referencIng Embedded Strings), 
which are based on a Chomsky type-2 grammar. I am talking more about them (advantages) in the De Novo Drug Design section.

### Graph structure data

Prevalence of deep learning on graph-structured data, such as graph convolution network [Thomas Kipf](https://tkipf.github.io/graph-convolutional-networks/) [6], 
has made it possible to use graph data directly as an input to the deep learning pipeline. 
E.g., a compound can be considered as a graph, where vertices are atoms, and chemical bonds between atoms are edges. We have seen a significant success
in the graph neural network area, and there are libraries such as [Deep Graph Library](https://www.dgl.ai/), 
[PyToch-Geometric](https://github.com/rusty1s/pytorch_geometric), [PyTorch-BigGraph](https://github.com/facebookresearch/PyTorch-BigGraph) dedicated for this work. 

## Drug-Target Interaction Prediction

Proteins play a central role in living creatures; i.e., proteins are the key players for most of the functions within and outside the cells of living creatures. e.g., There are some proteins that are responsible for apoptosis, cellular differentiation, and other critical functions. Another important fact is, the function of a protein is directly dependent on its three-dimensional structure. i.e., changing the structure of the protein can significantly alter the functionality of the proteins, and it is one of the important facts for drug discovery. Lots of the drugs (small molecules) are designed to bind to the proteins, change their structure, and consequently alter the functionality. In addition, it is crucial to note that changing one protein function can have a dramatic effect on cellular function. Proteins directly interact with each other (e.g., you can see protein-protein networks), and also some proteins act as a transcription factor, which means they can repress or activates the expression of other genes in the cells. Therefore, altering one protein function can have a dramatic effect on the cells and can modify a different cellular pathway.

As a result, one important problem in computational drug discovery is predicting whether a particular drug can bind to particular proteins or not. This is the concept which is called drug-target interaction (DTI) prediction and has received significant attention within recent years. 

[Qingyuan Feng et.al.](https://arxiv.org/abs/1807.09741) proposed a deep learning-based framework for drug-target interaction prediction. Most of the deep learning frameworks for DTI prediction take both compound and protein information as the input, but the difference is what representations they are using to feed to the neural networks. As I mentioned in the previous section, a compound can be represented in numerous ways (binary fingerprint, SMILES code, features extracted from graph convolution networks), and proteins as well can have different representation. Depending on the input representation, various architectures can be used to handle the DTI prediction. e.g., If we are going to use a text-based representation for both compounds and proteins (SMILES code for compound and Amino acid or other sequence-based descriptors for proteins), the RNNs based architectures are the first thing that comes to mind.

[Matthew Ragoza et.al.](https://pubs.acs.org/doi/10.1021/acs.jcim.6b00740) proposed a method for Protein−Ligand Scoring with Convolutional Neural Network. Instead of text based representation, they have utilized the three-dimensional (3D) representation of a
protein−ligand. Consequently, They have decided to use convolutional neural networks that can act on this 3D structures and extract meaningfull and approporiate features for predicting Protein−Ligand binding affinity.

Although it has become a great trend to propose deep learning algorithms for in-silico DTI prediction and they have achieved to impressive results in some cases, the papers are very similar and the only innovation I found within them is the choice of input representation and subsequently, the architecture to act on the input. So, I can summarize this task as the followings:

- Finding the database that contains information about compounds and targets and whether they are interacting with each other or not.
- Most often, in DTI prediction, the networks take a pair of compound and proteins as the input.
- You should choose the representation you find appropriate for compounds and proteins. I reviewed some of them, but there are other representations.
- Based on the representation you chose, you should consider suitable neural network architecture to handle the input. As a rule of thumb, you can use RNNs based architectures (GRU, LSTM, ...) in case of text-based representation for inputs and Convolutional neural networks in case of image or 3D structure.
- The problem can be considered as the binary classification (whether a compound bind to the target) or regression (prediction the strength of affinity between compound and proteins).

So, that's it for DTI prediction. At first, maybe it seems a difficult and challenging task, but the papers I have read are using very simple techniques and strategies to tackle this problem.

## De Novo Drug Design

So far, we have just observed discriminative algorithms; i.e., given a drug, the algorithm can predict the side effect and other associated properties, or given compound-protein pairs, it will forecast whether they can bind or not. However, what if we are interested in designing a compound that has certain properties? e.g., we want to design a compound that can bind to a particular protein, modify some pathways, and does not interact with other pathways, and also have some physical property like the specific range of solubility. We can not tackle this problem with the toolkits we introduced in the previous sections. This problem is best realized in the realm of generative models. Generative models, form autoregressive algorithm, Variational autoencoders (VAEs), and generative adversarial networks (GANs), have become pervasive and widespread in the machine learning community. However, the attempts to utilize them in the task of De Novo drug design is not very old.

The problem is, generating a compound, given certain desirable properties. As it seems obvious, it is harder than the two other problems we discussed in the last sections. The space of possible chemical molecules is extraordinarily large and searching in this space to find a proper drug is very time-consuming and near impossible tasks. I am seeing recent trends in applying generative models for designing chemical molecules. Although there are some promising results in the literature, this field is in infancy, and it requires more mature methods. Here I am going to review some of the best papers I have read in this area.

Good amount of works, generate the SMILES code of compounds. i.e., the output of the algorithm is SMILES code (text) and it should be converted in the chemical space. [Rafael Gomez-Bombarelli et. al.](http://pubs.acs.org/doi/full/10.1021/acscentsci.7b00572) proposed a method for automatic chemical design using a data-driven continuous representation of molecules.

<div class="imgcap">
<img src="/images/assets/Review_DL_Drug/Drug_Design_Hernandez.PNG" alt="alternate text" height="300" class="center">
<div class="thecap" style="text-align:center">Figure 5: Using variational autoencoder to generate compounds with desired properties. Matt J. Kusner et. al.</div>
</div> 

They have used VAEs for generating the molecules. The input representation is SMILES code, and obviously, the output will be SMILES code too. The nice trick is using Gaussian process in the latent space (which is a continuous space) to reach to the point with desired properties. Then, converting this point in the latent space to the SMILES code using the decoder. The paper is well-written and definitely a recommended reading. However, The problem is that there is not a one-one correspondence between SMILES code and molecules. i.e., not all the produced code can be converted back to original (chemical) space, and as a result, the generated SMILES code often don't correspond to the valid molecules.

[Matt J. Kusner et. al.](https://arxiv.org/pdf/1703.01925.pdf) proposed Grammar VAE to specifically address this issue (producing SMILES code that does not correspond to valid molecules). Instead of feeding SMILES string directly to the network and generating SMILES code, they are converting the SMILES code to the parse tree (by utilizing SMILES context-free grammar). Using the grammar, They are able to generate more syntactically valid molecules.  

## References

1- Database fingerprint (DFP): an approach to represent molecular databases, [Eli Fernández-de Gortari et al.](https://jcheminf.biomedcentral.com/articles/10.1186/s13321-017-0195-1#Sec11)

2- Fingerprints in the [RDKit](https://www.rdkit.org/UGM/2012/Landrum_RDKit_UGM.Fingerprints.Final.pptx.pdf)

3- DeepCCI: End-to-end Deep Learning for Chemical-Chemical Interaction Prediction, [Sunyoung Kwon](https://arxiv.org/abs/1704.08432)

4- OpenSMILES specification. [link](http://opensmiles.org/opensmiles.html)

5- SELFIES: a robust representation of semantically constrained graphs with an example application in chemistry, [Mario Krenn et.al.](https://arxiv.org/abs/1905.13741)

6- GRAPH CONVOLUTIONAL NETWORKS, [Thomas Kipf](https://tkipf.github.io/graph-convolutional-networks/) 

