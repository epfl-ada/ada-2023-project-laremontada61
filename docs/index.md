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

Understanding the fairness of ratings is crucial to ensure equity among products. Our aim is to create a fair beer rating system that can be applied to different rating systems. We'll explore how the subjective nature of reviews affects both the sentiment (polarity) and numerical ratings of beers, revealing genuine differences in diverse reviews. This investigation will use thorough statistical tests. The result will be a new ranking system that combines written reviews and numerical ratings, offering a more complete and fair evaluation approach.
<iframe src="assets/plot/means.html" width="900px" height="530px" frameborder="0">Your browser does not support iframes.</iframe>

# An ocean of breweries 

In our case, we're going to rank a very wide range of breweries, as more 202 countries are taken into account in our ranking. From the small Filipino brewery Cebruery to the behemoth Stone Brewing, our aim is to tell you which breweries stand out from the crowd. Let's take a closer look at where our breweries come from. The map below shows the number of breweries in each country.  

<iframe src="assets/plot/brewery_world_map.html" width="900px" height="620px" frameborder="0">Your browser does not support iframes.</iframe>

To get a clearer picture, let's look at the number of breweries per country in the form of a histogram.

<iframe src="assets/plot/reviews_world_histogram.html" width="900px" height="800px" frameborder="0">Your browser does not support iframes.</iframe>

We can easily see that geographical areas such as North America and Europe are strongly represented, as the 10 countries with the most repertiorised breweries are in these two areas. The great champion is unequivocally the United States, since more than 30% of the breweries in this ranking are American. But let's not bury the rest of the world too quickly: Brazil has more than 400 breweries ready to take on the world, and who knows, will "Les brasseries du Tchad" come out on top?

Now that we know where our breweries come from, we'd like to take their size into account. Not all breweries enjoy the same popularity. The visual below shows the number of reviews per brewery and per beer.

<iframe src="assets/plot/reviews_beer_histogram.html" width="900px" height="620px" frameborder="0">Your browser does not support iframes.</iframe>

<iframe src="assets/plot/reviews_breweries_histogram.html" width="900px" height="620px" frameborder="0">Your browser does not support iframes.</iframe>

What magnificent casts ! As we thought, a large proportion of breweries only receive a small number of reviews, while some reach more than 50,000 reviews. We can't let this go unpunished. To ensure that the rankings reflect the overall quality and consistency of the breweries, the elimination of those with fewer than 30 reviews means that we can focus on establishments with a proven track record and a larger customer base. All breweries with less than 30 reviews will therefore be excluded from our ranking. It is with great sorrow that we announce the end of the road for the Chadian brewery, which was only able to garner two reviews. It's sad but fair, so let's get on with the ranking!


# Let's rank them 

We will first rank them based the numerical grade their beers obtained, but how to do it?

## Where do they come from?

Our ranking is based a weighted system, when we calculate the average score for a brewery from the scores obtained by its beers, we weight the importance of each beer by the number of reviews it has received. This rating system isn’t sensitive to beers with few reviews, which is why we have kept all the brewery's beers each time. 

Let's not prolong the suspense any longer, here is the ranking of the 10 best breweries of all time:

<iframe src="assets/plot/top10_alltime_weighted.html" width="900px" height="620px" frameborder="0">Your browser does not support iframes.</iframe>

Congratulations to the Ecuadorian Doggerlander Brewing Company on its victory followed by the excellent Westvleteren Abdij St.Sixtus and finally the Brasserie Rochefort. 


This ranking is based on more than 15 years of opinions, but as you can imagine this top 10 has changed a lot over the years. That's why we're offering you a year-by-year ranking. 

<iframe src="assets/plot/top10_weight.html" width="900px" height="420px" frameborder="0">Your browser does not support iframes.</iframe>

So now we know that the best brewery in the year of Zinédine Zidane's headbutt in the World Cup final was Brauerei Zehendner Gmdh - what a relief! Are we done now ?

# How to take into account the sentiment in the textual reviews ?

## Is there a link for reviews' subjectivity with their polarity and their numerical ratings?
We aim to examine the correlation between numerical ratings and subjectivity, as well as between polarity and subjectivity. Our hypothesis is rooted in the intuition that extreme subjectivity tends to yield extreme reviews or ratings. To refine our ranking system effectively, it's essential to assign more weight to objective opinions, ensuring a more equitable and balanced system.

