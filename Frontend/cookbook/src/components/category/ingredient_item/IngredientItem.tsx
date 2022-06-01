import React from 'react';
import styles from './Ingredient.module.scss';
import { ItemInfoModal } from 'components/modals/item_info_modal/ItemInfoModal';
import { IngredientForm } from 'components/category/forms/IngredientForm';
import { EditOrCreateItemModal } from 'components/modals/edit_or_create_item_modal/EditOrCreateItemModal';
import { DeleteItemModal } from 'components/modals/delete_item_modal/DeleteItemModal';
import { Ingredient } from 'types/CookbookTypes';
import { ShowInfoButton } from 'components/buttons/show_info_button/ShowInfoButton';
import { EditButton } from 'components/buttons/edit_button/EditButton';
import { DeleteButton } from 'components/buttons/delete_button/DeleteButton';

export const IngredientItem: React.FC<{ ingredient: Ingredient; renderCategories: () => void }> = ({
  ingredient,
  renderCategories
}) => {
  return (
    <div key={ingredient.id} className={styles.ingredientContainer}>
      <p className={styles.ingredientName}> {ingredient.name} </p>
      <div className={styles.ingredientButtonsContainer}>
        <ItemInfoModal
          trigger={ShowInfoButton}
          form={
            <IngredientForm isDisabled={true} isCategoryDisabled={true} ingredient={ingredient} />
          }
        />
        <EditOrCreateItemModal
          trigger={EditButton}
          form={
            <IngredientForm isDisabled={false} isCategoryDisabled={true} ingredient={ingredient} />
          }
          onSave={renderCategories}
        />
        <DeleteItemModal
          text={`Delete ${ingredient.name} from ${name}'s list of ingredients?`}
          trigger={DeleteButton}
          onDelete={renderCategories}
        />
      </div>
    </div>
  );
};
