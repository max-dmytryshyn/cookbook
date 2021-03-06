import React, { useState } from 'react';
import styles from './EditOrCreateItemModal.module.scss';
import { Modal } from '../Modal';

export const EditOrCreateItemModal: React.FC<{
  trigger: any;
  form: React.ReactNode;
  onSave: () => void;
}> = ({ trigger, form, onSave }) => {
  const [isOpen, setIsOpen] = useState<boolean>();
  const handleClose = () => setIsOpen(!isOpen);
  const footer = (
    <>
      <button className={styles.cancelCreatingOrUpdatingButton} onClick={handleClose}>
        Cancel
      </button>
      <button
        className={styles.saveItemButton}
        onClick={() => {
          onSave();
          handleClose();
        }}>
        Save
      </button>
    </>
  );
  return <Modal trigger={trigger} body={form} footer={footer} />;
};
