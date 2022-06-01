import React from 'react';
import styles from './FormFiledErrorMessage.module.scss';

interface FormFieldErrorMessageProps {
  message: string;
}

export const FormFieldErrorMessage: React.FC<FormFieldErrorMessageProps> = ({ message }) => {
  return (
    <>
      <p className={styles.messageText}>{message}</p>
    </>
  );
};