<iframe src="assets/img/Subjectivity_for_extreme_polarities.png" width="750px" height="420px" frameborder="0">Your browser does not support iframes.</iframe>

<iframe src="assets/img/Subjectivity_for_extreme_ratings.png" width="750px" height="420px" frameborder="0">Your browser does not support iframes.</iframe>


The above plots show the box plots for the subjectivity of all the reviews (in blue), against the distribution of subjectivity for reviews with extreme polarities/ratings (for positive reviews (in green) the distribution of subjectivity for reviews with a polarity/rating above the computed maximum and for negative reviews (in red) below the computed min).

The extent of the overlap of the boxplots gives a first glimpse of the degree of similarity between the distributions. To check if the difference is statistically significant, as the distribution is not normally distributed a non-parametric test such as the Mann-Whitney U test is more suited.

#### Subjectivity for extreme polarities
Here all the boxplots overlap so nothing can be said over the significance of the difference between the distribution of ratings for all the reviews and the extremely negative reviews. Furthermore, since the boxplot for positive reviews is not displayed it means that the maximum computed is higher than the actual values, hence no outliers are present for the polarity.
When performing the Mann_Whitney U test, the p-value is equal to 0.0 so the difference might be significant. But the difference seems to be really small, so extreme negative polarities seems to have a subjectivity that might be acceptable.

#### Subjectivity for extreme ratings
On the other hand there seems to be more link between subjectivity and extreme polarities. While the negative distribution follows the same pattern as for the polarities (with p-value of 3.04e-235) with a potential small significantly smaller median, the extremly positive reviews show some interesting result.
In fact, with a p-value of 0 the distribution of subjectivity for positive reviews seems to be significantly different than all the reviews. So extremely positive reviews seems to be more subjective regarding the numerical rating, it seems that an enthousiastic reviewer would be more prone to overate a beer.
It is thus important to take into account those textual reviews in order to weigh down those outliers.

Before incorporating textual reviews for different beers into the ranking system, it's crucial to check if the sentiment polarity from these reviews correlates with numerical ratings. By understanding this relationship, we aim to enhance our ranking mechanism. To delve deeper into this association, we aligned the two features and conducted a Pearson's correlation analysis.

| Features           | Initial rating (standardized) |
| Polarity (standardized) |0.35|

Based on our results, the correlation between polarity and numerical ratings appears to be relatively positive but weak. This suggests that without considering textual reviews, we overlook significant information. We believe that both textual reviews, with the sentiment analysis, and numerical ratings are crucial for defining the most accurate ranking. Consequently, we have developed a formulation where equal importance is attributed to both these features.
<br>Our formulation is:<br>
*New Rating= (Standardized Rating + 0.94 x Standardized Polarity Score )(1- Subjectivity Score)*


| Features           | Initial rating (standardized) | Polarity (standardized) |
| Final rating (standardized) |0.79| 0.79 |

We observe that now the new rating system as much linked to the initial numerical ratings as polarity score. The subjectivity weights the importance of the review, then extreme users have less weighted reviews. Indeed, as we have depicted before there are more subjective in their reviews thus they make the initital ranking less fair.

# Which are the best breweries in the world ?
According to our ranking system, the best breweries in the world elected by the people are not anymore the same. Sentiments change the ranking and new consumers could trust the objectivity of this innovative one. The real best breweries will not be disadvantaged anymore by extreme subjectivity.

If you want to try the beers from the best breweries in the world follow the links:<br>
🏅[Doggerlander Brewing Company](https://www.ratebeer.com/brewers/doggerlander-brewing-company/18423/)<br>
🥈[Abdij St. Sixtus - Westvleteren](https://www.ratebeer.com/brewers/abdij-st-sixtus-westvleteren/623/)<br>
🥉[Neill & Ross](https://www.ratebeer.com/brewers/neill-ross/13189/)<br>

Drink their beers, you will not be disappointed if you are a beer lover!

<iframe src="assets/plot/top10_weight_new.html" width="900px" height="620px" frameborder="0">Your browser does not support iframes.</iframe>

\*Grades over the years should not be compared to each other since these values are calculated as the distance from the mean score of the year

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

