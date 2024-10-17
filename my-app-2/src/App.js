import React, { useState } from 'react';
import { Layout } from 'antd';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu';
import ProductList from './components/ProductList/ProductList';
import LoginModal from './components/LoginModal/LoginModal';
import ExampleButtons from './components/ExampleButtons/ExampleButtons';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const { Content } = Layout;

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedCount, setSelectedCount] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const products = [
    { id: 1, name: 'Товар 1' },
    { id: 2, name: 'Товар 2' },
    { id: 3, name: 'Товар 3' },
  ];

  const handleLogin = () => {
    setIsLoggedIn(true);
    setIsModalVisible(false);
  };

  const handleLogout = (navigate) => {
    setIsLoggedIn(false);
    navigate('/'); // Перенаправлення на головну сторінку після виходу
  };

  const handleSelectProducts = (count) => {
    setSelectedCount(count);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Router>
      <div className={isDarkMode}>
        <Layout>
          <Header
            isLoggedIn={isLoggedIn}
            onLoginClick={() => setIsModalVisible(true)}
            onLogoutClick={handleLogout}
            selectedCount={selectedCount}
            isDarkMode={isDarkMode}
            toggleTheme={toggleTheme}    
          />
          <Menu />

          <Content>
            <Routes>
              <Route
                path="/"
                element={<div><h2>Вітаємо у магазині!</h2><ExampleButtons /></div>}
              />
              <Route
                path="/admin"
                element={
                  isLoggedIn ? (
                    <ProductList
                      products={products}
                      onSelect={handleSelectProducts}
                      selectedCount={selectedCount}
                    />
                  ) : (
                    <h2>Будь ласка, авторизуйтесь</h2>
                  )
                }
              />
            </Routes>
          </Content>
          <Footer />
        </Layout>
        <LoginModal
          visible={isModalVisible}
          onClose={() => setIsModalVisible(false)}
          onLogin={handleLogin}
        />
      </div>
    </Router>
  );
};

export default App;
