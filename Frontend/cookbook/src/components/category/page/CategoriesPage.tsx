import React from 'react';
import { useQuery } from '@apollo/client';
import { Category } from 'types/CookbookTypes';
import { CategoryItem } from 'components/category/category_item/CategoryItem';
import {
  GET_ALL_CATEGORIES_QUERY,
  getAllCategoriesQueryDataType
} from 'components/category/gql/Queries';
import styles from './CategoriesPage.module.scss';
import { EditOrCreateItemModal } from 'components/modals/edit_or_create_item_modal/EditOrCreateItemModal';
import { CategoryForm } from 'components/category/forms/CategoryForm';

export const CategoriesPage: React.FC = () => {
  const { loading, error, data } = useQuery<getAllCategoriesQueryDataType | undefined>(
    GET_ALL_CATEGORIES_QUERY
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  const addCategoryButton = <button className={styles.addCategoryButton}>+</button>;
  return (
    <div className={styles.categoriesContainer}>
      {data &&
        data.allCategories.map((category: Category) => (
          <CategoryItem category={category} key={category.id} />
        ))}
      <EditOrCreateItemModal
        trigger={addCategoryButton}
        form={<CategoryForm isDisabled={false} />}
      />
    </div>
  );
};
