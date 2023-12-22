# 🍻 Crafting the _NLP-Augmented_ beer rating system

### 💻 Requirements & General informations
Although all of our notebooks are pre-runed, we would recommend you to create a `virtual environment` to load all the necessary libraries. 
To setup this `virtual environment` please head to [SETUP.md](https://github.com/epfl-ada/ada-2023-project-laremontada61/main/SETUP.md). 

The Dataset that will be used in the frame of this project is too large to be stored on GitHub. Therefore we created a [Google Drive](https://drive.google.com/file/d/1wIIfhQDdF5lH42bKQ3pLoStu_Wem2rGE/view?usp=drive_link) where the original Dataset is present as well as our pre-processed `.zip` files.

### 📖 Abstract
In the wide world of hops, cereals and aperitifs with friends, LaRemontADA is on a quest towards making a brewery ranking system combining the precision of figures and the richness of prose.

Using the [BeerReviews](https://drive.google.com/drive/folders/1Wz6D2FM25ydFw_-41I9uTwG9uNsN4TCF?usp=sharing) dataset that contains a variety of beer ratings from 2 different websites together with sentiment analysis tools, our goal is to enhance the already existing rating system to be able to determine the world's best beer. This determination is based on a detailed analysis of the existing ratings throughout the world and across time.

Everyting is done in the aim of creating the fairest ranking system with the different users' opinion to be more robust than just a purely numerical system.

### 🌐 Datastory 
Our datastory can be found [here](https://epfl-ada.github.io/ada-2023-project-laremontada61/).

### ❓ Research questions
During this work, we will give an answer to those questions:

- How existing rating metrics can be used to rank the breweries over the world and over the years ?
- Is it possible to create to enrich such ranking systems sentiment analysis ?
- From which brewery should I buy a drink tonight ?

### 🎯 Methods
In order to answer the research question formulated above and get to our goal, you can read hereafter the proposed pipeline:

#### 📊 Numerical ranking system - How to use the existong metrics ?
The BeerReviews dataset consists of a large number of reviews. Each review formulated with a wide range of metrics that can be either numerical or textual. The first step focuses on the numerical features. With these various scalar ratings our goal is to create a ranking of the best breweries. Two different numerical brewery ranking systems were developped.
The first on is a weighted average of the different rating metrics values.  To calculate this ranking only a portion of the beers and breweries that appear in the dataset are kept. This portion is statistically determined with a _Central Limit Theorem (CLT)_: the breweries that have less than `n=30` reviews are filtered since they cannot be considered statistically significant with respect to the _CTL_. By doing so, we are able to give more importance to the breweries that are rated more often, eventually leading to more significant. This ranking methods gave a first sample of results and is called the _Weighted Ranking Method_.

The second ranking method called _Quality Ranking Method (QRM)_ is obviously focused towards quality. QRM aims to address a potential limitation in the representation of brewery quality. In the first ranking, a brewery with a single highly-rated and widely-consumed beer could obtain a favorable rating, despite the possibility that its other beers may be less well-received. This method seeks to overcome this limitation by focusing solely on the quality of beers, irrespective of their popularity or quantity of reviews. In this approach, a brewery's ranking is calculated by averaging the ratings of its beers, with no consideration given to their frequency of review. However, to enhance statistical significance, beers with fewer than 4 reviews are excluded from the calculation. This ranking method provides a more nuanced assessment of brewery quality, placing emphasis on the overall quality of different beers within a brewery's portfolio rather than the sheer volume of reviews.

#### 📝 Textual ranking system - How to use the textual reviews ?
The initial rankings exclusively rely on quantitative numerical ratings, but recognizing the importance of textual reviews, we've embarked on a refinement journey by integrating sentiment analysis. In assessing comments, we assign a polarity score on a scale from -1 to 1, capturing the spectrum from very negative to very positive. It's pivotal to note the inherent subjectivity in individual ratings, expressed on a scale from 0 (objectivity) to 1 (high subjectivity).

To foster fairness in our ranking system, we confront the challenge of subjective bias by introducing a weighting coefficient (1-subjectivity), ensuring that highly subjective opinions exert less influence on the ultimate ranking.

Furthermore, we optimize our review process by standardizing polarity scores across all reviews, disregarding potential variations introduced by different websites or numerical ratings. This standardization, exemplified by individuals with similar sentiments receiving identical polarity ratings, brings coherence and consistency to our overarching ranking system.

Summarily expressed in the formula:

$$ rating_{final}=(rating_{initial}+polarity)×(1−subjectivity) $$

The latest enhancement to this refined algorithm introduces a compensation factor 
k
k, harmonizing the correlation of final scores along the dimensions of standardized ratings and standardized polarity ratings. This factor is determined through the minimization of an objective function defined as the absolute difference in the Pearson correlation along these dimensions. The minimization process is facilitated by the scipy.optimize.minimize function.

Thus, the ultimate formula becomes:

$$ rating_{final}=(rating_{initial}+k×polarity)×(1−subjectivity) $$

#### 📈 Visualization - So what ? What should I drink tonight ?
The final step of our pipeline is to visualize the results of our ranking system. We've created a [datastory](https://epfl-ada.github.io/ada-2023-project-laremontada61/) that allows you to see all the results of the pipeline. If you are not interested in justifications, statistics and bar plots head straight to the bottom of the page to sea beautilful world maps with a world ranking. These maps are made from custon GeoJson files, and with the use of [globe.io](globe.io)


### ⏳ Timeline
**Done for P2 (17/11/23):**
- Beginning to Week 9:
  - Pre-processing: Subdivided original .tar.gz files into smaller one to be able to load them into dataframes. A sampling of the resulting df was necessary due to their size. Size was reduced by randomly selecting element from them.
  - Exploratory Data Analysis `milestone_P2.ipynb`:
    - Initial Data Exploration: Getting hands on the data, geometrical features extraction (size, number of features, missing data...)
    - Statistical analysis: Study of the distribution of the numerical values, correlations between features.
    - Textual reviews distribution: Analysis of the words' distribution in the both websites with count of the most used words and expressions before and after a processing on all the sentences.
    - Sentiment Analysis: Analysis of the sentiment polarity in the different review texts and the comments' subjectivity to have a better understanding of the influence of some ratings.

**Done for P3 (22/12/23):** 
- Week 10:
  - Milestone: Validation of the numerical ranking methods. Beginning of the research for the NLP of the textual reviews
- Week 11:
  - Milestone: Processing pipeline of the textual reviews complete. Validation of the ranking augmentation process
- Week 12:
  - Creation of the website for datastories, brainstorm and validation of the visualization methods.
- Week 13:
  - Merging of the processing pipeline and the visualization methods and validation on a small portion of the dataset.
- Week 14:
  - Final running of the pipeline, creation of the datastory, minor bug corrections. Documentation of the whole process and structuration of the GitHub repository.

#### 🤝 Team organization
| Member        | Task          |
| ------------- | ------------- | 
| Maxime      | Data-scientist, NLP |
| Julien      | Data-scientist, NLP |
| Charles     | Data-analyst, Statistics-Visualizations|
| Tanguy D.   | Back-end web developper, Visualizations|
| Tanguy C.   | Data-analyst, Pre-processing |



