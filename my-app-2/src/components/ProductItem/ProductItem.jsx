import React, { useEffect, useState } from 'react';
import { Checkbox } from 'antd';
import styles from './ProductItem.module.css';

const ProductItem = ({ product, onCheckboxChange, isSelected }) => {
  const [isChecked, setIsChecked] = useState(isSelected);

  useEffect(() => {
    setIsChecked(isSelected);
  }, [isSelected]);

  const handleChange = (e) => {
    setIsChecked(e.target.checked);
    onCheckboxChange(product.id, e.target.checked);
  };

  return (
    <div className={styles.productItem}>
      <span className={styles.productName}>{product.name}</span>
      <Checkbox
        checked={isChecked}
        onChange={handleChange}
        className={styles.checkbox}
      />
    </div>
  );
};

export default ProductItem;
