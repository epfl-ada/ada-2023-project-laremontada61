---
layout: page
title: Crafting a NLP-Augmented beer rating system 🍻
cover-img: /assets/img/bar_head.png
thumbnail-img: /assets/img/bar_head.png
share-img: /assets/img/bar_head.png
---

# Context
In today's era, we have the ability to rate a wide range of things, such as restaurants, movies, or beers. Numerous websites enable users to share their opinions through numerical ratings and textual reviews. However, as consumers, relying solely on numerical ratings can be challenging to get a comprehensive understanding of a product. Reading through all textual reviews for detailed information is time-consuming, and subjective opinions further complicate the evaluation process. 
The problem intensifies when certain products are either unfairly favored or disadvantaged due to the subjectivity of reviewers. This undermines the credibility of the ranking system, as products not reviewed by these subjective individuals might be unfairly influenced in either a positive or negative manner. 
In summary, the current approach of relying solely on numerical ratings and extensive textual reviews poses challenges for consumers in obtaining a clear and unbiased picture of a product.

Understanding the fairness of ratings is crucial to ensure fairness among products. Our aim is to create a fair beer rating system that can be applied to different rating systems. We'll explore how the subjective nature of reviews affects both the sentiment (polarity) and numerical ratings of beers, revealing genuine differences in diverse reviews. This investigation will use thorough statistical tests. The result will be a new ranking system that combines written reviews and numerical ratings, offering a more complete and fair evaluation approach.
<iframe src="assets/plot/means.html" width="750px" height="530px" frameborder="0" position="relative">Means</iframe>

lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.

# Let's rank them 

Now that we've standardised our scores, we can finally rank our breweries. We will first rank them based the numerical grade their beers obtained, but how to do it?


Firstly, we associate each brewery with its corresponding beers. This gives us a set of reviews per brewery. The number of reviews per brewery is very varied, as we can see in the figure below, a large proportion of breweries have few reviews. We consider that a brewery with fewer than 30 reviews in total cannot be included in the ranking because we want the ranking to be based on a significant number of reviews. With this threshold we keep n breweries and remove m. We can also see below the distribution of the number of reviews per beer, which will interest us later.

Plot distribution 


We have now filtered our breweries to keep only those with more than 30 reviews, let’s rank them! The first system is a weighted ranking, when we calculate the average score for a brewery from the scores obtained by its beers, we weight the importance of each beer by the number of reviews it has received. This rating system isn’t sensitive to beers with few reviews, which is why we have kept all the brewery's beers each time. Using this rating system, we have produced two rankings. 

This first ranking corresponds to the 10 best breweries of all time according to thsi ranking system.

Plot top 10 weight ranking

We would also like to visualize this ranking by year by calculating the  top 10 for each year. This is shown in the visual.

Plot top 10 across years weighted 

However, this classification method can be questioned in the way it weights its beers. Let's imagine a brewery that produces a very popular beer, which is highly consumed and rated, and which also gets very good ratings. On the other hand, this brewery produces other beers that are not as good, and which are therefore rated less highly and drunk less. With the first rating system, this brewery will be judged as very good, but is it really so, knowing that only one of its beers can be considered good? We believe that a brewery can also be assessed on the average quality of its beers without taking into account whether or not they are popular. This classification is possible thanks to the second system. 


From now on, a brewery's average rating will not be obtained by weighting the importance of its beers by the number of reviews they have received. This ranking therefore reflects the quality of the brewery's range of beers. However, this ranking is very sensitive to beers with fewer reviews, as we don't want a beer with just one review to have a strong influence on the brewery's average, we filtered the beers to keep only those with more than 5 reviews. Similar to the first system, we have produced an overall ranking. Here are the results of this general ranking for the two rating systems. We can see that the ranking has changed significantly (describe the changes)


Plot compare ranking

Here is the evolution of the top 10 with this system over the years.


Plot evolution quality ranking 


We have our champions, _,_,_ corresponds to our 3 best breweries for the first rating system. We would now like to look at the evolution of the scores obtained by these three breweries over time.

Plot evolution

Commentary on evolution 


# Is there a link for reviews' subjectivity with their polarity and their numerical ratings?
We aim to examine the correlation between numerical ratings and subjectivity, as well as between polarity and subjectivity. Our hypothesis is rooted in the intuition that extreme subjectivity tends to yield extreme reviews or ratings. To refine our ranking system effectively, it's essential to assign more weight to objective opinions, ensuring a more equitable and balanced system.

PLOTS CCT

CONCLUSION BOXPLOTS

Before incorporating textual reviews for different beers into the ranking system, it's crucial to check if the sentiment polarity from these reviews correlates with numerical ratings. By understanding this relationship, we aim to enhance our ranking mechanism. To delve deeper into this association, we aligned the two features and conducted a thorough correlation analysis.

CALCUL PEARSON CORRELATION

Based on our findings, the correlation between polarity and numerical ratings appears to be relatively weak. This suggests that without considering textual reviews, we overlook significant information. We believe that both textual reviews and numerical ratings are crucial for defining the most accurate ranking. Consequently, we plan to devise a formulation where equal importance is attributed to both these features.

# Sentiment analysis

## Polarity map
bonsoir jzdheghdzj
<iframe src="assets/plot/link_subjectivity_polarity.html" width="750px" height="530px" frameborder="0" position="relative">subjectivity_polarity</iframe>
<br>
<iframe src="assets/plot/link_subjectivity_polarity_positive.html" width="750px" height="530px" frameborder="0" position="relative">subjectivity_polarity_positive</iframe>
<br>
<iframe src="assets/plot/link_subjectivity_polarity_negative.html" width="750px" height="530px" frameborder="0" position="relative">subjectivity_polarity_negative</iframe>

# Globe vizualization 🌍
<br>
<div style="display: flex; justify-content: space-between;">
    <iframe src="assets/html/map_basis.html" width="50%" height="380px" frameborder="0" position="relative" style="border-radius: 20px;">Globe</iframe>

    <iframe src="assets/html/map_new.html" width="50%" height="380px" frameborder="0" position="relative" style="border-radius: 20px;">Globe</iframe>
</div>

<div style="display: flex;">
    <div style="flex: 1;  text-align: center;">
        <h4>Initial world ranking</h4>
    </div>
    <div style="flex: 1; text-align: center;">
        <h4>New world ranking</h4>
    </div>
</div>

