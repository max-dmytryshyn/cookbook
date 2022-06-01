import React from 'react';
import styles from './DeleteButton.module.scss';

export const DeleteButton: React.FC = () => {
  return <button className={styles.deleteButton}>-</button>;
};
