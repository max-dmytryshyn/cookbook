import React from 'react';
import logoImage from './logo.png';
import { Link } from 'react-router-dom';

interface logoProps {
  width: number;
  height: number;
}

export const Logo = (props: logoProps) => {
  return (
    <Link to={'/'}>
      <img
        src={logoImage}
        alt="logo"
        style={{ width: `${props.width}px`, height: `${props.height}px` }}
      />
    </Link>
  );
};
