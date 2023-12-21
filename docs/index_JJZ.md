---
layout: page
title: Brewing a fair beer rating system 🍻
---

# Context
In today's era, we have the ability to rate a wide range of things, such as restaurants, movies, or beers. Numerous websites enable users to share their opinions through numerical ratings and textual reviews. However, as consumers, relying solely on numerical ratings can be challenging to get a comprehensive understanding of a product. Reading through all textual reviews for detailed information is time-consuming, and subjective opinions further complicate the evaluation process. 
The problem intensifies when certain products are either unfairly favored or disadvantaged due to the subjectivity of reviewers. This undermines the credibility of the ranking system, as products not reviewed by these subjective individuals might be unfairly influenced in either a positive or negative manner. 
In summary, the current approach of relying solely on numerical ratings and extensive textual reviews poses challenges for consumers in obtaining a clear and unbiased picture of a product.

Understanding the fairness of ratings is crucial to ensure equity among products. Our aim is to create a fair beer rating system that can be applied to different rating systems. We'll explore how the subjective nature of reviews affects both the sentiment (polarity) and numerical ratings of beers, revealing genuine differences in diverse reviews. This investigation will use thorough statistical tests. The result will be a new ranking system that combines written reviews and numerical ratings, offering a more complete and fair evaluation approach.

<iframe src="assets/plot/means.html" width="750px" height="530px" frameborder="0" position="relative">Means</iframe>

# Is there a link for reviews' subjectivity with their polarity and their numerical ratings?
We aim to examine the correlation between extreme numerical ratings and subjectivity, as well as between extreme polarity and subjectivity. Our hypothesis is rooted in the intuition that extreme subjectivity tends to yield extreme reviews or ratings. To refine our ranking system effectively, it's essential to assign more weight to objective opinions, ensuring a more equitable and balanced system.

<iframe src="assets/plot/Subjectivity_for_extreme_ratings.html" width="750px" height="530px" frameborder="0" position="relative">Means</iframe> 

<iframe src="assets/plot/Subjectivity_for_extreme_polarities.html" width="750px" height="530px" frameborder="0" position="relative">Means</iframe>

The above plots show the box plots for the subjectivity of all the reviews (in blue), against the distribution of subjectivity for reviews with extreme polarities/ratings (for positive reviews (in green) the distribution of subjectivity for reviews with a polarity/rating above the computed maximum and for negative reviews (in red) below the computed min).

The extent of the overlap of the boxplots gives a first glimpse of the degree of similarity between the distributions. To check if the difference is statistically significant, as the distribution is not normally distributed a non-parametric test such as the Mann-Whitney U test is more suited.

## Subjectivity for extreme ratings

## Subjectivity for extreme polarities


Before incorporating textual reviews for different beers into the ranking system, it's crucial to check if the sentiment polarity from these reviews correlates with numerical ratings. By understanding this relationship, we aim to enhance our ranking mechanism. To delve deeper into this association, we aligned the two features and conducted a thorough correlation analysis.

CALCUL PEARSON CORRELATION

Based on our results, the correlation between polarity and numerical ratings appears to be relatively weak. This suggests that without considering textual reviews, we overlook significant information. We believe that both textual reviews and numerical ratings are crucial for defining the most accurate ranking. Consequently, we plan to devise a formulation where equal importance is attributed to both these features.



# The real best breweries in the world, based on an innovative NLP-augmented ranking system
## Principle of the NLP-augmented ranking system

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

