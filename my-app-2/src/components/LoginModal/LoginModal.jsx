import React, { useState } from 'react';
import { Modal, Button, Input, Form } from 'antd';
import { useNavigate } from 'react-router-dom'; // Для навігації
import styles from './LoginModal.module.css';

const LoginModal = ({ visible, onClose, onLogin }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onLogin();
      onClose();
      navigate('/admin'); // Перенаправлення на сторінку адміністратора
    }, 2000); // Імітація завантаження
  };

  return (
    <Modal
      title="Авторизація"
      visible={visible}
      onCancel={onClose}
      footer={null}
      className={styles.modal}
    >
      <Form>
        <Form.Item className={styles['form-item']} label="Користувач">
          <Input placeholder="Введіть логін" />
        </Form.Item>
        <Form.Item className={styles['form-item']} label="Пароль">
          <Input.Password placeholder="Введіть пароль" />
        </Form.Item>
        <Button
          type="primary"
          onClick={handleLogin}
          loading={loading}
          className={styles.button}
        >
          Увійти
        </Button>
      </Form>
    </Modal>
  );
};

export default LoginModal;

