---
title: Mammogram Analysis and Breast Cancer Localization System
tags:
- Machine Learning
- Healthcare
desc: a comprehensive system for precise 3D localization of breast tumors, combining CC and MLO mammogram views to enhance diagnostic accuracy
doc: /doc/patent_mammogram_analysis_202541004479
team:
- github.com/Ash1sh0611|Ashish-Shankar
- Ashwin-Raj-K-R
- Amarendra-Kumar-Singh
mentors: 
- Dr.Vidya-Kudva
- Shankari-N
---

## Background

Breast cancer as you all may know, is one of the most prevalent cancers affecting women worldwide. Early detection is key to making it curable - and while there are many machine learning models built to detect tumors from mammogram images, there's a crucial step that often gets overlooked. Most existing models stop at tumor detection, but what comes after detection is just as important: localizing the tumor in the actual 3D space of the breast using 2D projections from different views (like MLO and CC). Radiologists are trained to mentally map these 2D views into a 3D understanding, identifying the tumor’s position using reference points like clock positions and quadrants. This process is complex, time-consuming, and prone to human variation - yet it's critical for determining treatment strategies like surgery or biopsy.

The project was aimed to explore ways of automating or assisting this localization step. While I can't go into full technical detail due to ongoing research constraints, our focus was on understanding and modeling the process radiologists use to infer tumor location from multiple 2D views, and how that could be translated into a computational approach.

## Things I Learned

First off, this was my first real AI related project. Yes, I'd played around with the basics - linear/logistic regression, KNN, Neural Networks the usual textbook stuffs - but this was the first time I had to actually build something that could be used in a real-world medical scenario. I was, and still am a beginner to the world of _Python_ and its libraries. Coming from mostly a web development background, this was a whole different beast to tackle. It took me quite a few days to even think of an approach, that too with lots and lots of binge watching youtube tutorials.

#### Fun and Quickly Boring: The Annotation Work

As for any AI related projects, data is the fuel, and turns out getting that data in the right form is... not so great of an experience. Our mentor sourced anonymized mammogram data from a local hospital and gave us a pre-processed version. But that didn’t mean it was ready for models - we had to annotate it.. I called the whole process of annotating the data "Fun", only because it was my first time, and it kinda felt interesting at beginning. But after a while, it became a test of patience.

#### And Finally, Python... Again

Just like any other AI project, Python is like the first and mostly the only language used. It's not just about the easy or told so (not for me personally)  syntax, but it’s about thinking in terms of data transformations, vectorized operations etc. The latter point makes more sense, as you wouldn't want to keep implementing your own set of string/data manupilation techniques in _C/C++_ or so languages. Libraries like _Numpy_, _Pandas_, _CV2_, _Matplotlib_, _Scikit learn_ etc. became my new toolbox. But well I guess I will never going to get fully comfortable with those.

## Why Does It Matter

This wasn’t just a project about models or data - it was a crash course in applied AI, in understanding domain-specific challenges. It pushed me out of my comfort zone, taught me to think differently, and made me realize how much I still have to learn. But more importantly - it made me want to keep learning.
