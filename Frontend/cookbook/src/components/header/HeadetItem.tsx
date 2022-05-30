import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HeaderItem.module.scss';

interface HeaderItemProps {
  path: string;
  label: string;
}

export const HeaderItem = (props: HeaderItemProps) => {
  return (
    <li className={styles.headerItem}>
      <Link to={props.path}>{props.label}</Link>
    </li>
  );
};
