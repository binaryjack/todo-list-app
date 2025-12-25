import React from 'react';
import styles from './Box.module.css';

interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

export const Box = ({ children, className }: BoxProps) => {
  const combinedClass = className ? `${styles.box} ${className}` : styles.box;
  return <div className={combinedClass}>{children}</div>;
};

export default Box;
