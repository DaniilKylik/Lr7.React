import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Switch } from 'antd';
import styles from './Header.module.css';
import './Header.css';

const Header = ({ isLoggedIn, onLoginClick, onLogoutClick, selectedCount}) => {
  const navigate = useNavigate(); // Додаємо функцію навігації
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark-theme');
    } else {
      document.documentElement.classList.remove('dark-theme');
    }
  }, [darkMode]);

  const handleLogout = () => {
    onLogoutClick(navigate); // Передаємо навігатор у функцію для перенаправлення
  };
  const toggleTheme = (checked) => {
    setDarkMode(checked);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>Магазин товарів</h1>
      </div>
      <div className={styles.actions}>
        <Switch
           checked={darkMode}
           onChange={toggleTheme}
           checkedChildren="Темна"
           unCheckedChildren="Світла"
           className="themeSwitch"
        />
        {isLoggedIn ? (
          <button onClick={handleLogout}>Вийти</button>
        ) : (
          <button onClick={onLoginClick}>Увійти</button>
        )}
      </div>
    </header>
  );
};

export default Header;
