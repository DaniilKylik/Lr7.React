import React from 'react';
import styles from './LogoutButton.module.css';

const LogoutButton = ({ onClick }) => {
  return (
    <button className={styles.logoutButton} onClick={onClick}>
      Вийти
    </button>
  );
};

export default LogoutButton;
