import React from 'react';
import { HeaderItem } from './HeadetItem';
import { Logo } from '../Logo/Logo';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <Logo width={60} height={60} />
      <HeaderItem path={'/'} label={'Home'} />
      <HeaderItem path={'/categories'} label={'Categories'} />
    </header>
  );
};
