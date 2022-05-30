import React from 'react';
import { Ingredient } from '../../types/CookbookTypes';
import styles from './CategoryItem.module.scss';

interface CategoryItemProps {
  name: string;
  ingredients: Ingredient[];
  id: number;
}

export const CategoryItem = (props: CategoryItemProps) => {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.itemContainerHeader}>
        <h1 className={styles.categoryName}>{props.name}</h1>
        <div>
          <button className={styles.viewDetailsButton}>i</button>
          <button className={styles.editButton}>&#9998;</button>
          <button className={styles.removeButton}>-</button>
        </div>
      </div>
      <div className={styles.itemContainerBody}>
        {props.ingredients.map((ingredient: Ingredient) => (
          <div key={ingredient.id} className={styles.itemContainerBodyElement}>
            <p className={styles.ingredientName}> {ingredient.name} </p>
            <div className={styles.ingredientButtonsContainer}>
              <button className={styles.viewDetailsButton}>i</button>
              <button className={styles.editButton}>&#9998;</button>
              <button className={styles.removeButton}>-</button>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.itemContainerFooter}>
        <button className={styles.addIngredientButton}>+</button>
      </div>
    </div>
  );
};
