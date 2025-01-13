---
title:  "Communication, coordination and competition in causal problem solving"
date:   2021-08-23 5:00:00
permalink: /posts/2021/08/Causal_Problem_Solving
tags:
  - causality
  - computational-cognition
  - mutli-agent
  - reinforcement-learning

toc: true
toc_label: "Causal Problem Solving"
---
Once upon a time, I received an offer to pursue my PhD study at the school of Philosophy, Psychology & Language Science, University
of Edinburgh. I wanted to study what are the differences/similarities between human and RL agents in cooperative problem-solving. But,
situation did not go well, and I could not start the PhD program at Edinburgh.

I spent a fair amount of time writing a proposal that led to my acceptance. So, I thought maybe it is a good idea now to share the
proposal on my blog. Maybe someone else can find it useful. I have put the Motivation section in the blog. If you are interested, you can
download the pdf of the whole proposal from [here](https://hfooladi.github.io//files/Edinburgh_Proposal_Hosein_Fooladi_Final.pdf). 

## 1. Motivation

### 1.1. Introduction

It has been argued that humans perceive and interpret the world through the lens of a causal model (e.g. Sloman, 2005; Steyvers et al., 2003). Such a causal model can help explain why observed events occurred (Coenen et al., 2015; Meder et al, 2014) and help predict what will happen next (Clark, 2014). Humans also have an innate willingness to ask “why” questions and seek reasons and explanations underlying the phenomena they encounter in the world (Bramley et al., 2015; Schmidhuber, 2010).

One important question is what is the relationship between this causal representation inside the head, and language as a means for asking causal questions and communicating causal insights? How children learn language and generate novel utterances is a key problem for cognitive science (e.g. Chater & Manning, 2006; Quine, 1960; Smith et al., 2017). Language helps each generation pass its discoveries on and helps people pass ideas between one another. Therefore, intuitively it must be a suitable medium for transferring causal representation from one mind to another.

In my PhD, I propose to explore how people communicate during group causal reasoning problems. Broadly, individuals must reason about one another’s knowledge and attempt to share insights order to maximize the influence among other agents in the environment and ultimately task specific reward. My goal is to shed light on the understanding of how human share beliefs through communication during joint problem solving. I propose to analyse this problem using a combination of active learning (Settles, 2012), multi-agent reinforcement learning (Shoham, 2003) and game theory (Nash, 1950).

### 1.2. The multi-agent Reinforcement Learning framework

Reinforcement learning (RL) deals with agents acting in an environment with the goal of establishing a policy (i.e. state-behaviour mapping) that maximises their expected future rewards (Sutton & Barto, 2018). While a popular framework in theoretical neuroscience (from whence it originates) RL has not been applied extensively in the study of higher-level cognition. Recent advancements have explored intrinsic reward signals—like “curiosity” —that can drive learning in the absence of well-shaped extrinsic rewards (Pathak et al., 2017; Schmidhuber, 2010). Multi-agent RL generalises the formalism to settings with multiple agents that might share or differ in what they find rewarding. Each agent observes the environment, infers the state of the world based on the belief (i.e. agents state can differ at each time), and choose an action/policy maximizing expected cumulative reward. In multi-agent RL setting, it is possible to train agents to output statements in a shared or initially undetermined language, e.g. with the intrinsic goal of exerting causal influence on other agents in the environment. Causal influence assessment can take place through comparison between observed outcomes and simulated counterfactual outcomes (Lewis, 1979; Pearl, 2009; Jaques et al., 2018).In this setting, agent language acquisition and understanding is grounded and embedded in collective group pursuit (e.g. Gauthier & Mordatch, 2016; Hermann et al., 2017; Mikolov et al., 2015), i.e. providing a potential explanation for how lexical concepts relate to the real world by acting into the world. This approach is called intrinsic social motivation via causal influence and has great potential as a framework within which to study communication and emergent coordination within natural human group settings.