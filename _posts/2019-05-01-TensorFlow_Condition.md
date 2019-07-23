---
layout: post
comments: true
title:  "TensorFlow Control Flow: tf.cond()"
excerpt: A deeper look at how control flow operations work in the TensorFlow"
date:   2019-05-01 5:00:00
mathjax: true
---

### Introduction

Tensorflow is one of the most popular deep learning frameworks and has played a key role in advancing deep learning. 
I am using Tensorflow for more than two years, but I have seen lots of bizarre and unpredictable behavior during using control flow.
Recently (19 April 2019), I watched a [video](https://www.youtube.com/watch?v=IzKXEbpT9Lg&list=PLQY2H8rRoyvzIuB8rZXs7pfyjiSUs8Vza&index=2&t=900s) of 
TensorFlow team’s own internal training sessions, which was very helpful and make it more clear how control flow ops work. I definitely recommend watching this video.
The video covers tf.cond() and tf.while_loop in details. So, I decided to write this post to elaborate more on how tf.cond() works, and 
provide some examples for illustration. Hopefully, I will cover tf.while_loop in the subsequent post.

**Note:** I am going to cover low-level operations in this post. There are other ops like Functional ops, which is beyond the scope of this blog post.

### Switch and Merge

Two important ops that are used during the construction of the graph are Switch and Merge. Therefore, in this section, 
I am going to introduce how they work and provide some examples for becoming familiar with some of their weird behavior!

<div class="imgcap">
<img src="/assets/TensorFlow_Condition/1_Switch_Merge.PNG" height="300" class="center">
</div>


As you can observe, the switch receives two inputs: data and predicate, and provides two outputs: data and dead tensor!. 
Also, Merge receive two (or more than two) inputs and provides one output which is the data. I am going to go to more details in the following.

#### Switch

First, let’s consider the switch. If you visit the Tensorflow website, you can find this definition and summary about switch operation:

'''
Forwards data to the output port determined by pred. If pred is true, the data input is forwarded to output_true. 
Otherwise, the data goes to output_false.
'''