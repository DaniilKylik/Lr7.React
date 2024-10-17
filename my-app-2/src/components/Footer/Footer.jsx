import React from 'react';
import styles from './Footer.module.css';

const Footer = ({ isDarkMode }) => {
  return (
    <footer className={`${styles.footer} ${isDarkMode ? styles.dark : styles.light}`}>
      <p>Всі права захищені &copy; 2024</p>
    </footer>
  );
};

export default Footer;
