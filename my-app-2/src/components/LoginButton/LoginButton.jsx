import React from 'react';
import styles from './LoginButton.module.css';

const LoginButton = ({ onClick }) => {
  return (
    <button className={styles.loginButton} onClick={onClick}>
      Увійти
    </button>
  );
};

export default LoginButton;
