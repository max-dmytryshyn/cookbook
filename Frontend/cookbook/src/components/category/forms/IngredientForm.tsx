import React from 'react';
import { Form, Formik } from 'formik';
import { Category, Ingredient } from 'types/CookbookTypes';
import { TextFormField } from 'components/form_fileds/TextFormFiled';
import { TextAreaFormField } from 'components/form_fileds/TextAreaFormField';
import { SelectFormField } from 'components/form_fileds/SelectFormFIeld';
import { useQuery } from '@apollo/client';
import {
  GET_ALL_CATEGORIES_QUERY,
  getAllCategoriesQueryDataType
} from 'components/category/gql/Queries';

interface IngredientFormProps {
  ingredient?: Ingredient;
  isDisabled: boolean;
  isCategoryDisabled: boolean;
}

export const IngredientForm: React.FC<IngredientFormProps> = ({
  ingredient,
  isDisabled,
  isCategoryDisabled
}) => {
  let categoriesOptions: { value: string | number; name: string }[];
  if (!isDisabled && !isCategoryDisabled) {
    const { loading, error, data } = useQuery<getAllCategoriesQueryDataType | undefined>(
      GET_ALL_CATEGORIES_QUERY
    );

    if (loading) {
      categoriesOptions = [{ value: 'loading', name: 'Loading' }];
    } else if (error) {
      categoriesOptions = [{ value: 'error', name: 'Error' }];
    } else if (data) {
      categoriesOptions = data.allCategories.map((category: Category) => {
        return {
          value: category.id as string | number,
          name: category.name as string
        };
      });
    } else {
      categoriesOptions = [];
    }
  } else if (ingredient) {
    const ingredientCategory = ingredient.category ? ingredient.category : { id: '', name: '' };
    categoriesOptions = [
      {
        value: ingredientCategory.id as string | number,
        name: ingredientCategory.name as string
      }
    ];
  } else {
    categoriesOptions = [];
  }

  const initialValues: Ingredient = {
    name: ingredient ? ingredient.name : '',
    notes: ingredient ? ingredient.notes : '',
    category: ingredient ? ingredient.category : undefined
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={() => {
        return;
      }}>
      <Form>
        <TextFormField name={'name'} label={'Name'} type={'text'} isDisabled={isDisabled} />
        <TextAreaFormField name={'notes'} label={'Notes'} isDisabled={isDisabled} />
        <SelectFormField
          name={'category'}
          label={'Category'}
          options={categoriesOptions}
          isDisabled={isDisabled || isCategoryDisabled}
        />
      </Form>
    </Formik>
  );
};
