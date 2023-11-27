Textual quality: Excellent Code quality: Excellent Proposal quality: Great 

Your project mentor throughout the semester is Tim Davidson: tim.davidson@epfl.ch . For all project-related discussions, including your P3 deliverables, you are encouraged to be in touch with your mentor. Feedback: # Feedback: It is clear the team spent a lot of time working with the data and looking into sentiment analysis. 

The code looks great and the textual descriptions are fine. Unfortunately, the project proposal and plan are lacking. We strongly recommend spending time on better motivating your project goals and sharpening your research questions.

## Research question / Abstract
The research questions need some work. Questions two and three are overly broad and imprecise. Given that the core of the proposal is around using sentiment analysis to improve scoring, it is odd that no questions are asked about perceived deficiencies in the current rating systems. While we like the project setup, e.g., "can we make 'fairer' ratings by using textual sentiment analysis?", the research questions are not well motivated. Specifically, the team fails to highligh exactly what they belief is wrong with the current grading system. 

## Data exploration and familiarity
The team starts off by taking 'samples' of the datasets to perform all their analyses on. Although this is a clever way validate a proof of concept from a methods and coding perspective, it is not clear the team has a strategy to deal with the entire dataset. The team went through great lengths to create various processing functions to visualize and analyze the data samples.

## Methods
Using existing libraries for sentiment analyses is clever. However, the current approach of 'throwing away' all non-english data, seems ill-advised and not well motivated. Much work has gone into the sentiment analysis question. Unfortunately, the vagueness of the second research question shows in the methods section. While some nice plots have been created, e.g., the correlations between ratings and numerical features stands out, this mainly shows that there are multiple factors that can influence a rating. It does not however show any plan for controlling such factors in relation to making ratings 'fairer'. Additionally, the reserach question specifically mentions 'politics and economics' as potential factors. These are not mentioned anywhere after. This pattern is even more visible for the last research question. Outside of listing some brewery specific features such as 'number of beers' (which, is done on a sample), the team does not offer any plan/approach toward defining what 'best' brewery might mean for them. 

## Initial analysis
We would like to commend the team in performing a large amount of initial analyses. Many of the presented plots are visually pleasing. Unfortunately, we observe serious flaws in aligning the analyses to the feasiblity of the reserach questions. Specifically, for a proejct based on making 'ratings fairer' through sentiment analysis, key steps were missed. For example, (i) how many of the ratings do not have a review? (ii) how many of the ratings are in english? Outside of throwing away all non-english data without a clear motivation, the pre-processing steps look great. We are rather confused however by the before/after cleaning statistics. Specifically, BA goes from 290 average words before cleaning, to 369 words after cleaning? It would further have been good to at least look at other statistical metrics of interest in addition to the mean, e.g., the median, variance, and skew, of the amount of words used in reviews.

## Code quality: excellent 

## Textual Description: excellent