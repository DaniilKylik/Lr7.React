import React from 'react';
import { Button } from 'antd';
import styles from './ExampleButtons.module.css';

const ExampleButtons = () => {
  return (
    <div className={styles.buttonGroup}>
      <Button type="primary" className={styles.primary}>Primary Button</Button>
      <Button type="default" className={styles.default}>Default Button</Button>
      <Button type="dashed" className={styles.dashed}>Dashed Button</Button>
      <Button type="danger" className={styles.danger}>Danger Button</Button>
    </div>
  );
};

export default ExampleButtons;

