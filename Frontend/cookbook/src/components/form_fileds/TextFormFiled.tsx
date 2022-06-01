import React from 'react';
import { Field } from 'formik';
import { ErrorMessage } from 'formik';
import { FormFieldErrorMessage } from './FormFieldErrorMessage';
import styles from './FormField.module.scss';

interface TextFormFieldProps {
  name: string;
  label: string;
  type: string;
  isDisabled: boolean;
}

export const TextFormField: React.FC<TextFormFieldProps> = ({ name, label, type, isDisabled }) => {
  return (
    <div className={styles.field}>
      <label htmlFor={name} className={styles.fieldLabel}>
        {label}
      </label>
      <Field type={type} name={name} className={styles.fieldInput} disabled={isDisabled} />
      <ErrorMessage name={name}>{(msg) => <FormFieldErrorMessage message={msg} />}</ErrorMessage>
    </div>
  );
};
