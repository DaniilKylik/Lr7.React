import React from 'react';
import styles from './Menu.module.css';

const Menu = () => {
  return (
    <nav className={styles.menu}>
      <ul>
        <li>Головна</li>
        <li>Товари</li>
        <li>Контакти</li>
      </ul>
    </nav>
  );
};

export default Menu;