import React, { useState } from 'react';
import styles from './DeleteItemModal.module.scss';
import { Modal } from '../Modal';

export const DeleteItemModal: React.FC<{
  trigger: any;
  text: string | undefined;
  onDelete: () => void;
}> = ({ trigger, text, onDelete }) => {
  const [isOpen, setIsOpen] = useState<boolean>();
  const handleClose = () => setIsOpen(!isOpen);
  const body = <p className={styles.questionText}>{text}</p>;
  const footer = (
    <>
      <button className={styles.cancelDeletionButton} onClick={handleClose}>
        Cancel
      </button>
      <button
        className={styles.confirmDeletionButton}
        onClick={() => {
          onDelete();
          handleClose();
        }}>
        Confirm
      </button>
    </>
  );
  return <Modal trigger={trigger} body={body} footer={footer} />;
};
