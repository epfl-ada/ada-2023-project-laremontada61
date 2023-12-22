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
<iframe src="assets/plot/means.html" width="900px" height="530px" frameborder="0">Your browser does not support iframes.</iframe>


# Let's rank them 

Now that we've standardised our scores, we can finally rank our breweries. We will first rank them based the numerical grade their beers obtained, but how to do it?
## Where do they come from?

<iframe src="assets/plot/brewery_world_map.html" width="900px" height="620px" frameborder="0">Your browser does not support iframes.</iframe>

<iframe src="assets/plot/reviews_world_histogram.html" width="900px" height="620px" frameborder="0">Your browser does not support iframes.</iframe>

Firstly, we associate each brewery with its corresponding beers. This gives us a set of reviews per brewery. The number of reviews per brewery is very varied, as we can see in the figure below, a large proportion of breweries have few reviews. We consider that a brewery with fewer than 30 reviews in total cannot be included in the ranking because we want the ranking to be based on a significant number of reviews. With this threshold we keep n breweries and remove m. We can also see below the distribution of the number of reviews per beer, which will interest us later.


<iframe src="assets/plot/reviews_beer_histogram.html" width="900px" height="620px" frameborder="0">Your browser does not support iframes.</iframe>

<iframe src="assets/plot/reviews_breweries_histogram.html" width="900px" height="620px" frameborder="0">Your browser does not support iframes.</iframe>

<iframe src="assets/plot/top_most_rated_breweries.html" width="900px" height="900px" frameborder="0">Your browser does not support iframes.</iframe>

We have now filtered our breweries to keep only those with more than 30 reviews, let’s rank them! The first system is a weighted ranking, when we calculate the average score for a brewery from the scores obtained by its beers, we weight the importance of each beer by the number of reviews it has received. This rating system isn’t sensitive to beers with few reviews, which is why we have kept all the brewery's beers each time. Using this rating system, we have produced two rankings. 

This first ranking corresponds to the 10 best breweries of all time according to this ranking system.

<iframe src="assets/plot/top10_alltime_weighted.html" width="900px" height="620px" frameborder="0">Your browser does not support iframes.</iframe>

We would also like to visualize this ranking by year by calculating the top 10 for each year. This is shown in the visual.

<iframe src="assets/plot/top10_weight.html" width="900px" height="420px" frameborder="0">Your browser does not support iframes.</iframe>

However, this classification method can be questioned in the way it weights its beers. Let's imagine a brewery that produces a very popular beer, which is highly consumed and rated, and which also gets very good ratings. On the other hand, this brewery produces other beers that are not as good, and which are therefore rated less highly and drunk less. With the first rating system, this brewery will be judged as very good, but is it really so, knowing that only one of its beers can be considered good? We believe that a brewery can also be assessed on the average quality of its beers without taking into account whether or not they are popular. This classification is possible thanks to the second system. 

From now on, a brewery's average rating will not be obtained by weighting the importance of its beers by the number of reviews they have received. This ranking therefore reflects the quality of the brewery's range of beers. However, this ranking is very sensitive to beers with fewer reviews, as we don't want a beer with just one review to have a strong influence on the brewery's average, we filtered the beers to keep only those with more than 5 reviews. Similar to the first system, we have produced an overall ranking. Here are the results of this general ranking for the two rating systems. We can see that the ranking has changed significantly (describe the changes)

Plot compare ranking (Du coup non je pense)

Here is the evolution of the top 10 with this system over the years.


Plot evolution quality ranking  (pas sur non plus)


We have our champions, _,_,_ corresponds to our 3 best breweries for the first rating system. We would now like to look at the evolution of the scores obtained by these three breweries over time.

Plot evolution (pas prêt ce plot non ?)

Commentary on evolution 
# How to take into account the sentiment in the textual reviews ?

## Is there a link for reviews' subjectivity with their polarity and their numerical ratings?
We aim to examine the correlation between numerical ratings and subjectivity, as well as between polarity and subjectivity. Our hypothesis is rooted in the intuition that extreme subjectivity tends to yield extreme reviews or ratings. To refine our ranking system effectively, it's essential to assign more weight to objective opinions, ensuring a more equitable and balanced system.

<iframe src="assets/img/Subjectivity_for_extreme_ratings.png" width="750px" height="420px" frameborder="0">Your browser does not support iframes.</iframe>

<iframe src="assets/img/Subjectivity_for_extreme_polarities.png" width="750px" height="420px" frameborder="0">Your browser does not support iframes.</iframe>

The above plots show the box plots for the subjectivity of all the reviews (in blue), against the distribution of subjectivity for reviews with extreme polarities/ratings (for positive reviews (in green) the distribution of subjectivity for reviews with a polarity/rating above the computed maximum and for negative reviews (in red) below the computed min).

The extent of the overlap of the boxplots gives a first glimpse of the degree of similarity between the distributions. To check if the difference is statistically significant, as the distribution is not normally distributed a non-parametric test such as the Mann-Whitney U test is more suited.

## Subjectivity for extreme ratings

## Subjectivity for extreme polarities


Before incorporating textual reviews for different beers into the ranking system, it's crucial to check if the sentiment polarity from these reviews correlates with numerical ratings. By understanding this relationship, we aim to enhance our ranking mechanism. To delve deeper into this association, we aligned the two features and conducted a Pearson's correlation analysis.

| Features           | Initial rating (standardized) |
| Polarity (standardized) |0.35|

Based on our results, the correlation between polarity and numerical ratings appears to be relatively positive but weak. This suggests that without considering textual reviews, we overlook significant information. We believe that both textual reviews, with the sentiment analysis, and numerical ratings are crucial for defining the most accurate ranking. Consequently, we have developed a formulation where equal importance is attributed to both these features.
Our formulation is: New Rating= (Standardized Rating + 0.94 x Standardized Polarity Score )(1- Subjectivity Score).


| Features           | Initial rating (standardized) | Polarity (standardized) |
| Final rating (standardized) |0.79| 0.79 |

We observe that now the new rating system as much linked to the initial numerical ratings as polarity score. The subjectivity weights the importance of the review, then extreme users have less weighted reviews. Indeed, as we have depicted before there are more subjective in their reviews thus they make the initital ranking less fair.

# Which are the best breweries in the world ?
According to our ranking system, the best breweries in the world elected by the people are not anymore the same. Sentiments change the ranking and new consumers could trust the objectivity of this innovative one. The real best breweries will not be disadvantaged anymore by extreme subjectivity.

<iframe src="assets/plot/ranking_breweries_Top3.html" width="900px" height="620px" frameborder="0">Your browser does not support iframes.</iframe>

So the best breweries around the world are the ones depicted in the podium. Drink their beers, you will not be disappointed if you are a beer lover!

<iframe src="assets/plot/top10_weight_new.html" width="900px" height="620px" frameborder="0">Your browser does not support iframes.</iframe>

If you want to see the evolution of top 10 across the years, comparable only within years, you can take a look here. Maybe it can help you to find a millesime child's birth year.


# Conclusion

This innovative ranking system is more accurate than a ranking system only based on numerical ratings. It could create a path to a great improvements in rankings in many domains.
This can be improved by a better sentiment analysis model but this is already a good way to feel the other people's sentiments.
Now, we invite you to try beers and provide feedback to create a ranking that truly understands people's preferences.
If you are travelling and want to try a new good beer in the country we have crafted you the backpacker's guide to beer!!!


# Summary: Wanna go out tonight ? Check what to order 🌍
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

