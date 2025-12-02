---
title: "Quantifying the hardness of bioactivity prediction tasks for transfer learning"
collection: publications
permalink: /publications/2024-04-24-task-hardness
excerpt: 'Today, machine learning methods are widely employed in drug discovery. However, the chronic lack of data 
continues to hamper their further development, validation, and application. Several modern strategies aim to mitigate 
the challenges associated with data scarcity by learning from data on related tasks.'
date: 2024-04-28
venue: 'Journal of Chemical Information and Modeling'
paperurl: 'https://doi.org/10.1021/acs.jcim.4c00160'
citation: 'Fooladi, Hosein, et al. "Quantifying the hardness of bioactivity prediction tasks for transfer learning" Journal of Chemical Information and Modeling (2024)'
---
**Hosein Fooladi**, Steffen Hirte, and Johannes Kirchmair

**Abstract**: Today, machine learning methods are widely employed in drug discovery. However, the chronic lack of data
continues to hamper their further development, validation, and application. Several modern strategies aim to mitigate
the challenges associated with data scarcity by learning from data on related tasks. These knowledge-sharing approaches
encompass transfer learning, multi-task learning, and meta-learning. A key question remaining to be answered for these
approaches is about the extent to which their performance can benefit from the relatedness of available source (training) tasks, in other words, how difficult (“hard”) a test task is to a model, given the available source tasks.

This study introduces a new method for quantifying and predicting the hardness of a bioactivity prediction task based on its relation to the available training tasks. The approach involves the generation of protein and chemical representations and the calculation of distances between the bioactivity prediction task and the available training tasks. In the example of meta-learning, we demonstrate that the proposed task hardness metric is inversely correlated with performance. The metric will be useful in estimating the task specific gain in performance that can be achieved through meta-learning.

```bibtex
@article{fooladi2024quantifying,
  title={Quantifying the hardness of bioactivity prediction tasks for transfer learning},
  author={Fooladi, Hosein and Hirte, Steffen and Kirchmair, Johannes},
  journal={Journal of Chemical Information and Modeling},
  volume={64},
  number={10},
  pages={4031-4046},
  year={2024},
  publisher={ACS Publications}
}
```
