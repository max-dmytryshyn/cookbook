import React from 'react';
import { Form, Formik } from 'formik';
import { Category } from 'types/CookbookTypes';
import { TextFormField } from 'components/form_fileds/TextFormFiled';
import { TextAreaFormField } from 'components/form_fileds/TextAreaFormField';

interface IngredientFormProps {
  category?: Category;
  isDisabled: boolean;
}

export const CategoryForm: React.FC<IngredientFormProps> = ({ category, isDisabled }) => {
  const initialValues: Category = {
    name: category ? category.name : '',
    description: category ? category.description : ''
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={() => {
        return;
      }}>
      <Form>
        <TextFormField name={'name'} label={'Name'} type={'text'} isDisabled={isDisabled} />
        <TextAreaFormField name={'description'} label={'Description'} isDisabled={isDisabled} />
      </Form>
    </Formik>
  );
};
