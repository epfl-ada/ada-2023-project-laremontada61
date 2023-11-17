# 🍻 Crafting a striking beer rating system to find the world's best brewery

### 💻 Requirements & General informations
Although all of our notebooks are pre-runed, we would recommend you to create a `virtual environment` to load all the necessary libraries.

The Dataset that will be used in the frame of this project is too large to be stored on GitHub. Therefore we created a [Google Drive](https://drive.google.com/file/d/1wIIfhQDdF5lH42bKQ3pLoStu_Wem2rGE/view?usp=drive_link) where the original Dataset is present as well as our pre-processed `.zip` files.

### 📖 Abstract
In the wide world of hops, cereals and aperitifs with friends, LaRemontADA is on a quest towards making a beer rating system combining the precision of figures and the richness of prose.

Using the [BeerReviews](https://drive.google.com/drive/folders/1Wz6D2FM25ydFw_-41I9uTwG9uNsN4TCF?usp=sharing) dataset that contains a variety of beer ratings from 2 different websites together with sentiment analysis tools, our goal is to enhance the already existing rating system to be able to determine the world's best beer. This determination is based on a detailed analysis of the existing ratings throughout the world and across time.

### ❓ Research questions
During this work, we will give an answer to those questions:

- How to enrich the ranking systems with sentiment analysis ?
- Are there any external factors that may influence rating ? (such as politics, economics, time of the year...)
- Combining all of this, what is the best brewery in the world ?

### 🎯 Methods
In order to answer the research question and get to our goal, you can read hereafter the proposed pipeline:

Firstly, correct the ratings based on the reviews is our first goal, we will use the textual reviews from each user to establish a profile of the user's scoring style. The profile will be defined according to its subjectivity, its hardness or the polarity of its opinion. With this data gathered for each user, we would like to correct via linear regression the numerical scores by, for example, reducing the weight of scores judged to be subjective or readjusting excessively harsh scores.

Secondly using our newly developepd rating method, we would like to give a visual representation of the variability in the ranking of the best beers according to geographical area or season. In order to do this, we will use data aggregation methods along side with statistical studies on the ratings to extract significant variability.

This method is subdivided and integrated to a full timeline hereafter.

### ⏳ Timeline (Dynamic)
**Done for P2 (17/11/23):**
- Beginning to Week 9:
  - Pre-processing: Subdivided original .tar.gz files into smaller one to be able to load them into dataframes. A sampling of the resulting df was necessary due to their size. Size was reduced by randomly selecting element from them.
  - Exploratory Data Analysis `milestone_P2.ipynb`:
    - Initial Data Exploration: Getting hands on the data, geometrical features extraction (size, number of features, missing data...)
    - Statistical analysis: Study of the distribution of the numerical values, correlations between features.
    - Textual reviews distribution: Analysis of the words' distribution in the both websites with count of the most used words and expressions before and after a processing on all the sentences
    - Sentiment Analysis: Analysis of the sentiment polarity in the different review texts and the comments' subjectivity to have a better understanding of the influence of some ratings

**To be done for P3 (from 18/11/23 to 22/12/23):** 
- Week 10:
  - Milestone: identify extreme users with their high polarity comments and find a fair way to ponderate their ratings.
- Week 11:
  - Milestone: Check adjectives used to describe best beers of each season or each geographic areas to be able to propose other beers in function of the parameters with the same adjectives.
- Week 12:
  - To be determined
- Week 13:
  - To be determined
- Week 14:
  - Documentation: Full documentation of the pipeline & edition of the website.

#### 🤝 Team organization (To be re-specified after P2)
| Member        | Task          |
| ------------- | ------------- | 
| Maxime      | Sentiment analysis, visualizations |
| Julien      | Sentiment analysis, visualizations |
| Charles     | Statistical analysis, visualizations|
| Tanguy D.   | Statistical analysis, visualizations|
| Tanguy C.   | Data pre-processing, Data enriching |



