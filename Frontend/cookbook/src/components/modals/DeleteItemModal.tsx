import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import styles from './DeleteItemModal.module.scss';

export const DeleteItemModal: React.FC<{
  trigger: any;
  text: string | undefined;
}> = ({ trigger, text }) => {
  const [isOpen, setIsOpen] = useState<boolean>();
  const handleOpen = () => setIsOpen(!isOpen);
  const handleClose = () => setIsOpen(!isOpen);
  return (
    <Popup trigger={trigger} modal={true} open={isOpen} onOpen={handleOpen}>
      <div className={styles.modalContainer}>
        <div className={styles.modalHeader}>
          <button className={styles.closeModalButton} onClick={handleClose}>
            &times;
          </button>
        </div>
        <div>
          <p className={styles.modalText}>{text}</p>
        </div>
        <div className={styles.modalFooter}>
          <button className={styles.cancelDeletionButton} onClick={handleClose}>
            Cancel
          </button>
          <button
            className={styles.confirmDeletionButton}
            onClick={() => {
              handleClose();
            }}>
            Confirm
          </button>
        </div>
      </div>
    </Popup>
  );
};
