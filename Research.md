## Deep Learning In Drug Discovery
Deep learning algorithms have achieved state of the art performance in a lot of different tasks. 
Convolutional Neural Network (CNN) can be used to achieve great performance in image classification, object detection, and semantic segmentation tasks. Recurrent Neural Networks (RNNs) and its descendants like LSTMs and GRUs are the 
first things that come to mind in order to tackle problems like neural language translation
, speech recognition and even they can be used to generate new texts and music.

The key aspect of deep learning is representation learning; extracting the relevant information in order to achieve graet performance in a particular task. 
But, what is relevant information? it can be defined as an abstarct feature(layer) that has the most useful information in doing a 
particular task (minimizing training loss) and also can be generalized well to reach significant performance on the unseen(test) data. 

One of the areas that deep learning can be very beneficial is healthcare. Biological data and especially gene expression data are noisy and extracting meaningful information is challenging. 
Also, there are a huge amount of high dimensional biological data (genomics, transcriptomics, metabolomics, ...) and analyzing and comprehending this data
is a challenging task. In particular, I am very interested in how we can use deep learning concepts in the task of drug discovery.

First, I am going to learn the abstract features (latent space) of this high dimensional noisy data in order to capture the most relevant information and mask irrelevant information for the task of drug properties prediction. Moreover, I am very interested to analyze and manipulate this latent space in
order to understand what features are very important for drug properties prediction (biological pathways, biological process,...)

In addition, I am very curious about applying the generative model for new compound generation. De-novo drug and molecule design 
can be considered as another branch of drug discovery. In this task, the goal is generating new compounds with desired properties 
based on the training database. I think it is possible to use geometric deep learning approach and apply deep learning on graph (compound) directly 
and generate new molecules.
