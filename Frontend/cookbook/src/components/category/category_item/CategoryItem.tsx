import React from 'react';
import { Category, Ingredient } from 'types/CookbookTypes';
import styles from './CategoryItem.module.scss';
import { DeleteItemModal } from 'components/modals/delete_item_modal/DeleteItemModal';
import { ItemInfoModal } from 'components/modals/item_info_modal/ItemInfoModal';
import { EditOrCreateItemModal } from 'components/modals/edit_or_create_item_modal/EditOrCreateItemModal';
import { IngredientForm } from 'components/category/forms/IngredientForm';
import { ShowInfoButton } from 'components/buttons/show_info_button/ShowInfoButton';
import { EditButton } from 'components/buttons/edit_button/EditButton';
import { DeleteButton } from 'components/buttons/delete_button/DeleteButton';
import { IngredientItem } from 'components/category/ingredient_item/IngredientItem';
import { CategoryForm } from '../forms/CategoryForm';

export const CategoryItem: React.FC<{
  category: Category;
  renderCategories: () => void;
}> = ({ category, renderCategories }) => {
  const addIngredientButton = <button className={styles.addIngredientButton}>+</button>;
  return (
    <div className={styles.itemContainer}>
      <div className={styles.itemContainerHeader}>
        <h1 className={styles.categoryName}>{category.name}</h1>
        <div>
          <ItemInfoModal
            trigger={ShowInfoButton}
            form={<CategoryForm isDisabled={true} category={category} />}
          />
          <EditOrCreateItemModal
            trigger={EditButton}
            form={<CategoryForm isDisabled={false} category={category} />}
            onSave={renderCategories}
          />
          <DeleteItemModal
            text={`Delete ${category.name} category and all ingredients which belong to it?`}
            trigger={DeleteButton}
            onDelete={renderCategories}
          />
        </div>
      </div>
      <div className={styles.itemContainerBody}>
        {category.ingredients ? (
          category.ingredients.map((ingredient: Ingredient) => {
            const ingredientWithCategory: Ingredient = {
              id: ingredient.id,
              name: ingredient.name,
              notes: ingredient.notes,
              category: { id: category.id, name: category.name }
            };
            return (
              <IngredientItem
                key={ingredient.id}
                ingredient={ingredientWithCategory}
                renderCategories={renderCategories}
              />
            );
          })
        ) : (
          <></>
        )}
      </div>
      <div className={styles.itemContainerFooter}>
        <EditOrCreateItemModal
          trigger={addIngredientButton}
          form={
            <IngredientForm
              ingredient={{ category: { id: category.id, name: category.name } }}
              isDisabled={false}
              isCategoryDisabled={true}
            />
          }
          onSave={renderCategories}
        />
      </div>
    </div>
  );
};
