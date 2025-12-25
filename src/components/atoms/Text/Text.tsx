import React, { JSX } from 'react';
import styles from './Text.module.css';

interface TextProps {
  children: React.ReactNode;
  color?: 'primary' | 'gray' | 'default';
  as?: keyof JSX.IntrinsicElements;
}

export const Text = ({ children, color = 'default', as: Component = 'span' }: TextProps) => {
  const className = color === 'primary' ? styles.primary : color === 'gray' ? styles.gray : '';
  return <Component className={className}>{children}</Component>;
};

export default Text;
