import React from 'react';
import { HeaderItem } from './HeaderItem';
import { Logo } from 'components/logo/Logo';
import styles from './Header.module.scss';

export const Header: React.FC = () => {
  return (
    <header className={styles.headerContainer}>
      <Logo width={60} height={60} />
      <HeaderItem path={'/'} label={'Home'} />
      <HeaderItem path={'/categories'} label={'Categories'} />
    </header>
  );
};
