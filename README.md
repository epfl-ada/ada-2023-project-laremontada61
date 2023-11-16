# ada-2023-project-laremontada61
ada-2023-project-laremontada61 created by GitHub Classroom

# Research questions
- How to make ranking system more fair with sentiment analysis ?
- Which external factors influence the most the ranking system (political data, temporal data, economic data) ?
- From all that, what is the best brewery in the world ?



#Handling Large Datasets

We are processing data extracted from two similar beer rating websites: BeerAdvocate and RateBeer. The primary data structure is outlined in "ratings.txt," which includes user reviews providing information on beer (names, IDs, style, alcohol by volume), breweries, and users (date of review, user details, ratings, and comments on various aspects). Other supporting files include "beers.csv" (aggregated ratings for each beer), "Breweries" (information on breweries and their locations), and "Users" (user details on the number of ratings, reviews, and country of origin).

The most crucial file is "ratings.txt," as others are derived from its content. Due to its significant size (4.3 GB for BeerAdvocate and 3.95 GB for RateBeer), loading directly with a standard pipeline is impractical due to laptop memory limitations. To address this, we split the .txt files into N subfiles and load the data iteratively using a function.

The function allows control over the fraction of initial data loaded via the parameter N, which determines the number of subfiles to load. It also accommodates inherent differences between the two websites, such as additional review columns for BeerAdvocate.

Once loaded into DataFrames, we utilize the sample_data function to randomly sample a fraction of the data, enabling efficient handling of the substantial dataset.

# EDA
- EDA on USA only
- EDA on numerical ratings
- EDA on textual reviews

For each EDA, plot ditributions/print descriptive statistics:
- in general
- per brewery
- per style of beer
