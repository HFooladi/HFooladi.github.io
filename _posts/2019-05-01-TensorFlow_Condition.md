---
layout: post
comments: true
title:  "TensorFlow Control Flow: tf.cond()"
excerpt: A deeper look at how control flow operations work in the TensorFlow
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

As I mentioned before, Switch receives two inputs. One of them is a predicate, which is boolean tensor (true or false), and another one is the data that should be passed. 
Predicate determines whether the data should be passed by output_true branch or output_false branch. 
But, one weird stuff here is the concept of the dead tensor. No matter whether the predicate is true or false; 
always there are two outputs: one of them is data and the other one is the dead tensor. If pred is true, the dead tensor is sent along output_false(and vice versa).

There is not a clear reference that explains why and how dead tensors are useful, 
but it seems they are useful for distributed processing, and their existence is an implementation detail. 
e.g., you can find [here](https://stackoverflow.com/questions/46680462/tensorflow-node-which-is-dead?source=post_page---------------------------) one somehow convincing answer:

'''
First of all, dead tensors are an implementation detail of TensorFlow’s control flow constructs: tf.cond() and tf.while_loop(). 
These constructs enable TensorFlow to determine whether or not to execute a subgraph based on a data-dependent value.
'''

Let’s see an example to make things more clear. I have taken inspiration from this post for providing this example.

```
import tensorflow as tf
from tensorflow.python.ops import control_flow_ops
x_0, x_1 = control_flow_ops.switch(tf.constant(1.0), False)
x_2, x_3 = control_flow_ops.switch(tf.constant(2.0), True)
print(x_0, x_1, x_2, x_3)
with tf.Session() as sess:
    print(sess.run(x_0))    # prints 1.0
    print(sess.run(x_3))    # prints 2.0
'''
output:
Tensor("Switch:0", shape=(), dtype=float32) Tensor("Switch:1", shape=(), dtype=float32) Tensor("Switch_1:0", shape=(), dtype=float32) Tensor("Switch_1:1", shape=(), dtype=float32)
1.0
2.0
'''
```










