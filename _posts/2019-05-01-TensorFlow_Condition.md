---
layout: post
comments: true
title:  "TensorFlow Control Flow: tf.cond()"
excerpt: A deeper look at how control flow operations work in the TensorFlow
date:   2019-05-01 5:00:00
mathjax: true
---

I have published this post at Medium too. You can find Medium version [here](https://towardsdatascience.com/tensorflow-control-flow-tf-cond-903e020e722a)

### 1. Introduction

Tensorflow is one of the most popular deep learning frameworks and has played a key role in advancing deep learning. 
I am using Tensorflow for more than two years, but I have seen lots of bizarre and unpredictable behavior during using control flow.
Recently (19 April 2019), I watched a [video](https://www.youtube.com/watch?v=IzKXEbpT9Lg&list=PLQY2H8rRoyvzIuB8rZXs7pfyjiSUs8Vza&index=2&t=900s) of 
TensorFlow team’s own internal training sessions, which was very helpful and make it more clear how control flow ops work. I definitely recommend watching this video.
The video covers tf.cond() and tf.while_loop in details. So, I decided to write this post to elaborate more on how tf.cond() works, and 
provide some examples for illustration. Hopefully, I will cover tf.while_loop in the subsequent post.

**Note:** I am going to cover low-level operations in this post. There are other ops like Functional ops, which is beyond the scope of this blog post.

### 2. Switch and Merge

Two important ops that are used during the construction of the graph are Switch and Merge. Therefore, in this section, 
I am going to introduce how they work and provide some examples for becoming familiar with some of their weird behavior!

<div class="imgcap">
<img src="/assets/TensorFlow_Condition/1_Switch_Merge.PNG" height=300px class="center">
<div class="thecap" style="text-align:justify">Figure 1: Schematics of what are the inputs and outputs of Switch and Merge, and how they work.</div>
</div>


As you can observe, the switch receives two inputs: data and predicate, and provides two outputs: data and dead tensor!. 
Also, Merge receive two (or more than two) inputs and provides one output which is the data. I am going to go to more details in the following.

#### 2.1. Switch

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

So, let’s dive in to see what’s happening in this example. I have created the figure that illustrates what is going on.

<div class="imgcap">
<img src="/assets/TensorFlow_Condition/2_Switch.PNG" height="300" class="center">
<div class="thecap" style="text-align:justify">Figure 2: Illustrating what is happening in the provided example.</div>
</div>


I think it’s clear from the figure what is happening. e.g., in x_0, x_1 = control_flow_ops.switch(tf.constant(1.0), False) , the predicate is false; 
therefore, tf.constant(1.0) is forwarded to the output_false branch and dead tensor to the output_true branch.

One important thing to mention is that I have executed the x_0 and x_3 within tf.Session(), which contain the data (tensor). 
If I try to run and execute the dead tensor, I will face with an error. 
Whenever you try to execute and retrieve the dead tensor in the Session.run(), it will lead to an error. e.g., the following code raises a famous and frequently occurred error:


```
with tf.Session() as sess:
    print(sess.run(x_1))
'''
output:
InvalidArgumentError: Retval[0] does not have value
'''
```

Now, I think it’s enough for Switch. let’s see how Merge operates.

#### 2.2. Merge

Merge is another operator which is required for construction of tf.cond() graph.

<div class="imgcap">
<img src="/assets/TensorFlow_Condition/3_Merge.PNG" height="300" class="center">
<div class="thecap" style="text-align:justify">Figure 3: Merge ops</div>
</div>

Merge can receive more than one inputs, but only one of them must contain the data and others should be the dead tensors. 
Otherwise, we will face with some random and unpredictable behavior. Let’s see how Merge works in the last example:

```
with tf.Session() as sess:
    print(sess.run(control_flow_ops.merge([x_0, x_1])))       
    print(sess.run(control_flow_ops.merge([x_1, x_0])))       
    print(sess.run(control_flow_ops.merge([x_2, x_3])))   
    print(sess.run(control_flow_ops.merge([x_3, x_2])))     
    print(sess.run(control_flow_ops.merge([x_0, x_1, x_2])))
	
'''
output:
Merge(output=1.0, value_index=0)
Merge(output=1.0, value_index=1)
Merge(output=2.0, value_index=1)
Merge(output=2.0, value_index=0)
Merge(output=1.0, value_index=0)
Merge(output=2.0, value_index=2)
'''
```

It behaves completely according to our expectation. 
But, things get a little unexpected and bizarre, when you feed two tensors which have data into the Merge.

```
with tf.Session() as sess:
    print(sess.run(control_flow_ops.merge([x_1, x_0, x_3]))) 
    print(sess.run(control_flow_ops.merge([x_0, x_3])))
    print(sess.run(control_flow_ops.merge([x_3, x_0])))
	
'''
output:
Merge(output=1.0, value_index=1)
Merge(output=1.0, value_index=0)
Merge(output=2.0, value_index=0)
'''
```


Sometimes, it returns the value of x_0and sometimes the value of x_3. So, be cautious about this behavior.
Note: Dead tensors propagate through the computational graph until they reach to the Merge ops.

### 3. tf.cond()

Now, I think we have a good grasp of how Switch and Merge operate. It is a good time to dive into the tf.cond(). 
I am considering the simple case, where the input arguments are pred, true_fn, and false_fn.

```
tf.cond(pred, true_fn, false_fn)
```

I am going to consider a simple example to introduce this concept. consider the following condition:

```
tf.cond(x < y, lambda: tf.add(x, z), lambda: tf.square(y))
```


I have constructed the computational graph for this simple example, and you can find it in figure 4.

<div class="imgcap">
<img src="/assets/TensorFlow_Condition/4_tf_cond.PNG" height="400" class="center">
<div class="thecap" style="text-align:justify">Figure 4: computational graph to show how tf.cond() works.</div>
</div>

The first thing to mention is that there is a switch for each input. By input, I mean the arguments of true and false functions within the tf.cond(). In this example, there are three inputs (x, y, and z), 
and as a result, there are three switches in the computational graph.

For true_fn, the switch outputs are emitted from the true branch. 
For false_fn, the switch outputs are emitted from the false branch. 
Based on the condition result(whether x is smaller than y or not), the predicate can be true or false, and one of the branches (left or right) will be
executed. It is important to note that, both tf.add() and tf.square() operations come after the switches. 
As a result, in this example, only one of them will be executed and the other one remains untouched.

In addition, I think this picture is a little wrong. I think dead tensors propagate through the add or square operation until they meet the Merge ops. 
Merge ops remove the dead tensors and only provides one output.

Hopefully, you have learned something about tf.cond() up to know, and you have become more comfortable for working with this API. 
I am going to end this post by providing one controversial example and explain how something we have learned so far can help us to understand the inner working. 
In the TensorFlow website, you can find the following statement:

'''
**WARNING:** Any Tensors or Operations created outside of true_fn and false_fn will be executed regardless of which branch is selected at runtime. 
Although this behavior is consistent with the dataflow model of TensorFlow, it has frequently surprised users who expected a lazier semantics.
'''

So, I a going to provide an example to clarify what this warning says. I am providing two examples: in the first one all the operations are defined within the true_fn and false_fn, and in the second example, some operations are defined outside this functions. 
I am going to construct and visualize the computational graph to illustrate why this behavior occurs.

**Example 1:**

```
import tensorflow as tf
x = tf.constant(3.0)
y = tf.constant(2.0)

def true_fn():
    z = tf.multiply(x, y)
    print_output = tf.Print(z, [z], "The value I want to print!!")
    return tf.add(x, print_output)
	
def false_fn():
    return tf.square(y)
	
result = tf.cond(x < y, true_fn, false_fn)

with tf.Session() as sess:
    print(sess.run(result))
## output: 4.0
'''
if you keep everything the same and just changing x to x = tf.constant(1.0), the predicate becomes true and the output will be as the following:
3.0
The value I want to print!![2]
'''
```

The important point here to focus on is that all the Tensors and operations have been created inside the functions. 
So, there are three input arguments and consequently, there exist three switches in the graph. 
Constructing a computational graph for this case will be easy.

<div class="imgcap">
<img src="/assets/TensorFlow_Condition/5_tf.cond_ex1.PNG" height="400" class="center">
<div class="thecap" style="text-align:justify">Figure 5: Computational graph for Example 1.</div>
</div>

if the predicate becomes true (x will be smaller than y), the true_fn (left branch) will be executed and the right one does not execute and 
remain untouched (and Vice versa).

Note: I have used tf.Print() function in order to print something in the computational graph and have access to the value of a tensor in the graph. Using tf.Print() is a little tricky and I am not going to explain here how it works. 
There is an excellent blog post about this function [here](https://towardsdatascience.com/using-tf-print-in-tensorflow-aa26e1cff11e).

**Note:** When the predicate is false (x > y), the false_fn (right branch) is executed, and as a result, tf.Print() receives only the dead tensors and does not print anything.


**Example 2:**

The example 1 was a little boring and the result was completely what we expected. Things get more interesting in this example.

```
x = tf.constant(3.0)
y = tf.constant(2.0)
z = tf.multiply(x, y)
print_output = tf.Print(z, [z], "The value I want to print!!")

def true_fn():
    return tf.add(x, print_output)
	
def false_fn():
    return tf.square(y)
	
result = tf.cond(x < y, true_fn, false_fn)

with tf.Session() as sess:
    print(sess.run(result))
'''
output:
4.0
The value I want to print!![6]
'''
```

In this example, the predicate is false (x > y) and we expect that the false_fn executes and true_fn remains untouched. 
However, we can see that output contains “The value I want to print!![6]” which belongs to the true_fn. 
At first, maybe this behavior seems a little weird, but it is completely consistent with what we have seen and understood so far. 
Some of the tensors (z and print_output) have defined outside the function and as a result, they will be put before the switch in the computational graph. 
let’s draw the graph to make this point clear:

<div class="imgcap">
<img src="/assets/TensorFlow_Condition/6_tf.cond_ex2.PNG" height="400" class="center">
<div class="thecap" style="text-align:justify">Figure 6: Computational graph for Example 2.</div>
</div>

You can see in figure 6 that multiply and prints ops are outside (before) the switches. 
So, no matter the predicate is true or false, these two operations will be executed in both cases.

So, by understanding switch and merge and realizing how tf.cond() works, hopefully, you can see this behavior is consistent with the dataflow model of TensorFlow and there is nothing wrong about it.

I m going to finish this post here. Thanks for reading the post up to the end. Please let me know if I have made a mistake or something is wrong. 
Hopefully, I am going to cover tf.while_loop() in the subsequent post.

### References

- Inside [TensorFlow](https://youtu.be/IzKXEbpT9Lg): Control Flow
- Tensorflow, node which is [dead](https://stackoverflow.com/questions/46680462/tensorflow-node-which-is-dead)
- How to use the function merge and switch of [TensorFlow?](https://stackoverflow.com/questions/47107994/how-to-use-the-function-merge-and-switch-of-tensorflow)
- [Official](https://www.tensorflow.org/api_docs/python/tf/cond) TensorFlow [documentation](https://www.tensorflow.org/api_docs/cc/class/tensorflow/ops/switch)
- [Using](https://towardsdatascience.com/using-tf-print-in-tensorflow-aa26e1cff11e) tf.Print() in TensorFlow