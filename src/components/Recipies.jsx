import React from 'react';
import styles from './recipies.module.css';
import { FaStar } from 'react-icons/fa';

const Recipes = ({recipes,filteredList,search}) => {


  return (
    <div className={styles.recipes}>    
      {(search === '' ? recipes : filteredList).map((recipe) => (
        <div className={styles.recipeItem} key={recipe.name}>
          <img src={recipe.imgUrl} className={styles.recipeItemImage} alt={recipe.name} />
        <div className={styles.recipeContent}>
        <h3 className={styles.recipeItemTitle}>{recipe.name}</h3>
          <div className={styles.recipeItemFooter}>
            <div className={styles.recipeItemRating}>
              <FaStar />
              <span><strong>{recipe.rating}</strong></span>
              <span>({recipe.ratingsNumber})</span>
            </div>
            <p className={styles.recipeItemAuthor}>by {recipe.author.toUpperCase()}</p>
          </div>
        </div>
        </div>
      ))}
    </div>
  );
};

export default Recipes;
