# Recommendation Systems

## Common approaches
Recommendation systems are crucial in various online platforms, designed to suggest products, services, or information tailored to user preferences. Here's an overview of common approaches:

### 1. Content-Based Filtering
- Recommends items similar to those a user has liked in the past, based on item features like genre, author, or specifications.

### 2. Collaborative Filtering
- Makes predictions about user interests by collecting preferences from many users. Subtypes include:
  - **User-User Collaborative Filtering**: Focuses on finding similar users and recommending items they liked.
  - **Item-Item Collaborative Filtering**: Identifies items similar to those liked by the user in the past.

### 3. Hybrid Approaches
- Combines collaborative and content-based methods to improve recommendation quality.

## Matrix factorization
Matrix factorization plays a key role in recommendation systems, particularly under the umbrella of collaborative filtering. It's a technique used to predict unknown entries in a user-item association matrix, such as a user's rating for an item in a movie recommendation system. Here's how it fits into the context:

In collaborative filtering, especially in the user-item rating scenarios, you often deal with large matrices where users are on one dimension and items (like movies, products, etc.) are on another. These matrices are typically sparse, with many unknown values representing the ratings a user has not yet given.

# Principle of Matrix factorization:
The fundamental idea behind matrix factorization in recommendation systems is to represent users and items as vectors in a lower-dimensional latent space. The assumption is that both users and items can be described by a smaller set of latent factors. For example, in a movie recommendation system, these factors might represent genres like action, romance, or sci-fi.

### Process:

The user-item matrix is factorized into two lower-dimensional matrices: one representing the latent factors of users and the other representing those of items.
The unknown ratings can then be predicted by multiplying these two matrices, approximating the original user-item matrix.

### Popular algoritms:
There are several matrix factorization algorithms, including Singular Value Decomposition (SVD), Non-negative Matrix Factorization (NMF), and Alternating Least Squares (ALS). These algorithms differ in their approach to matrix factorization, with some focusing on minimizing the error between the predicted and actual ratings, while others incorporate regularization to prevent overfitting or bias.



## Evaluating Recommender systems

- Accuray metrics: MAE and RMSE
- Metrics that focus on users:
### 1. Hit Rate
- **Definition**: Hit rate is calculated as hits/users. It's used to evaluate top end recommendations for all users in a test set. A hit occurs if one of the top end recommendations matches an item the user actually rated.
- **How to Measure**: 
  - Use leave-one-out cross-validation. 
  - Compute top end recommendations for each user in the training data, removing one of those items from the user's training data. 
  - Test the recommender system's ability to include the left-out item in the top end recommendations during the testing phase.

### 2. Average Reciprocal Hit Rate (ARHR)
- **Definition**: A variation of hit rate, ARHR accounts for the rank of hits in the top end list. It gives more credit for hits appearing higher in the list.
- **Calculation**: Sum up the reciprocal rank of each hit (e.g., a hit in slot 3 counts as 1/3, while a hit in slot 1 counts as 1).

### 3. Cumulative Hit Rank
- **Definition**: This metric disregards hits if the predicted ratings are below a certain threshold, reflecting that recommendations not likely to be enjoyed by the user should not contribute positively.
- **Application**: Useful when it's important to not just recommend items, but to ensure they are highly rated or preferred by the user.

### 4. Rating Hit Rate (rHR)
- **Context**: Focuses on the accuracy of rating predictions, not just the presence of an item in the recommendation list.

Each of these metrics offers a unique perspective on the effectiveness of recommendation systems, focusing on user satisfaction and prediction accuracy.

### Additional Metrics for Recommendation Systems

#### 1. Coverage
- **Definition**: Percentage of <user, item> pairs that can be predicted. 
- **Importance**: Balancing coverage and accuracy is crucial. Higher quality thresholds improve accuracy but might reduce coverage. Coverage also affects how quickly new items appear in recommendations.

#### 2. Diversity
- **Definition**: (1 - S), where S is the average similarity between recommendation pairs.
- **Context**: High diversity isn't always desirable. It could mean random or poor-quality recommendations. It's important to balance diversity with quality metrics.

#### 3. Novelty
- **Definition**: Mean popularity rank of recommended items.
- **Significance**: Novelty measures the popularity of recommended items. Balancing familiar items with new discoveries is key. Familiar items build user trust, while new items offer serendipitous discovery.

#### 4. Churn
- **Explanation**: Measures how often recommendations change. Relevant for understanding user engagement and system dynamism.

#### 5. Responsiveness
- **Explanation**: Assesses how quickly new user behavior influences recommendations. It's important for the system's ability to adapt to changing user preferences.

#### Conclusion
- **Key Takeaway**: Good accuracy doesn't always equate to good recommendations. It's essential to consider various metrics based on what's important for your specific application and user experience.