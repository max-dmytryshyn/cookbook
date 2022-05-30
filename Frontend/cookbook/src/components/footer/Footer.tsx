import React from 'react';
import { Logo } from '../Logo/Logo';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <Logo width={60} height={60} />
      <p className={styles.footerNameText}>Max Dmytryshyn 2022</p>
      <address className={styles.footerContactsText}>maksumus22@gmail.com</address>
    </footer>
  );
};
