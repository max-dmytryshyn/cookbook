import React, { useState } from 'react';
import styles from './ItemInfoModal.module.scss';
import { Modal } from '../Modal';

export const ItemInfoModal: React.FC<{
  trigger: any;
  form: React.ReactNode;
}> = ({ trigger, form }) => {
  const [isOpen, setIsOpen] = useState<boolean>();
  const handleClose = () => setIsOpen(!isOpen);
  const footer = (
    <>
      <button className={styles.closeInfoModalButton} onClick={handleClose}>
        Close
      </button>
    </>
  );
  return <Modal trigger={trigger} body={form} footer={footer} />;
};
