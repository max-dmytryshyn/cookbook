import React from 'react';
import { Field } from 'formik';
import styles from './FormField.module.scss';

interface Option {
  value: string | number;
  name: string;
}

interface SelectFormFieldProps {
  name: string;
  label: string;
  options: Option[];
  isDisabled: boolean;
}

export const SelectFormField: React.FC<SelectFormFieldProps> = ({
  options,
  name,
  label,
  isDisabled
}) => {
  const optionsList = options.map((option) => {
    return (
      <option key={option.value} value={option.value}>
        {option.name}
      </option>
    );
  });
  return (
    <div className={styles.field}>
      <label htmlFor={name} className={styles.fieldLabel}>
        {label}
      </label>
      <Field as="select" name={name} className={styles.fieldInput} disabled={isDisabled}>
        {optionsList}
      </Field>
      <label />
    </div>
  );
};
