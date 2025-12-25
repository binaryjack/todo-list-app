import React from 'react';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'default';
}

export const Button = ({ variant = 'default', className, ...props }: ButtonProps) => {
  const buttonClass = variant === 'primary' ? `${styles.button} ${styles.primary}` : styles.button;
  const combinedClass = className ? `${buttonClass} ${className}` : buttonClass;

  return <button className={combinedClass} {...props} />;
};

export default Button;
