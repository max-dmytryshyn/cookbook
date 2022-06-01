import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import styles from './Modal.module.scss';

export const Modal: React.FC<{
  trigger: any;
  body: React.ReactNode;
  footer: React.ReactNode;
}> = ({ trigger, body, footer }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  return (
    <Popup trigger={trigger} modal={true} open={isOpen} onOpen={handleOpen}>
      <div className={styles.modalContainer}>
        <div className={styles.modalHeader}>
          <button className={styles.closeModalButton} onClick={handleClose}>
            &times;
          </button>
        </div>
        <div className={styles.modalBody}>{body}</div>
        <div className={styles.modalFooter}>{footer}</div>
      </div>
    </Popup>
  );
};
