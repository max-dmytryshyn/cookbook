import React from 'react';
import { useQuery } from '@apollo/client';
import { Category } from '../../types/CookbookTypes';
import { CategoryItem } from './CategoryItem';
import { GET_ALL_CATEGORIES_QUERY, getAllCategoriesQueryDataType } from './gql/Queries';
import styles from './CategoriesPage.module.scss';
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';

export function CategoriesPage() {
  const { loading, error, data } = useQuery<getAllCategoriesQueryDataType | undefined>(
    GET_ALL_CATEGORIES_QUERY
  );

  let body;
  if (loading) body = <p>Loading...</p>;
  else if (error) body = <p>Error</p>;
  else
    body = (
      <div className={styles.categoriesContainer}>
        {data &&
          data.allCategories.map((category: Category) => (
            <CategoryItem
              id={category.id as number}
              name={category.name as string}
              ingredients={category.ingredients as []}
              key={category.id}
            />
          ))}
        <button className={styles.addCategoryButton}>+</button>
      </div>
    );
  return (
    <div>
      <Header />
      {body}
      <Footer />
    </div>
  );
}
